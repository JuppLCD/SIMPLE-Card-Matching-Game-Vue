<template>
	<Container>
		<h1 class="text-3xl font-bold underline text-center my-3">
			{{ state === 0 ? 'Play the game' : 'Winnn!!' }}
		</h1>
		<Button type="button" @click="resetGame" class="block ml-auto" variant="blue">Reset Game</Button>

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

const { newGame, state, allCards, flippedCard } = new Game();
const resetGame = () => {
	newGame(Dificult.NORMAL);
};
resetGame();
</script>

<style scoped></style>
