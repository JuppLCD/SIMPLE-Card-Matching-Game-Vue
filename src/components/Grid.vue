<template>
	<section class="grid gap-4" :class="[className]">
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
const className = `grid-cols-${cols}`;
</script>

<style scoped></style>
