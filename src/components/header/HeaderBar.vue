<template>
	<header class="header has-background-primary has-text-white">
		<div class="logo">
			<img alt="" src="@/assets/logo_dukecon_on_white.png">
		</div>
		<quick-search />
		<login-area />
		<nav-menu />
	</header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LoginArea from '@/components/header/LoginArea.vue';
import QuickSearch from '@/components/header/QuickSearch.vue';
import NavMenu from '@/components/header/NavMenu.vue';

export default defineComponent({
	components: {
		LoginArea,
		QuickSearch,
		NavMenu,
	},
});
</script>
