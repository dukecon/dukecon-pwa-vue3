<template>
	<Suspense>
		<template #default>
			<main class="main box">
				<side-menu>
					<filters /> <!-- put this with talks-overview, not needed for all pages -->
				</side-menu>
				<div class="main-area talks-overview container">
					<!-- includes tabs for day selection and the grid separated by time slots -->
					<talks-grid :events="events"/>
				</div>
			</main>
		</template>
		<template #fallback>
			<main class="main box">
				<div class="side-menu">&nbsp;</div>
				<div class="is-loading">&nbsp;</div>
			</main>
		</template>
	</Suspense>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed } from 'vue';
import { useStore } from 'vuex';
import SideMenu from '@/components/SideMenu.vue';
import Filters from '@/components/Filters.vue';
import TalksGrid from '@/components/overview/TalksGrid.vue';

export default {
	components: {
		SideMenu,
		Filters,
		TalksGrid,
	},
	setup() {
		const store = useStore();
		const events = computed(() => store.getters.filteredBySearchstring);

		return {
			events,
		}
	}
}
</script>
