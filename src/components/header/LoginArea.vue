<template>
	<div class="login-area">
		<div v-if="loginEnabled">{{$t('doLogin')}}</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	setup() {
		const store = useStore();
		const loginEnabled = computed(() => store.state.metaData.authEnabled);
		return {
			loginEnabled,
		}
	}
});
</script>