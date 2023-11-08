<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    appear
    :duration="200"
    mode="out-in"
  >
    <div v-if="isSwitched">
      <div md:flex mb-4>
        <Breadcrumb>
          <q-breadcrumbs-el
            color="primary"
            label="Home"
            icon="i-uil-home-alt"
            to="/"
          />
          <q-breadcrumbs-el
            :label="`Create ${query
              .split('-')
              .map((e) => Q.format.capitalize(e))
              .join(' ')}`"
          />
        </Breadcrumb>
      </div>
      <div flex justify-between items-center my-4>
        <h1
          text-xl
          font-700
          relative
          un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
        >
          Create
          {{
            query
              .split('-')
              .map((e) => Q.format.capitalize(e))
              .join(' ')
          }}
        </h1>
      </div>
      <pool />
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { Component } from 'vue';

  import standard from '~/src/components/Forms/Tokens/Standard.vue';
  import lgt from '~/src/components/Forms/Tokens/liqudity-generator-token.vue';

  const route = useRoute();
  let query = $ref((route.query.type || 'standard Token').toString());
  let isSwitched = $ref(true);

  const pools: { [key: string]: Component } = {
    standard,
    'liqudity-generator-token': lgt,
  };

  let pool = $ref(
    pools[query.includes('standard') ? 'standard' : 'liqudity-generator-token']
  );

  watch(
    () => route.query.type,
    () => {
      isSwitched = false;
      query = (route.query.type || 'standard Token').toString();
      pool =
        pools[
          query.includes('standard') ? 'standard' : 'liqudity-generator-token'
        ];
      setTimeout(() => {
        isSwitched = true;
      }, 200);
    }
  );
</script>

<style scoped></style>
