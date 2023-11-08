<template>
  <div bg-white dark:bg-gray-8 px-20 py-1 class="row justify-between">
    <div class="flex items-center">
      <span class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >dApp.app</span
        >
      </span>
    </div>

    <div flex items-center>
      <q-no-ssr>
        <ThemeSwitcher class="q-mr-sm" />
      </q-no-ssr>

      <HBtn mr-2 />
      <ProfileSettings h-10 />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
