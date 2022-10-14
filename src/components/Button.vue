<template>
	<button
		class="focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
		:class="[className]"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
	variant?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'white';
	color?: 'white' | 'gray-900';
}

const { variant, color } = withDefaults(defineProps<ButtonProps>(), {
	variant: 'blue',
	color: 'white',
});
const className = `text-${color} bg-${variant}-700 hover:bg-${variant}-800  focus:ring-${variant}-300 `;
</script>

<style scoped></style>
