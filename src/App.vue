<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<side-menu>
		<filters />
	</side-menu>
	<router-view />
</template>

<script>
import SideMenu from './components/SideMenu';
import Filters from './components/Filters';

export default {
	components: {
		SideMenu,
		Filters,
	},
};
</script>
