<template>
  <div class="overflow-container" overflow-x-auto py-4 flex gap-4>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .overflow-container {
    width: calc(100vw - 2rem);
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    @media only screen and(min-width: 1024px) {
      width: calc(100vw - 250px - 4rem);
    }
    @media only screen and(min-width: 1500px) {
      max-width: 1300px;
    }
  }
</style>
