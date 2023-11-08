<template>
  <q-stepper
    mt-8
    border="2 solid primaryBg"
    id="over"
    rounded-xl
    flat
    v-model="step"
    header-nav
    ref="stepper"
    color="primary"
    animated
    :contracted="size.width.value < 1350"
  >
    <q-step
      :name="1"
      title="Create Token"
      caption="Enter the token address and approve"
      prefix="1"
      :done="step > 1"
      :header-nav="step > 1"
    >
      <HInput
        :rules="v.required"
        v-model="sender.name"
        label="Name"
        :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
      />

      <HInput
        :rules="v.required"
        v-model="sender.symbol"
        label="Symbol"
        :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
      />

      <HInput
        :rules="v.required"
        v-model="sender.decimals"
        label="Decimals"
        :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
      />

      <HInput
        :rules="v.required"
        v-model="sender.supply"
        label="Total Supply"
        :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
      />

      <q-stepper-navigation>
        <HBtn w-full color="primary" label="Create token" />
      </q-stepper-navigation>
      <div text-center pxs mt-4 class="text-defaultText">
        In order to create token, press Create.
      </div>
    </q-step>
  </q-stepper>
</template>

<script setup lang="ts">
  const step = ref(1);
  const modal = $ref(false);
  const size = useWindowSize();
  const shape = $ref('bnb');
  const fee = $ref('5');
  const auto = $ref(true);
  const wl = $ref('yes');
  const refundType = $ref('Burn');
  const dex = $ref('ProDEX');

  const vesting = $ref(false);
  const startDate = $ref(new Date().toISOString());
  const endDate = $ref(new Date().toISOString());

  const theme = useQDarkMode();
  const sender: { [key: string]: string } = reactive({
    token: '',
  });
</script>

<style lang="scss">
  #over {
    .q-stepper__tab {
      background-color: var(--q-primaryBg) !important;
    }
    .q-stepper--bordered,
    .stepper__header--border {
      border: 1px solid var(--q-primaryBg) !important;
    }
  }

  .q-menu {
    @apply border border-2 border-accent rounded-lg;
  }
</style>
