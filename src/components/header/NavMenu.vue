<template>
	<nav class="nav tabs">
		<ul>
			<li :class="{'is-active': $route.path==='/'}"><router-link to="/">Home</router-link></li>
			<li :class="{'is-active': $route.path==='/about'}"><router-link to="/about">About</router-link></li>
		</ul>
	</nav>
</template>
