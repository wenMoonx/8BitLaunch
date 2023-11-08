<template>
  <div
    fixed
    bottom-0
    right-0
    w-0
    h-screen
    transition-opacity
    duration-300
    z-1001
    bg-black
    opacity-0
    class="quick-view"
    :class="toggled ? 'w-screen opacity-70' : ''"
    @click="$emit('close')"
  ></div>
  <div
    fixed
    bottom-0
    right-0
    z-1002
    h-screen
    w-0
    transition-all
    duration-300
    bg-secondaryBg
    fc
    py-4
    items-start
    class="quick-view"
    :class="toggled ? 'w-90vw md:w-80vw lg:w-30vw' : ''"
  >
    <q-scroll-area w-full class="quick-view px-4">
      <div
        opacity-0
        :class="{
          'opacity-100 transition-all duration-300 delay-200': toggled,
        }"
      >
        <div flex items-center mb-4>
          <HBtn flat mr-4 icon="i-uil-times-circle" @click="$emit('close')" />
          <span pxs> Proposal id: </span>
          <span text-lg font-500 opacity-50 ml-2>#ss</span>
          <span
            border
            border-primary
            rounded-lg
            text-xs
            color-primary
            px-2
            py-1
            ml-4
            >ss</span
          >
        </div>

        <!-- TEMPLATE FOR REGULAR PROPOSAL -->
        <template v-if="true">
          <div mb-4>
            <p pxs mb-2>Description</p>
          </div>
          <div mb-4>
            <p pxs mb-2>Team and experience</p>
            <p font-300></p>
          </div>
          <div mb-4>
            <p pxs mb-2>Expectations from 8Bit</p>
            <p font-300></p>
          </div>
        </template>
        <!-- TEMPLATE FOR PROJECT PROPOSAL -->
        <template v-else>
          <div mb-4>
            <p pxs mb-2>Summary</p>
          </div>
          <div mb-4>
            <p pxs mb-2>What we are building</p>
          </div>
          <div mb-4>
            <p pxs>Project socials</p>
            <div flex>
              <HBtn size="sm" flat icon="i-uil-globe" mr-1 />
              <HBtn size="sm" flat icon="i-uil-telegram" mr-1 />
              <HBtn size="sm" flat icon="i-uil-twitter" />
            </div>
          </div>
        </template>
        <p pxs mb-2 mt-4>Added by</p>
        <div flex items-center>
          <div fc ml-4>
            <a
              no-underline
              text-primary
              target="_blank"
              :href="`https://t.me/`"
              pxs
            >
            </a>
          </div>
        </div>
        <template v-if="ready">
          <div flex mt-8 items-center>
            <p pxs mr-4>Votes</p>
          </div>
          <div
            p-2
            rounded-lg
            w-full
            mt-4
            grid
            gap-4
            grid-cols-1
            sm:grid-cols-2
            border
            border-primaryBg
          >
            ss
          </div>
        </template>
        <GlobalLoading v-else />
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore();

  const props = defineProps<{
    toggled: boolean;
    viewType: string;
    hideVote?: boolean;
  }>();

  defineEmits<{
    (event: 'close'): void;
  }>();

  let ready = $ref(true);
</script>

<style lang="scss" scoped>
  .quick-view {
    height: calc(100vh - 92px);
    @media only screen and(min-width:1024px) {
      height: calc(100vh - 72px);
    }
  }
</style>
