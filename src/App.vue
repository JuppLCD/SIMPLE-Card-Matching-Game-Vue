<template>
	<Container>
		<h1 class="text-3xl font-bold underline text-center my-3">
			{{ state === 0 ? 'Play the game' : 'Winnn!!' }}
		</h1>

		<div class="game-options">
			<label>
				Select the Dificult
				<select v-model="dificultGame" @change="createNewGame">
					<option :value="Dificult.EASY">EASY</option>
					<option :value="Dificult.NORMAL">NORMAL</option>
					<option :value="Dificult.HARD">HARD</option>
				</select>
			</label>
			<Button type="button" @click="createNewGame" class="block ml-auto" variant="green">Reset Game</Button>
		</div>

		<Grid>
			<Card v-for="card in allCards" :key="card.id" :card="card" @flippedCard="flippedCard" />
		</Grid>
	</Container>
</template>

<script setup lang="ts">
import { Game, Dificult } from './Game';

import Container from './components/Container.vue';
import Grid from './components/Grid.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';

import { ref } from 'vue';

const { newGame, state, allCards, flippedCard } = new Game();

const dificultGame = ref(Dificult.EASY);

const createNewGame = () => {
	newGame(dificultGame.value);
};

createNewGame();
</script>

<style scoped>
.game-options {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.game-options select {
	color: #000;
}

@media (max-width: 400px) {
	.game-options {
		flex-direction: column;
	}

	.game-options button {
		margin: 20px 0;
	}
}
</style>
