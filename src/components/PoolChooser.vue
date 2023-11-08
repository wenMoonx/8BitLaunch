<template>
  <div
    cursor-pointer
    fc
    bg-primaryBg
    rounded-xl
    transform
    transition-all
    duration-300
    hover="-translate-y-2 border-primary"
    border="2px transparent solid"
    w-full
  >
    <div flex items-start justify-between border-b border-secondaryBg p-6>
      <div>
        <h2 text-xl font-700 mb-1>{{ details.title }}</h2>
        <p opacity-50>{{ details.subtitle }}</p>
      </div>
      <div rounded-xl bg-secondaryBg p-1>
        <q-img rounded-xl w-10 h-10 fit="contain" :src="details.img" />
      </div>
    </div>

    <div mt-6 px-6>
      <div flex justify-between>
        <div>
          <abbr
            title="APY, which stands for Annual Percentage Yield, is the rate you can earn on an account over a year and it includes compound interest."
          >
            APY:
          </abbr>
        </div>
        <div>{{ details.apy }}</div>
      </div>
      <div flex justify-between>
        <div>
          <abbr
            title="How many days you can't unlock your tokes after staking."
          >
            Lock period:
          </abbr>
        </div>
        <div>{{ details.lockPeriod }}</div>
      </div>
      <div flex justify-between>
        <div>
          <abbr title="Time needed to pass to get your rewards.">
            Minimum stake period:
          </abbr>
        </div>
        <div>{{ details.minLockTime }}</div>
      </div>
    </div>

    <div my-4>
      <div v-html="details.note" mx-6 p-3 rounded-xl bg-secondaryBg></div>
    </div>

    <div
      px-6
      py-3
      flex
      items-center
      justify-between
      border-t
      border-secondaryBg
    >
      <HBtn size="sm" no-padding outline>
        <span flex items-center>
          <span px-3 i-uil-sync></span>
          <span pr-2 text="2.5"> Auto</span>
        </span>
      </HBtn>
      <HBtn flat>
        <span>Details </span>
      </HBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
  type PoolDetails = {
    title: string;
    subtitle: string;
    apy: string;
    lockPeriod: string;
    minLockTime: string;
    note: string;
    img: string;
  };
  defineProps<{
    details: PoolDetails;
  }>();
</script>

<style scoped></style>
