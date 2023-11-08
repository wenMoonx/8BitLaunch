<template>
  <div rounded-lg>
    <q-select
      borderless
      v-model="language"
      :options="['en-US']"
      dropdown-icon="i-uil-angle-down"
    />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const language = useLocalStorage('lang', 'en-US');

  if (!process.env.SERVER) {
    const i18n = useI18n();

    i18n.locale.value = language.value;

    watch(language, () => (i18n.locale.value = language.value));
  }
</script>

<style scoped></style>
