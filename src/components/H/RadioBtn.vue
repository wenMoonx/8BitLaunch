<template>
  <label cursor-pointer block>
    <div flex items-center>
      <q-radio
        v-bind="$attrs"
        :val="val"
        keep-color
        color="primary"
        v-model="model"
      />
      <div v-if="text" flex items-center>
        <q-icon v-if="icon" size="sm" color-defaultText :name="icon" mr-2 />
        <span>{{ text }}</span>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: string | number;
    val: string | number;
    text?: string;
    icon?: string;
  }>();

  const model = useVModel(props, 'modelValue');
</script>

<style scoped></style>
