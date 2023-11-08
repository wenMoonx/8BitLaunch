<template>
  <HBtn icon="i-uil-arrow-left" mb-4 flat @click="$router.push('/')"
    ><span px-2>Back</span></HBtn
  >
  <div class="project-container" gap-4>
    <!-- Project info -->
    <div bg-primaryBg rounded-xl overflow-hidden>
      <!-- Project banner -->
      <div h-35 bg-primaryBg>
        <q-img
          w-full
          h-34
          fit="cover"
          src="https://i.ibb.co/Lv2rmbh/banner.jpg"
          alt=""
        />
      </div>
      <!-- Project content -->
      <div fc p-4>
        <div fc md:flex-row md:justify-between mb-4>
          <div flex md:items-center>
            <q-img
              mb-4
              md:mb-0
              fit="contain"
              w-20
              h-20
              mr-4
              src="~assets/img/logo.png"
            />
            <div fc mr-2>
              <h2 text-xl font-700>8BitEarn</h2>
              <h3 text-sm opacity-60 font-500>Whitelisted - Max: 3 BNB</h3>
              <div flex flex-wrap gap-1 mt-1 ml--2>
                <HBtn size="sm" flat icon="i-uil-globe" />
                <HBtn size="sm" flat icon="i-uil-telegram" />
                <HBtn size="sm" flat icon="i-uil-twitter" />
              </div>
            </div>
          </div>

          <!-- Project attributes -->
          <div flex items-center justify-between gap-4 h-max>
            <!-- Project status -->
            <div
              @click.stop=""
              hover:top="0.5"
              transition-all
              top="0"
              left="50%"
              class="bg-yellow-8"
              rounded-1
              px-4
              py-1
              text-center
              flex
              items-center
              gap-2
              text-white
            >
              <q-icon size="xs" name="i-uil-shield-slash" />
              <div text-xs>Standard</div>
            </div>
            <Badge text="Upcoming" col="positive" />
          </div>
        </div>
        <div flex gap-2 flex-wrap mb-4>
          <div
            px-2
            py-1
            color-white
            text-xs
            font-500
            rounded-full
            class="bg-light-blue-5"
          >
            Verified
          </div>
          <div px-2 py-1 color-white text-xs bg-positive font-500 rounded-full>
            KYC
          </div>
          <div px-2 py-1 text-xs color-white bg-blue-5 font-500 rounded-full>
            Audit
          </div>
          <div
            px-2
            py-1
            text-xs
            color-white
            class="bg-amber-14"
            font-500
            rounded-full
          >
            Doxx
          </div>
        </div>
        <!-- Project description -->
        <div>
          <p mb-2 font-300 opacity-60>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, ea?
          </p>
          <p font-300 opacity-60>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            asperiores numquam vitae quam minima, laborum nihil voluptates
            quasi, hic earum perferendis et eligendi in magnam unde quod
            dignissimos quidem quia!
          </p>
        </div>
        <!-- Presale information -->
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
            <span font-500>Presale Address</span>
            <div fc items-end>
              <span text-xs mb-1
                >0xE7A36B3b01F48157a95F588fdc209c8bB1C7AD5F</span
              >
              <span text-xs font-300 opacity-60
                >Do not send BNB directly to the presale address.</span
              >
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
            <span font-500>Token name</span>
            <div fc items-end>
              <span text-xs>8BitEarn</span>
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
            <span font-500>Token symbol</span>
            <div fc items-end>
              <span text-xs>8Bit</span>
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
            <span font-500>Total supply</span>
            <div fc items-end>
              <span text-xs>100,000,000.0</span>
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
            <span font-500>Tokens for presale</span>
            <div fc items-end>
              <span text-xs>30,000,000.0</span>
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
            <span font-500>Tokens for liquidity</span>
            <div fc items-end>
              <span text-xs>18,900,000.0</span>
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
            <span font-500>Hard cap</span>
            <div fc items-end>
              <span text-xs>400 BNB</span>
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
            <span font-500>Soft cap</span>
            <div fc items-end>
              <span text-xs>200 BNB</span>
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
            <span font-500>Presale start time (UTC)</span>
            <div fc items-end>
              <span text-xs>2022-11-14 20:00</span>
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
            <span font-500>Presale end time (UTC)</span>
            <div fc items-end>
              <span text-xs>2022-11-17 20:00</span>
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
            <span font-500>Unused tokens</span>
            <div fc items-end>
              <span text-xs>Refund</span>
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
            <span font-500>Liquidity percent</span>
            <div fc items-end>
              <span text-xs>60%</span>
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
            <span font-500>Liquidity unlock time (UTC)</span>
            <div fc items-end>
              <span text-xs>2024-11-18 20:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div fc gap-4>
      <!-- Pool -->
      <div p-4 bg-primaryBg h-max rounded-xl>
        <div fc items-center>
          <span font-500>Sale starts in:</span>
          <span font-300 opacity-60>03:19:29:45</span>
        </div>
        <p opacity-60 font-500 mb-2>Progress (0%)</p>
        <span w-full h-3 bg-secondaryBg block rounded-full></span>
        <div flex justify-between mt-2>
          <span text-xs font-500 opacity-60>0 BNB</span>
          <span text-xs font-500 opacity-60>400.0 BNB</span>
        </div>
        <p mt-4 opacity-60 font-500 mb-2>Contribute</p>
        <div flex gap-4 items-center>
          <HInput
            flex-1
            v-model="contribution"
            no-margin
            placeholder="Amount"
          />
          <HBtn flex-1 h-12 outline disabled><span px-2>Buy</span></HBtn>
        </div>
        <div
          flex
          justify-between
          items-center
          py-3
          border-y
          mt-4
          border-secondaryBg
        >
          <span font-500>Minimum buy</span>
          <div fc items-end>
            <span text-xs>0.01 BNB</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Maximum buy</span>
          <div fc items-end>
            <span text-xs>Unlimited</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Maximum buy</span>
          <div fc items-end>
            <span text-xs>Unlimited</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Total contributors</span>
          <div fc items-end>
            <span text-xs>0</span>
          </div>
        </div>
        <div flex justify-between items-center mt-3>
          <span font-500>My Contribution</span>
          <div fc items-end>
            <span text-xs>0 BNB</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Reserved tokens</span>
          <div fc items-end>
            <span text-xs>0 TST</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Presale rate</span>
          <div fc items-end>
            <span text-xs>50,000.0 TST </span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Dex rate</span>
          <div fc items-end>
            <span text-xs>45,000.0 TST </span>
          </div>
        </div>
      </div>

      <!-- Estimated dex listing time -->
      <div p-4 bg-primaryBg h-max rounded-xl fc items-center>
        <h3 text-center text-base font-500>Estimated dex listing time</h3>
        <span font-300 opacity-60>04:19:29:45</span>
        <h3 text-center text-base font-500 mt-4>Token address</h3>
        <div fc md:flex-row items-center>
          <span text-xs font-300 mr-2
            >0x54143259C6c8ab05b79d8eF831489c2a98A67Aa4</span
          >
          <HBtn size="sm" flat icon="i-uil-copy" />
        </div>
        <h3 text-center text-base font-500 mt-4>Estimated market cap</h3>
        <span font-300 opacity-60>Unknown</span>
      </div>
    </div>

    <!-- Vesting schedule -->
    <div p-4 bg-primaryBg h-max rounded-xl fc items-center>
      <h3
        w-full
        text-center
        text-base
        font-500
        mb-4
        pb-2
        border-b
        border-secondaryBg
      >
        Tokenomics distribution
      </h3>
      <div class="chartContainer w-full lg:w-6/12">
        <ChartDonat
          :heading="{ title: 'Total Supply Allocation', subtitle: '' }"
        />
      </div>
    </div>
    <div p-4 bg-primaryBg h-max rounded-xl>
      <h3 text-base font-500 mb-2 text-center>Team token vesting schedule</h3>
      <div flex justify-between items-center pb-3 border-b border-secondaryBg>
        <span font-500>Release date</span>
        <div fc items-end>
          <span text-xs>Amount</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2022-12-18 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-01-17 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-02-16 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-03-17 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-04-17 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-05-17 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>2,250,000.0 TST</span>
        </div>
      </div>
      <div flex justify-between items-center py-3 border-b border-secondaryBg>
        <span font-500>2023-06-17 20:00 (UTC)</span>
        <div fc items-end>
          <span text-xs>1,500,000.0 TST</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const contribution = ref('');
  // const tokenomics = {
  //   options: {
  //     labels: [
  //       'Presale',
  //       'Liquidity',
  //       'Private sale',
  //       'Team',
  //       'Development / Marketing',
  //       'Reward pool',
  //       'Pinksale fee',
  //     ],
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: '100%',
  //           },
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   series: [40, 24, 12, 5, 11, 6, 2],
  // };
</script>

<style scoped lang="scss">
  .project-container {
    display: grid;
    grid-template-columns: 1fr;
    @media only screen and(min-width:1024px) {
      grid-template-columns: 1.75fr 1fr;
    }
  }
</style>
