<template>
	<li class="card" :class="{ match: card.isMatch, flipped: card.isFlipped }" @click="emits('flippedCard', card.id)">
		<figure class="front">?</figure>
		<figure class="back">{{ card.color }}</figure>
	</li>
</template>

<script setup lang="ts">
import type { MemoryCardType } from '../types/MemoryCard.interface';

const { card } = defineProps<{ card: MemoryCardType }>();

const emits = defineEmits<{
	(e: 'flippedCard', id: number): void;
}>();
</script>

<style scoped>
.card {
	height: 180px;
	width: 180px;
	margin: 5px auto;

	list-style: none;
	box-shadow: 0px 2px 4px gray;
	border-radius: 0.5em;

	position: relative;
	cursor: pointer;

	transform-style: preserve-3d;
	transition: all 0.65s;
}

.card figure {
	width: 100%;
	height: 100%;
	margin: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	backface-visibility: hidden;
}

.card .front {
	background-color: #f9bc60;
	border-radius: 5px / 5px;
	border: 9px double #e16162;
}

.card .back {
	transform: rotateY(180deg);
}

.match {
	background-color: v-bind('card.color');

	transform: rotateY(180deg);
}
.flipped {
	background-color: v-bind('card.color');

	transform: rotateY(180deg);
}

@media (max-width: 500px) {
	.card {
		height: 200px;
		width: 200px;
	}
}
</style>
