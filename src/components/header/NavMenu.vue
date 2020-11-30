<template>
	<nav class="nav tabs">
		<ul>
			<li :class="{'is-active': $route.path==='/'}"><router-link to="/" class="has-text-link-light">Home</router-link></li>
			<li :class="{'is-active': $route.path==='/about'}"><router-link to="/about" class="has-text-link-light">About</router-link></li>
		</ul>
	</nav>
</template>
