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
}

const { variant = 'blue' } = defineProps<ButtonProps>();

const colorClass = {
	blue: {
		text: 'text-white',
		bg: 'bg-blue-700',
		hover: 'hover:bg-blue-800',
		focus: 'focus:ring-blue-300',
	},
	green: {
		text: 'text-white',
		bg: 'bg-green-700',
		hover: 'hover:bg-green-800',
		focus: 'focus:ring-green-300',
	},
	red: {
		text: 'text-white',
		bg: 'bg-red-700',
		hover: 'hover:bg-red-800',
		focus: 'focus:ring-red-300',
	},
	purple: {
		text: 'text-white',
		bg: 'bg-purple-700',
		hover: 'hover:bg-purple-800',
		focus: 'focus:ring-purple-300',
	},
	white: {
		text: 'text-gray-900',
		bg: 'bg-white-700',
		hover: 'hover:bg-white-800',
		focus: 'focus:ring-white-300',
	},
	yellow: {
		text: 'text-white',
		bg: 'bg-yellow-400',
		hover: 'hover:bg-yellow-500',
		focus: 'focus:ring-yellow-300',
	},
};
const className = `${colorClass[variant].text} ${colorClass[variant].bg} ${colorClass[variant].hover} ${colorClass[variant].focus}`;
</script>

<style scoped></style>
