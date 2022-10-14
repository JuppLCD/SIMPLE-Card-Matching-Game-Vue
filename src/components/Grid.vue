<template>
	<section :class="className">
		<slot />
	</section>
</template>

<script setup lang="ts">
const { cols } = withDefaults(
	defineProps<{
		cols?: string;
	}>(),
	{
		cols: '3',
	}
);
const className = `grid grid-cols-${cols} gap-4`;
</script>

<style scoped></style>
