import { ref } from 'vue';
import { MemoryCardType } from './types/MemoryCard.interface';

export class Game {
	state = ref(0);
	allCards = ref<MemoryCardType[]>([]);

	private selected = ref<null | MemoryCardType>(null);
	private values = [
		'#f0f8ff',
		'#00ffff',
		'#0000ff',
		'#8a2be2',
		'#5f9ea0',
		'#ff7f50',
		'#ffd700',
		'#008000',
		'#7cfc00',
		'#4b0082',
	];
	private diifucultPairsNumber = {
		easy: 3,
		normal: 6,
		hard: 8,
	};

	newGame = (dificult: Dificult) => {
		const cards: MemoryCardType[] = this.pairOfCards(this.diifucultPairsNumber[dificult]);
		this.state.value = 0;
		this.allCards.value = cards;
	};

	flippedCard = (id: number): void => {
		const cards = this.allCards.value;

		const indexClickedCard = cards.findIndex((card) => card.id === id);
		const cardClicked = cards[indexClickedCard];

		const cardSelected = this.selected.value;

		if (cardClicked.isMatch || cardClicked.isFlipped) return;

		cardClicked.isFlipped = true;

		if (cardSelected !== null) {
			if (cardSelected.color === cardClicked.color) {
				// They matched
				cardSelected.isMatch = true;
				cardClicked.isMatch = true;
				cardSelected.isFlipped = false;
				cardClicked.isFlipped = false;
			} else {
				// They did not match
				setTimeout(() => {
					cardSelected.isFlipped = false;
					cardClicked.isFlipped = false;
				}, 1000);
			}

			this.selected.value = null;

			if (this.isFinish()) {
				this.winGame();
			}
		} else {
			this.selected.value = cardClicked;
		}
	};

	private createCard = (value: string, id: number) => {
		return {
			id,
			color: value,
			isMatch: false,
			isFlipped: false,
		};
	};

	private pairOfCards = (numberOfPairs: number) => {
		const cardValues = this.values.slice(0, numberOfPairs);
		const peersValues = [...cardValues, ...cardValues];
		peersValues.sort(() => Math.random() - 0.5);

		const cards = peersValues.map((value, index) => this.createCard(value, index));

		return cards;
	};

	private isFinish = (): boolean => {
		return this.allCards.value.every((card) => card.isMatch);
	};

	private winGame = () => {
		this.state.value = 1;

		setTimeout(() => {
			alert('WINN');
		}, 500);
	};
}

export enum Dificult {
	EASY = 'easy',
	NORMAL = 'normal',
	HARD = 'hard',
}
