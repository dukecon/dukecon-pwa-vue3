<template>
  <div class="main-area about">
    <h1 class="title is-1">Powered by Dukecon</h1>
	<div v-html="$t('feedback_content')">
	</div>
	<img alt="" src="@/assets/logo_dukecon.png">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	setup() {
	}
});
</script>
<style lang="scss" scoped>
	.about {
		padding: 1rem;
		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-gap: 1rem;
		align-items: center;
		justify-items: center;
		img {
			object-fit: cover;
			max-height: 100%;
			max-width: 100%;
		}
	}
</style>
