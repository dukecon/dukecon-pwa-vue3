<template>
	<header class="header">
		<div class="logo">
			<img alt="" src="./assets/logo.png"> 
		</div>
		<nav class="tabs">
			<ul>
				<li :class="{'is-active': $route.path==='/'}"><router-link to="/">Home</router-link></li>
				<li :class="{'is-active': $route.path==='/about'}"><router-link to="/about">About</router-link></li>
			</ul>
		</nav>
		<div class="search">&nbsp;</div>
	</header>
	<main class="main box">
		<side-menu>
			<Suspense>
				<template #default>
					<filters />
				</template>
				<template #fallback>...</template>
			</Suspense>
		</side-menu>
		<Suspense>
			<template #default>
				<router-view />
			</template>
			<template #fallback>
				<div class="is-loading">&nbsp;</div>
			</template>
		</Suspense>
	</main>
	<footer class="footer">Footer here</footer>
</template>

<script>
import { useStore } from 'vuex';
import SideMenu from './components/SideMenu';
import Filters from './components/Filters';

export default {
	components: {
		SideMenu,
		Filters,
	},
	setup() {
		const store = useStore();
		store.dispatch('load');
	}
};
</script>
