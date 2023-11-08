<template>
  <div bg-primaryBg rounded-xl>
    <div id="over">
      <q-stepper
        border="2 solid primaryBg"
        bordered
        rounded-xl
        flat
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
        :contracted="dense || size.width.value < 451"
      >
        <q-step
          :name="1"
          title="Prepare"
          icon="i-uil-list-ol-alt"
          :done="step > 1"
          :header-nav="step > 1"
        >
          <div>
            <HInput
              v-model="sender.token"
              label="Token Address"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />

            <HTextarea
              v-model="sender.token"
              label="List of Addresses in CSV"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            >
              <template #label>
                <span
                  @click.stop="modal = true"
                  cursor-pointer
                  hover:opacity-50
                >
                  View Example CSV
                </span>
              </template>
            </HTextarea>

            <div flex justify-end>
              <HBtn size="sm" outline><span px-2>Upload CSV</span></HBtn>
            </div>
          </div>

          <q-stepper-navigation>
            <HBtn w-full @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Approve"
          icon="i-uil-file-check-alt"
          :done="step > 2"
          :header-nav="step > 2"
        >
          <div my-4 class="text-defaultText">
            <div mb-4>Selected addresses for {{ text || 'multisend' }}:</div>
            <div text="xs" font-mono flex flex-wrap gap-2>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0x5H...3B</div>
                <div>-></div>
                <span text-primary>100</span>8Bit
              </div>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0xE3...4C</div>
                <div>-></div>
                <span text-primary>200</span>8Bit
              </div>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0xF1...A1</div>
                <div>-></div>
                <span text-primary>880</span>8Bit
              </div>
            </div>
          </div>
          <HBtn outline w-full my-4><span py-8>Approve Transaction</span></HBtn>
          <q-stepper-navigation>
            <HBtn w-full @click="step = 3" color="primary" label="Continue" />
          </q-stepper-navigation>

          <div text-center pxs mt-4 class="text-defaultText">
            In order to continue, please approve transaction.
          </div>
        </q-step>

        <q-step
          :name="3"
          title="Multisend"
          icon="i-uil-navigator"
          :header-nav="step > 3"
        >
          <div my-4 class="text-defaultText">
            <div mb-4>Selected addresses for {{ text || 'multisend' }}:</div>
            <div text="xs" font-mono flex flex-wrap gap-2>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0x5H...3B</div>
                <div>-></div>
                <span text-primary>100</span>8Bit
              </div>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0xE3...4C</div>
                <div>-></div>
                <span text-primary>200</span>8Bit
              </div>
              <div flex gap-2 bg-primaryBg px-2 py-1 rounded-xl>
                <div>0xF1...A1</div>
                <div>-></div>
                <span text-primary>880</span>8Bit
              </div>
            </div>
          </div>
          <HBtn outline w-full my-4>
            <span py-8>
              {{ Q.format.capitalize(text || 'Multisend') }}
            </span>
          </HBtn>
          <div text-center pxs mt-4 class="text-defaultText">
            In order to continue, please press
            {{ Q.format.capitalize(text || 'Multisend') }}.
          </div>
        </q-step>
      </q-stepper>
    </div>
    <q-dialog v-model="modal">
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
          <h3 text-lg font-700>Example CSV</h3>

          <HBtn ml-2 flat icon="i-uil-times-circle" v-close-popup />
        </div>
        <p bg-secondaryBg p-4 rounded-xl text-xs font-300 opacity-50 mb-4>
          0x7d3ed36ff23c7fc9026a52d5a258516b4b16220c,1000 <br />
          0x8abed36ff23c7fc9026a52d5a258516b4b16220a,2000 <br />
          0x123ed36ff23c7fc9026a52d5a258516b4b162fa2,2000 <br />
        </p>

        <div opacity-35 md:text-center text="2.75" md:text-sm>
          Please use only CSV format
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ dense?: boolean; text?: string }>();
  const step = ref(1);
  const modal = $ref(false);
  const size = useWindowSize();

  const theme = useQDarkMode();
  const sender = reactive({
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
    .q-stepper__header--border {
    }
  }
</style>
