<template>
	<input type=checkbox id="side-menu-toggle" class="toggle-menu-checkbox" />
	<div class="side-menu">
		<label for="side-menu-toggle" class="toggle-menu-button button is-pulled-right" :title="title">
			<slot name="toggle-button-icon" />
		</label>
		<div class="toggle-menu-content container">
			<slot/>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		title: {
			type: String,
			default: 'toggle side menu'
		}
	}
});
</script>

<style scoped>
.toggle-menu-checkbox {
	position: absolute;
	top: -1em;
	visibility: hidden;
}
</style>
