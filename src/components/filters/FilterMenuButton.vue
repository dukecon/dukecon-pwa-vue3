<template>
	<div class="has-badge">
		<img class="is-button-image" src="@/assets/filter.png" alt="" />
		<span v-if="filterCount > 0" class="badge is-top is-right">{{filterCount}}</span>
		<span v-if="onlyFavorites" class="badge is-bottom is-right">★</span>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		filterCount: {
			type: Number,
			default: 0,
		},
		onlyFavorites: {
			type: Boolean,
			default: false,
		}
	}
});
</script>
