<template>
	<!-- Should slide in on small screens, always visible on wider screens -->
	<div class="side-menu" :class="{ 'is-open': menuOpen }">
		<button class="toggle-menu-button button is-pulled-right" @click="toggleMenu()">☰</button>
		<div class="toggle-menu-content container">
			<slot/>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		const menuOpen = ref(false);
		const toggleMenu = () => {
			menuOpen.value = !menuOpen.value;
		}
		return {
			menuOpen,
			toggleMenu,
		}
	}
});
</script>
