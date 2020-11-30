<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<button
			:class="{'is-active': isOpen }"
			role="button"
			class="navbar-burger button has-background-transparent is-borderless"
			aria-label="menu"
			aria-expanded="false"
			@click="toggle()">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>
	</div>
	<div :class="{'is-active': isOpen }" class="navbar-menu">
		<router-link :class="{'is-active': $route.path==='/'}" to="/" class="navbar-item">Home</router-link>
		<router-link :class="{'is-active': $route.path==='/about'}" to="/about" class="navbar-item">About</router-link>
	</div>
</nav>
</template>
<script>
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
	}
});
</script>

