<template>
  <label cursor-pointer block>
    <div flex items-center>
      <q-checkbox :dense="dense" keep-color color="primary" v-model="model" />
      <div v-if="text" flex items-center>
        <q-icon v-if="icon" size="sm" color-defaultText :name="icon" mr-2 />
        <span :class="{ 'ml-2': dense }">{{ text }}</span>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
    text?: string;
    icon?: string;
    dense?: boolean;
  }>();

  const model = useVModel(props, 'modelValue');
</script>

<style scoped></style>
