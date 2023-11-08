<template>
  <div :class="{ 'mb-4': !noMargin }">
    <label>
      <div flex justify-between>
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
        <div><slot name="label" /></div>
      </div>

      <div class="flex">
        <div
          flex-1
          bg-secondaryBg
          rounded-lg
          border
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
            type="textarea"
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
          </q-input>
        </div>
        <slot name="append-outer"></slot>
      </div>
    </label>
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

<style scoped></style>
