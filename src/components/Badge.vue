<template>
  <div relative w-max overflow-hidden rounded-full px-2 py-1>
    <div
      absolute
      bg-positive
      top-0
      left-0
      w-full
      h-full
      opacity-10
      flex
      items-center
      :class="`bg-${col}`"
    ></div>
    <span relative z-2 text-xs font-500 opacity-80 :color="col">{{
      text
    }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string;
    col: string;
  }>();
</script>

<style scoped></style>
