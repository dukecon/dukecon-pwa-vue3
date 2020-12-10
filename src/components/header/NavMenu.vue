<template>
<nav class="navbar" role="navigation" aria-label="main navigation" @keyup.esc="close()">
	<div class="navbar-brand">
		<button
			:class="{'is-active': isOpen }"
			role="button"
			class="navbar-burger button has-background-transparent is-borderless"
			aria-label="menu"
			:aria-expanded="isOpen"
			@click="toggle()">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>
	</div>
	<div :class="{'is-active': isOpen }" class="navbar-menu">
		<router-link :class="{'is-active': $route.path==='/'}" to="/" class="navbar-item">{{$t('talks')}}</router-link>
		<router-link :class="{'is-active': $route.path==='/timetable'}" to="/timetable" class="navbar-item">{{$t('timetable')}}</router-link>
		<router-link :class="{'is-active': $route.path==='/speaker'}" to="/speaker" class="navbar-item">{{$t('speaker')}}</router-link>
		<router-link :class="{'is-active': $route.path==='/about'}" to="/about" class="navbar-item">{{$t('feedback')}}</router-link>
		<external-link v-if="homepageUrl" :href="homepageUrl" className="navbar-item" >{{homepageTitle}}</external-link>
		<language-select class="navbar-item" />
	</div>
</nav>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import type { state as State } from '@/types';
import LanguageSelect from '@/components/header/LanguageSelect.vue';

export default defineComponent({
	components: {
		LanguageSelect,
	},
	setup() {
		const state: State = useStore().state;
		const homepageTitle = computed(() => state.metaData.name || state.metaData.homeTitle || 'Homepage');
		const homepageUrl = computed(() => state.metaData.homeUrl ?? null);

		const isOpen = ref(false);
		const toggle = () =>  {
			isOpen.value = !isOpen.value
		};
		const close = () =>  {
			isOpen.value = false;
		};

		return {
			isOpen,
			toggle,
			close,
			homepageTitle,
			homepageUrl,
		}
	}
});
</script>

