<template>
  <ConfirmDialog v-model="mainStore.confirmDialog.show" />
  <router-view />
</template>

<script setup lang="ts">
  useQDarkMode();
  const q = useQuasar();

  const mainStore = useMainStore();

  q.iconMapFn = (iconName) =>
    iconName.startsWith('i-uil') ? { cls: iconName } : { icon: iconName };
</script>
