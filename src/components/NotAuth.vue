<template>
  <div>
    <q-banner border="~ negative 3px" p-8 rounded-lg bg-transparent>
      <template v-slot:avatar>
        <q-icon color="negative" name="i-uil-exclamation-octagon" />
      </template>
      <div font-500>{{ message }}</div>
    </q-banner>

    <div mt-5 flex justify-center>
      <HBtn @click="$router.replace('/')" padding="8px 12px">
        Go to Home
        <q-icon ml-2 name="i-uil-home" />
      </HBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ message: string }>();
</script>

<style scoped></style>
