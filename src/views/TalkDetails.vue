<template>
  <div class="main-area talk-details">
    <h1 class="title is-1">
		{{$t('talk')}}: {{talk.title}}
	</h1>
	<img alt="" src="@/assets/logo_dukecon.png">
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
	setup() {
		const route = useRoute();
		const store = useStore();
		const talkId = route.params.eventId;
		const talk = computed(() => store.getters.talkById(talkId));

		return {
			talkId,
			talk,
		}
	}
});
</script>
