<template>
  <div
    @click="$router.push(to)"
    cursor-pointer
    min-w-50
    rounded-lg
    border
    border-primaryBg
    p-2
    flex
    items-center
    hover:border-primary
    transition-all
    justify-between
  >
    <div flex gap-4 items-center>
      <q-icon size="md" :name="icon" />
      <div fc>
        <h5 text-base font-500 mb-1>{{ title }}</h5>
        <span text-xs font-300 opacity-60>{{ subtitle }}</span>
      </div>
    </div>
    <q-icon
      transition-all
      hover:color-primary
      size="md"
      mx-4
      name="i-uil-arrow-right"
    />
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    icon: string;
    title: string;
    subtitle: string;
    to: string;
  }>();
</script>
