<template>
	<section :class="`grid grid-cols-${cols} gap-4`">
		<slot />
	</section>
</template>

<script setup lang="ts">
const { cols } = withDefaults(
	defineProps<{
		cols?: number;
	}>(),
	{
		cols: 3,
	}
);
</script>

<style scoped></style>
