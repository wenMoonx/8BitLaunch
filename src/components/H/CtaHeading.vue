<template>
  <div
    flex
    flex-col
    sm:flex-row
    sm:justify-between
    sm:items-center
    mb-6
    sm:mb-8
  >
    <h1
      text-2xl
      font-900
      relative
      mb-6
      sm:mb-0
      pb-2
      un-before="content-empty absolute top-full left-0 transform h-1 w-1/4 rounded-md bg-warning"
    >
      {{ text }}
    </h1>
    <HBtn
      v-if="buttonText || buttonIcon"
      @click="handleEmit"
      outline
      w-max
      :icon="buttonIcon"
      ><span v-if="buttonText" px-2>{{ buttonText }}</span></HBtn
    >
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    text: string;
    buttonText?: string | undefined;
    buttonIcon?: string | undefined;
  }>();

  const emit = defineEmits(['button-click']);
  const handleEmit = () => {
    emit('button-click');
  };
</script>

<style lang="scss" scoped></style>
