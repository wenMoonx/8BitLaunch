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
      title="Create Lock"
      caption="Enter the token address and approve"
      prefix="1"
      :done="step > 1"
      :header-nav="step > 1"
    >
      <div class="text-defaultText">
        <HInput
          :rules="v.required"
          v-model="sender.name"
          label="Token or LP Token address"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
        />
        <HCheckbox
          my-8
          dense
          text="Use another owner?"
          v-model="sender.owner"
        />
        <HInput
          :rules="v.required"
          v-model="sender.title"
          label="Title"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
        />
        <HInput
          type="number"
          :rules="v.requiredNum"
          v-model="sender.amount"
          label="Amount"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
        />
        <HCheckbox my-8 dense text="Use vesting?" v-model="sender.vesting" />

        <div gap-4 flex justify-between>
          <HInput
            flex-1
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            v-model="lockUntil"
            mask="date"
            label="Lock Until (UTC Date)"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="lockUntil">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </HInput>
          <HInput
            flex-1
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            v-model="lockUntilTime"
            mask="time"
            label="Lock Until (UTC Time)"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="lockUntilTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </HInput>
        </div>
      </div>
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
  const size = useWindowSize();
  const lockUntil = $ref(new Date().toISOString());
  const lockUntilTime = $ref('12:00');
  const theme = useQDarkMode();

  const sender: { [key: string]: any } = reactive({
    token: '',
    vesting: false,
    owner: false,
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
