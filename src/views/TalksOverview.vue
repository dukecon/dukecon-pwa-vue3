<template>
	<Suspense>
		<template #default>
			<main class="main box">
				<side-menu title="Show/Hide Filters">
					<template v-slot:toggle-button-icon>
						<filter-menu-button />
					</template>  <!-- pulled out of SideMenu.vue so we can add badges and things -->
					<filter-menu :filters="filters"/>
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
import SideMenu from '@/components/SideMenu.vue'; // need to add extension because TS compiler does not know it (BUG?)
import FilterMenuButton from '@/components/filters/FilterMenuButton.vue';
import FilterMenu from '@/components/filters/FilterMenu.vue';
import TalksGrid from '@/components/overview/TalksGrid.vue';

export default {
	components: {
		SideMenu,
		FilterMenuButton,
		FilterMenu,
		TalksGrid,
	},
	setup() {
		const store = useStore();
		const events = computed(() => store.getters.filteredBySearchstring);
		const filters = computed(() => store.state.filters);

		return {
			events,
			filters,
		}
	}
}
</script>
