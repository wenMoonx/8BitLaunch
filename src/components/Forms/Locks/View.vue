<template>
  <div fc gap-4 mt-8>
    <HInput
      :rules="v.required"
      v-model="address"
      label="Search by address"
      :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
    />

    <div flex flex-wrap lg:flex-nowrap gap-4>
      <div w-full lg:w="3/5" bg-primaryBg p-4 rounded-lg>
        <h6 font-bold>Lock Info</h6>
        <div fc mt-4 pt-4 border-t border-secondaryBg>
          <div
            fc
            sm:flex-row
            sm:justify-between
            sm:items-center
            pb-3
            border-b
            border-secondaryBg
          >
            <span font-500>Total Amount Locked</span>
            <div fc items-end>
              <span text-xs mb-1>55,164.935</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Total Value Locked</span>
            <div fc items-end>
              <span text-xs>10,999.314$</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>LP Address</span>
            <div fc items-end>
              <span text-xs>0x4291fe1d6Ed78BeaF59B7e056C21FA3c30b08FCA</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Pair Name</span>
            <div fc items-end>
              <span text-xs>BNB/8Bit</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Owner</span>
            <div fc items-end>
              <span text-xs>0x123...ABC</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Presale</span>
            <div fc items-end>
              <span
                cursor-pointer
                @click="$router.push('/project')"
                transition-all
                hover:text-yellow-7
                text-xs
                font-bold
                text-primary
                >View</span
              >
            </div>
          </div>
        </div>
      </div>
      <div w-full lg:w="2/5" bg-primaryBg p-4 rounded-lg>
        <h6 font-bold>Lock Records</h6>
        <div fc mt-4 pt-4 border-t border-secondaryBg>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Amount</span>
            <div fc items-end>
              <span text-xs>55,164.935</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Locked time (UTC)</span>
            <div fc items-end>
              <span text-xs>2022-11-18 20:00</span>
            </div>
          </div>
          <div
            flex
            justify-between
            items-center
            py-3
            border-b
            border-secondaryBg
          >
            <span font-500>Unlock time (UTC)</span>
            <div fc items-end>
              <span text-xs>2024-11-18 20:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const lp = reactive({});
  const theme = useQDarkMode();
  const address = $ref('');
</script>
