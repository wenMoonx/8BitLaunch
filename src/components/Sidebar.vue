<template>
  <q-drawer
    v-model="model"
    :width="250"
    persistent
    show-if-above
    side="left"
    overflow="visible"
    bg-primaryBg
    relative
    pb-20
    h-screen
  >
    <HBtn
      class="btn-drawer"
      size="sm"
      color="accent"
      @click="model = false"
      icon="i-uil-angle-left-b"
    />
    <q-scroll-area h-screen>
      <!-- Sidebar header -->
      <slot name="header"></slot>
      <!-- Sidebar navigation -->
      <q-list class="font-500 text-md" padding>
        <slot name="navigation"></slot>
      </q-list>
    </q-scroll-area>
    <!-- Sidebar fixed bottom content -->
    <div
      absolute
      bottom-0
      left-0
      w-full
      py-2
      bg-primaryBg
      z-2
      h-max
      class="q-px-lg"
    >
      <slot name="fixed-bottom"></slot>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
  }>();
  const model = useVModel(props, 'modelValue');
</script>

<style lang="scss"></style>
