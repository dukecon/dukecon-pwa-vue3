<template>
	<header-bar />
	<router-view />
	<footer-bar />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
		store.dispatch('load');
		const loginEnabled = ref(store.state.loginEnabled);
		return {
			loginEnabled,
		}
	}
});
</script>
