<template>
	<header-bar />
	<router-view />
	<footer-bar />
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import HeaderBar from '@/components/header/HeaderBar';
import FooterBar from '@/components/FooterBar';

export default {
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
};
</script>
