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
            :label="`Create ${Q.format.capitalize(query)} Launchpad`"
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
          Create {{ Q.format.capitalize(query) }} Launchpad
        </h1>
      </div>
      <pool />
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { Component } from 'vue';

  import standard from '~/src/components/Forms/Pools/Standard.vue';
  import hyper from '~/src/components/Forms/Pools/Hyper.vue';
  import subscription from '~/src/components/Forms/Pools/Subscription.vue';
  import fairlaunch from '~/src/components/Forms/Pools/Fairlaunch.vue';
  import special from '~/src/components/Forms/Pools/Special.vue';

  const route = useRoute();
  let query = $ref((route.query.type || 'standard').toString());
  let isSwitched = $ref(true);

  watch(
    () => route.query.type,
    () => {
      isSwitched = false;
      query = (route.query.type || 'standard').toString();
      setTimeout(() => {
        isSwitched = true;
      }, 200);
    }
  );

  const pools: { [key: string]: Component } = {
    standard,
    hyper,
    subscription,
    fairlaunch,
    special,
  };

  const pool = pools['standard'];
</script>

<style scoped></style>
