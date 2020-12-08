<template>
<nav class="navbar" role="navigation" aria-label="main navigation" @keyup.esc="close()">
	<div class="navbar-brand">
		<button
			:class="{'is-active': isOpen }"
			role="button"
			class="navbar-burger button has-background-transparent is-borderless"
			aria-label="menu"
			:aria-expanded="isOpen"
			@click="toggle()">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>
	</div>
	<div :class="{'is-active': isOpen }" class="navbar-menu">
		<router-link :class="{'is-active': $route.path==='/'}" to="/" class="navbar-item">{{$t('talks')}}</router-link>
		<router-link :class="{'is-active': $route.path==='/about'}" to="/about" class="navbar-item">{{$t('feedback')}}</router-link>
		<language-select class="navbar-item" />
	</div>
</nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import LanguageSelect from '@/components/header/LanguageSelect.vue';

export default defineComponent({
	components: {
		LanguageSelect,
	},
	setup() {
		const isOpen = ref(false);
		const toggle = () =>  {
			isOpen.value = !isOpen.value
		};
		const close = () =>  {
			isOpen.value = false;
		};

		return {
			isOpen,
			toggle,
			close,
		}
	}
});
</script>

