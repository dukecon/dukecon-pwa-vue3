<template>
	<footer class="footer">
		<div>
			<external-link class="footer-link" v-for="(link, key) in links" :href="link[locale]" :key="key">{{$t(key)}}</external-link>
			<span class="is-pulled-right is-hidden-mobile">powered by <external-link href="http://www.dukecon.org">DukeCon</external-link></span>
		</div>
	</footer>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import type { store as Store } from '@/types';

export default defineComponent({
	setup() {
		const i18n = useI18n();
		const store: Store = useStore();
		const links = computed(() => store.getters.footerLinks);
		return {
			links,
			locale: i18n.locale,
		}
	}

})
</script>