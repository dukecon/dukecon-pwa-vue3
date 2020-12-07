<template>
	<header-bar />
	<main v-if="!loaded" class="main-area is-loading">
		<div title="loading" class="loader"></div>
	</main>
	<router-view v-else />
	<footer-bar />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import HeaderBar from '@/components/header/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default defineComponent({
	components: {
		HeaderBar,
		FooterBar,
	},
	setup() {
		const store = useStore();
		const loaded = computed(() => store.state.loaded);
		return {
			loaded
		}

	}
});
</script>
