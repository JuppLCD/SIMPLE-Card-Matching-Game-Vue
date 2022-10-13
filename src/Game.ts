import { ref } from 'vue';
import { CardType } from './types/Card.interface';

export class Game {
	state = ref(0);
	allCards = ref<CardType[]>([]);

	private selected = ref<null | number>(null);
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
		const cards: CardType[] = this.pairOfCards(this.diifucultPairsNumber[dificult]);
		this.state.value = 0;
		this.allCards.value = cards;
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
	private win = () => {
		this.state.value = 1;
		alert('WINN');
	};

	flippedCard = (id: number): void => {
		const cards = [...this.allCards.value];

		const indexClickedCard = cards.findIndex((card) => card.id === id);

		let cardSelected: CardType | undefined;
		if (this.selected.value !== null) {
			const indexSelectedCard = cards.findIndex((card) => card.id === this.selected.value);
			cardSelected = cards[indexSelectedCard];
		}

		const cardClicked = cards[indexClickedCard];

		if (cardClicked.isMatch || cardClicked.isFlipped) return;

		cardClicked.isFlipped = true;

		if (cardSelected !== undefined) {
			if (cardSelected.color === cardClicked.color) {
				cardSelected.isMatch = true;
				cardClicked.isMatch = true;
			}

			cardSelected.isFlipped = false;
			cardClicked.isFlipped = false;
			this.selected.value = null;

			if (this.isFinish()) {
				this.win();
			}
		} else {
			this.selected.value = cardClicked.id;
		}

		this.allCards.value = cards;
	};
}

export enum Dificult {
	EASY = 'easy',
	NORMAL = 'normal',
	HARD = 'hard',
}
