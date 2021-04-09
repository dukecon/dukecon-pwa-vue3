<template>
	<div class="talks-grid has-background-grey-lighter">
		<ul>
			<li v-for="event in events" :key="event.id"><talk-card :talk="event" /></li>
		</ul>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TalkCard from '@/components/overview/TalkCard.vue';
import { Talk } from '@/types';

export default defineComponent({
	components: {
		TalkCard,
	},
	props: {
		events: Object as () => Array<Talk>,
	}
});
</script>
