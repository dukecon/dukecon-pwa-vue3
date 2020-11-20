<template>
	<div class="quick-search field"><input class="input" type="text" v-model="searchString" placeholder="quick search"></div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
	setup() {
		const store = useStore();

		const searchString = computed({
			get: () => store.state.searchString,
			set: (newValue: string) => store.dispatch('setSearchString', newValue),
		});

		return {
			searchString,
		}
	}
});
</script>
