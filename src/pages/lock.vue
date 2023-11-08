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
          <q-breadcrumbs-el :label="`${Q.format.capitalize(query)}`" />
        </Breadcrumb>
      </div>
      <div flex justify-between items-center my-4>
        <h1
          text-xl
          font-700
          relative
          un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
        >
          {{ Q.format.capitalize(query) }}
        </h1>
      </div>
      <pool />
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { Component } from 'vue';

  import standard from '~/src/components/Forms/Locks/Standard.vue';
  import view from '~/src/components/Forms/Locks/View.vue';

  const route = useRoute();
  let query = $ref(
    route.query.view
      ? 'View ' + Q.format.capitalize(route.query.view.toString()) + ' Locks'
      : 'Create 8Bit Lock'
  );

  let isSwitched = $ref(true);

  const pools: { [key: string]: Component } = {
    standard,
    view,
  };

  let pool = $ref(pools[query.includes('Create') ? 'standard' : 'view']);

  watch(
    () => route.query.view,
    () => {
      isSwitched = false;
      query = route.query.view
        ? 'View ' + Q.format.capitalize(route.query.view.toString()) + ' Locks'
        : 'Create 8Bit Lock';

      pool = pools[query.includes('Create') ? 'standard' : 'view'];
      setTimeout(() => {
        isSwitched = true;
      }, 200);
    }
  );
</script>

<style scoped></style>
