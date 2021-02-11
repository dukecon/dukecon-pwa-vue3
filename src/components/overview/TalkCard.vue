<template>
	<router-link :to="'/talk/' + talk.id" class="talks-card card">
		<h3 class="title is-3">{{ talk.title }}</h3>
		<div>{{ getTimeStringWithWeekday(talk.start) }} - {{ getTimeString(talk.end) }} </div>
	</router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getTimeStringWithWeekday, getTimeString } from '@/utils/dateTime';
import type { Talk } from '@/types';


export default defineComponent({
	setup() {
		return {
			getTimeStringWithWeekday,
			getTimeString,
		}
	},
	props: {
		talk: {
			type: Object as () => Talk,
			required: true,
		},
	}
});
</script>
