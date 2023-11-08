<template>
  <div bg-primaryBg rounded-full>
    <q-select
      min-w-20
      class="px-4"
      dense
      borderless
      v-bind="$attrs"
      behavior="menu"
      bg-color="bg-primaryBg"
      dropdown-icon="i-uil-angle-down"
    />
  </div>
</template>
