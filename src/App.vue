<template>
	<h1 class="text-3xl font-bold underline">
		{{ state === 0 ? 'Play the game' : 'Winnn!!' }}
	</h1>
	<Button type="button" @click="resetGame">Reset Game</Button>

	<Grid>
		<Card v-for="card in allCards" :key="card.id" :card="card" @flippedCard="flippedCard" />
	</Grid>
</template>

<script setup lang="ts">
import { Game, Dificult } from './Game';

import Grid from './components/Grid.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';

const { newGame, state, allCards, flippedCard } = new Game();
const resetGame = () => {
	newGame(Dificult.EASY);
};
resetGame();
</script>

<style scoped>
/* @import url('./style.css'); */
</style>
