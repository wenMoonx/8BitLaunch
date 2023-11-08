<template>
  <q-dialog v-model="model">
    <div fc p-4 bg-primaryBg rounded-lg w-90vw md:w-50vw lg:w-40vw>
      <div
        flex
        justify-between
        items-center
        mb-2
        pb-2
        border-b
        border-secondaryBg
      >
        <h3 text-lg font-700>
          {{ mainStore.confirmDialog.title || 'Confirm your action' }}
        </h3>
        <HBtn ml-2 flat icon="i-uil-times-circle" v-close-popup />
      </div>
      <p
        v-for="m in mainStore.confirmDialog.messages"
        :key="m"
        text-center
        mt-2
      >
        {{ m }}
      </p>

      <p v-if="!mainStore.confirmDialog.messages.length">
        Are you sure you want to do this?
      </p>
      <div flex justify-center mt-4>
        <HBtn
          :loading="loading"
          mr-4
          @click="confirm"
          label="Confirm"
          color="positive"
        />
        <HBtn v-close-popup label="Cancel" color="negative" />
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
  }>();
  const model = useVModel(props, 'modelValue');
  const mainStore = useMainStore();
  let loading = $ref(false);

  function confirm() {
    loading = true;
    const p = mainStore.confirmDialog.fn();

    if ((p as Promise<void>).then) {
      (p as Promise<void>).then(() => {
        loading = false;
        mainStore.confirmDialog.show = false;
      });
    } else {
      loading = false;
      mainStore.confirmDialog.show = false;
    }
  }
</script>

<style scoped></style>
