<template>
	<li
		class="list-none mt-5 p-5 transition-colors duration-500 ease-linear border-4 border-neutral-900 rounded h-32"
		:class="{ match: card.isMatch, flipped: card.isFlipped }"
		@click="emits('flippedCard', card.id)"
	>
		<div>CAJA</div>
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
.match {
	background-color: v-bind('card.color');
	border-color: rgb(251, 255, 0);
}
.flipped {
	background-color: v-bind('card.color');
	border-color: rgb(255, 163, 88);
}
</style>
