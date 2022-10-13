<template>
	<li
		:class="{ match: card.isMatch, flipped: card.isFlipped }"
		:style="{ backgroundColor: card.color }"
		@click="emits('flippedCard', card.id)"
	>
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
}
.match {
	border-color: rgb(251, 255, 0);
}
.flipped {
	border-color: red;
}
</style>
