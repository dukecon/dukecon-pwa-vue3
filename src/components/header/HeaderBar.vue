<template>
	<header class="header has-background-primary has-text-white">
		<div class="logo">
			<img alt="" src="@/assets/logo.png">
		</div>
		<quick-search />
		<login-area :class="{ 'is-hidden' : !loginEnabled }" />
		<nav-menu />
		<language-select />
	</header>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import LoginArea from '@/components/header/LoginArea';
import QuickSearch from '@/components/header/QuickSearch';
import NavMenu from '@/components/header/NavMenu';
import LanguageSelect from '@/components/header/LanguageSelect';

export default defineComponent({
	components: {
		LoginArea,
		QuickSearch,
		NavMenu,
		LanguageSelect,
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
