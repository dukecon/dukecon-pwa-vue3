<template>
  <div class="main-area about">
    <h1 class="title is-1">Powered by Dukecon</h1>
	<div v-html="$t('feedback_content')">
	</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	setup() {
	}
});
</script>
