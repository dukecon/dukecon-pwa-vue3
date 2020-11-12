<template>
	<header class="header">
		Logo
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
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
import SideMenu from './components/SideMenu';
import Filters from './components/Filters';

export default {
	components: {
		SideMenu,
		Filters,
	},
	setup() {

	}
};
</script>
