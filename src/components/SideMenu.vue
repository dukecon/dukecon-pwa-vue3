<template>
	<!-- Should slide in on small screens, always visible on wider screens -->
	<div class="side-menu">
		<button class="toggle-menu-button button">☰</button>
		<div class="toggle-menu-content container">
			<slot/>
		</div>
	</div>
</template>
