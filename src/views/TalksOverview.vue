<template>
  <div class="talks-overview container">
    <talks-grid :events="events"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue';
import { useStore } from 'vuex';
import TalksGrid from '@/components/TalksGrid.vue'

export default {
	components: {
		TalksGrid,
	},
	setup() {
		const store = useStore();
		console.log(store.state.events)
		const events = computed(() => store.state.events);

		return {
			events,
		}
	}
}
</script>
