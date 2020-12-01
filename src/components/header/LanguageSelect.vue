<template>
	<div class="language-select">
		<button class="button is-image-button" :title="$t('language.select')" @click="toggle()">
			<img v-if="locale === 'de'" src="@/images/de.png" alt=""/>
			<img v-if="locale === 'en'" src="@/images/en.png" alt=""/>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
	setup() {
		const i18n = useI18n();

		const toggle = () => {
			if (i18n.locale.value === 'de') {
				i18n.locale.value = 'en';
			} else {
				i18n.locale.value = 'de';
			}
		};

		return {
			locale: i18n.locale,
			toggle,
		};
	}

});
</script>
