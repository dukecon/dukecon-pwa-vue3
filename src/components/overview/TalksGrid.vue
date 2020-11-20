<template>
	<div class="talks-grid">
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
	setup(props) {
		console.log(props.events)
		return {

		};
	},
	props: {
		events: Object as () => Array<Talk>,
	}
});
</script>
<style lang="scss" scoped>
	.talks-grid {
		display: grid;
		padding: 0.5em;
		background: #eeeeee;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		grid-gap: 0.5rem;
		ul {
			display: contents;
			li {
				background: white;
				padding: 0.25rem;
			}
		}
	}
</style>
