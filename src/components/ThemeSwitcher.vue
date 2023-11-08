<template>
  <HBtn
    color="primary"
    flat
    @click="darkMode = darkMode === 'dark' ? 'light' : 'dark'"
    :icon="darkMode === 'dark' ? 'i-uil-sun' : 'i-uil-moon'"
  />
</template>

<script setup lang="ts">
  const darkMode = useQDarkMode();
</script>
