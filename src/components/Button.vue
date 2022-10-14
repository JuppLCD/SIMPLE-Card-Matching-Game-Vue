<template>
	<button :class="className" v-bind="$attrs">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
	bg?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'white';
	color?: 'white' | 'gray-900';
}

const { bg, color } = withDefaults(defineProps<ButtonProps>(), {
	bg: 'blue',
	color: 'white',
});

const className = `text-${color} bg-${bg}-700 hover:bg-${bg}-800 focus:ring-4 focus:ring-${bg}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`;
</script>

<style scoped></style>
