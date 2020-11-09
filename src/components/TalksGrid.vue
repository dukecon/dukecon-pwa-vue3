<template>
	<div class="talks-grid">
		<ul>
			<li v-for="event in events" :key="event.id">{{event.title}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	setup(props) {
		console.log(props.events)
		return {

		};
	},
	props: {
		events: Array,
	}
}
</script>
