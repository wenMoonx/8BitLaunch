<template>
  <object
    v-if="refresh"
    type="image/svg+xml"
    data="solacon.svg"
    :data-value="props.data"
    :data-rgb="hexToRgb(rgbColor)"
  />
</template>

<script setup lang="ts">
  const props = defineProps<{
    variant?: string;
    data?: string;
  }>();

  const rgbColor = useCssVar(
    `--q-${props.variant || 'secondary'}`,
    useDocument()?.body
  ).value;

  let refresh = $ref(true);

  watch(props, () => {
    refresh = false;
    nextTick(() => (refresh = true));
  });
</script>

<style scoped></style>
