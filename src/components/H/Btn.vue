<template>
  <q-btn
    no-caps
    align="around"
    color="primary"
    dense
    :padding="noPadding ? '' : 'sm'"
  >
    <slot />
  </q-btn>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      noPadding?: boolean;
    }>(),
    {
      noPadding: false,
    }
  );
</script>
