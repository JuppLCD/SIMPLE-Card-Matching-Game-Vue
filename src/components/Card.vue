<template>
	<li :class="{ match: card.isMatch, flipped: card.isFlipped }" @click="emits('flippedCard', card.id)">
		<div>CAJA</div>
	</li>
</template>

<script setup lang="ts">
import type { CardType } from '../types/Card.interface';

const { card } = defineProps<{ card: CardType }>();

const emits = defineEmits<{
	(e: 'flippedCard', id: number): void;
}>();
</script>

<style scoped>
li {
	list-style: none;
	border: 5px solid black;
	margin-top: 20px;
	transition: background-color 1s ease;
	padding: 20px;
}
.match {
	background-color: v-bind('card.color');
	border-color: rgb(251, 255, 0);
}
.flipped {
	background-color: v-bind('card.color');
	border-color: rgb(255, 163, 88);
}
</style>
