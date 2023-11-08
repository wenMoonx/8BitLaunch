<template>
  <div :class="{ 'mb-4': !noMargin }">
    <label>
      <div
        mb-2
        font-700
        dark:text-white
        :class="{
          'text-primary': focused,
          'opacity-70': !focused,
          'text-gray-8': !focused,
        }"
      >
        {{ label }}

        <span v-if="$attrs.rules" text-negative>*</span>
      </div>

      <div class="flex">
        <div
          flex-1
          rounded-lg
          border
          class="h-12"
          pr-4
          transition="all"
          :class="{
            'border-transparent': !focused,
            'border-primary': focused,
            'bg-secondaryBg': !bgColor,
            'bg-primaryBg': bgColor === 'bg-primaryBg',
          }"
        >
          <q-input
            :disable="disable"
            relative
            clear-icon="i-uil-times-circle"
            pl-4
            dense
            v-bind="$attrs"
            v-model="model"
            borderless
            bottom-slots
            :input-class="`p-0 pt-1 font-500 ${focused ? '' : 'text-gray-8'} `"
            :placeholder="placeholder || 'Enter here...'"
            @focus="focused = true"
            @blur="focused = false"
          >
            <template v-for="(_, slot) in $slots" v-slot:[st(slot)]="scope">
              <slot
                :name="slot"
                v-bind="{ ...scope, focused } || { focused }"
              />
            </template>
            <template #loading>
              <q-spinner color="primary" />
            </template>
            <template v-if="focused && $attrs.type === 'number'" #append>
              <div>
                <q-btn
                  @click="inc"
                  size="xs"
                  block
                  flat
                  dense
                  icon="i-uil-arrow-circle-up"
                  color="primary"
                ></q-btn>
                <q-btn
                  @click="dec"
                  color="primary"
                  size="xs"
                  block
                  flat
                  dense
                  icon="i-uil-arrow-circle-down"
                ></q-btn>
              </div>
            </template>
          </q-input>
        </div>
        <slot name="append-outer"></slot>
      </div>
    </label>

    <div text-3 mt-1 opacity-50>{{ hint }}</div>
  </div>
</template>

<script setup lang="ts">
  import { Ref } from 'vue';

  const props = defineProps<{
    modelValue: string | number;
    hint?: string;
    placeholder?: string;
    label?: string;
    disable?: boolean;
    noMargin?: boolean;
    bgColor?: string;
  }>();

  const model = useVModel(props) as Ref<string | number>;

  const focused = $ref(false);

  const inc = () => {
    if (typeof model.value !== 'number') {
      model.value = 0;
    }

    model.value++;
  };

  const dec = () => {
    if (typeof model.value !== 'number') {
      model.value = 0;
    }

    model.value--;
  };

  const st = (slot: string | number) =>
    slot as
      | 'default'
      | 'prepend'
      | 'append'
      | 'before'
      | 'after'
      | 'label'
      | 'error'
      | 'hint'
      | 'counter'
      | 'loading';
</script>

<style lang="scss">
  // Change not-valid field icon
  .q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip
    > .q-icon.text-negative.notranslate.material-icons {
    @apply i-uil-exclamation-octagon;
  }

  .q-field__messages.col > div[role='alert'] {
    @apply mt-1 text-2.5;
  }

  .q-field__prepend {
    padding-right: 0;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>
