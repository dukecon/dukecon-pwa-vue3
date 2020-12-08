<template>
	<div :class="{ 'is-open': isOpen }" class="side-menu">
		<div class="toggle-menu-content container">
			<slot/>
		</div>
		<button class="toggle-menu-button button is-pulled-right" :title="title" @click="toggle()">
			<slot name="toggle-button-icon" />
		</button>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		const isOpen = ref(false);
		const toggle = () =>  {
			isOpen.value = !isOpen.value
		};

		return {
			isOpen,
			toggle,
		}
	},
	props: {
		title: {
			type: String,
			default: 'toggle side menu'
		}
	}
});
</script>
