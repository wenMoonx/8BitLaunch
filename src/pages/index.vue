<template>
  <q-dialog v-model="slideSettingsDialog">
    <div w-90vw md:w-70vw lg:w-60vw fc p-6 bg-primaryBg rounded-lg>
      <div
        flex
        justify-between
        items-center
        mb-2
        pb-2
        border-b
        border-secondaryBg
      >
        <h2 text-lg font-700>Carousel settings</h2>
        <HBtn ml-2 flat icon="i-uil-times-circle" v-close-popup />
      </div>

      <div v-for="(s, i) in slides" :key="i" flex gap-2 flex-wrap>
        <HInput
          flex-1
          :label="`Slide ${i + 1}`"
          placeholder="Enter url of the image"
          v-model="s.img"
        />
        <HInput
          flex-1
          :label="`Link ${i + 1}`"
          placeholder="Enter link href"
          v-model="s.href"
        />
      </div>

      <HBtn w-max><span px-2>Submit changes</span></HBtn>
    </div>
  </q-dialog>

  <div relative>
    <HBtn
      icon="i-uil-cog"
      @click="slideSettingsDialog = true"
      absolute
      top-4
      right-4
      z-2
    />
    <q-carousel
      v-model="slide"
      swipeable
      animated
      infinite
      autoplay
      arrows
      height="200px"
      rounded-xl
    >
      <q-carousel-slide p-0 v-for="(s, i) in slides" :key="i" :name="`${i}`">
        <q-img w-full h-full fit="cover" :src="s.img" />
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div fc mt-8>
    <!-- Trending section -->
    <div flex gap-2 items-center>
      <IFire text-xl text-primary />
      <h3 text-lg font-500>Trending</h3>
    </div>
    <OverflowContainer>
      <div
        v-for="i in 4"
        :key="i"
        @click="$router.push('/project')"
        cursor-pointer
        min-w-50
        rounded-lg
        border
        border-primaryBg
        light:bg-primaryBg
        p-2
        flex
        items-center
      >
        <q-img fit="contain" w-12 h-12 src="~assets/img/logo.png" />
        <div ml-2 fc>
          <h5 text-xs font-500 mb-1>8BitEarn</h5>
          <span text-xs font-300 opacity-60>#{{ i }}</span>
        </div>
      </div>
    </OverflowContainer>

    <!-- Heading -->
    <div flex justify-between items-center my-4>
      <h1
        text-xl
        font-700
        relative
        un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
      >
        Launchpad List
      </h1>
      <HBtn light:hidden to="/create" hidden md:block icon="i-uil-plus" flat>
        <span px-2>Create new</span>
      </HBtn>
      <HBtn dark:hidden to="/create" hidden md:block icon="i-uil-plus">
        <span px-2>Create new</span>
      </HBtn>
      <HBtn to="/create" md:hidden icon="i-uil-plus" flat />
    </div>

    <!-- Launchpad views and categories -->
    <div flex lg:justify-center mb-4>
      <q-tabs
        dense
        light="bg-primaryBg rounded-lg"
        v-model="tab"
        outside-arrows
        mobile-arrows
        inline-label
        no-caps
        active-color="primary"
        class="launchpad-tabs"
      >
        <q-tab
          name="launchpad-list"
          label="Launchpad list"
          icon="i-uil-list-ul"
        />
        <q-tab name="quick-view" label="Quick view" icon="i-uil-eye" />
        <q-tab
          name="my-contributions"
          label="My contributions"
          icon="i-uil-moneybag-alt"
        />
        <q-tab name="my-presales" label="My presales" icon="i-uil-eye" />
        <q-tab name="my-favorites" label="Favorites" icon="i-uil-heart" />
      </q-tabs>
    </div>

    <!-- Launchpad search & filters -->
    <div flex fc md:flex-row md:items-center gap-4>
      <HInput
        no-margin
        flex-1
        bg-color="bg-primaryBg"
        rounded
        v-model="search"
        placeholder="Search"
      >
        <template v-slot:prepend>
          <q-icon i-uil-search />
        </template>
      </HInput>
      <div flex flex-wrap gap-4>
        <q-select
          outlined
          text-xs
          v-model="filterBy"
          :options="filterByOptions"
          dense
          bg-color="bg-primaryBg"
          dropdown-icon="i-uil-angle-down"
          options-dense
        >
          <template v-slot:prepend>
            <q-icon i-uil-filter />
          </template>
        </q-select>
        <q-select
          outlined
          text-xs
          v-model="sortBy"
          :options="sortByOptions"
          dense
          options-dense
          bg-color="bg-primaryBg"
          dropdown-icon="i-uil-angle-down"
        >
          <template v-slot:prepend>
            <q-icon i-uil-sort-amount-down />
          </template>
        </q-select>

        <ChainSelect select label="Chain" min-w-9 dense />
      </div>
    </div>

    <q-tab-panels bg-transparent p-0 mt-4 v-model="tab" animated>
      <q-tab-panel px-0 name="launchpad-list">
        <div
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          lg:grid-cols-2
          xl:grid-cols-3
          xl2:grid-cols-4
        >
          <!-- Project Card -->
          <div
            v-for="i in ['Standard', 'Insured']"
            :key="i"
            mt-2
            p-4
            rounded-xl
            bg-primaryBg
            fc
            cursor-pointer
            transition-all
            transform
            hover:translate-y--1
            relative
            @click="$router.push('/project')"
          >
            <div
              @click.stop=""
              hover:top="0.5"
              transition-all
              absolute
              translate-x="-50%"
              translate-y="-50%"
              top="0"
              left="50%"
              :class="i == 'Insured' ? 'bg-light-green-7' : 'bg-yellow-8'"
              rounded-1
              px-4
              py-1
              text-center
              flex
              items-center
              gap-2
            >
              <q-icon
                size="xs"
                color="white"
                :name="
                  i === 'Insured' ? 'i-uil-shield-check' : 'i-uil-shield-slash'
                "
              />
              <div text-xs font-900 text-white>{{ i }}</div>
            </div>
            <!-- Card heading -->
            <div flex justify-between mb-4>
              <q-img fit="contain" w-14 h-14 mr-4 src="~assets/img/logo.png" />
              <!-- Project attributes -->
              <div fc items-end>
                <!-- Project status -->
                <Badge mb-2 text="Upcoming" col="positive" />
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
              <div
                px-2
                py-1
                color-white
                text-xs
                bg-positive
                font-500
                rounded-full
              >
                KYC
              </div>
              <div
                px-2
                py-1
                text-xs
                color-white
                bg-blue-5
                font-500
                rounded-full
              >
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
            <div flex justify-between items-center mb-4>
              <div fc mr-2>
                <h2 text-xl font-700>
                  8BitEarn {{ i == 'Insured' ? ' - Insured' : ' - Standard' }}
                </h2>
                <h3 text-sm opacity-60 font-500>Whitelisted - Max: 3 BNB</h3>
              </div>
              <span px-4 bg-secondaryBg py-2 rounded-full text-xs h-max font-700
                >BSC</span
              >
            </div>
            <!-- Progress -->
            <p opacity-60 font-500 mb-2>Progress (0%)</p>
            <span w-full h-3 bg-secondaryBg rounded-full></span>
            <div flex justify-between mt-2>
              <span text-xs font-500 opacity-60>0 BNB</span>
              <span text-xs font-500 opacity-60>400.0 BNB</span>
            </div>
            <div flex justify-between mt-4>
              <p opacity-60 font-500>Soft cap</p>
              <p opacity-60 font-500>200.0 BNB</p>
            </div>
            <div flex justify-between mt-1>
              <p opacity-60 font-500>Liquidity</p>
              <p opacity-60 font-500>60%</p>
            </div>
            <div flex justify-between mt-1>
              <p opacity-60 font-500>Lockup time</p>
              <p opacity-60 font-500>730 days</p>
            </div>

            <div
              flex
              justify-between
              items-center
              mt-4
              pt-4
              border-t
              border-secondaryBg
            >
              <!-- Presale starts -->
              <span text-xs opacity-60>Starts in: 03:19:29:45</span>
              <div flex>
                <HBtn icon="i-uil-heart" color="negative" flat mr-4 />
                <HBtn flat><span px-2>View</span></HBtn>
              </div>
            </div>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel px-0 name="quick-view">
        <div bg-primaryBg rounded-lg p-4>
          <q-table
            p-1
            rounded-lg
            flat
            :rows="rows"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body="props">
              <q-tr
                cursor-pointer
                @click="$router.push('/project')"
                :props="props"
              >
                <q-td key="name" :props="props">
                  <q-img w="4" h="4" fit="contain" src="~assets/img/logo.png" />
                  {{ props.row.name }}
                </q-td>
                <q-td key="hc" :props="props">
                  {{ props.row.hc }}
                </q-td>
                <q-td key="coin" :props="props">
                  {{ props.row.coin }}
                </q-td>
                <q-td key="initcap" :props="props">
                  {{ props.row.initcap }}
                </q-td>
                <q-td key="kyca" :props="props">
                  <q-badge mr-1 rounded-1 color="yellow-8"> Standard </q-badge>
                  <q-badge mr-1 color="light-blue-5"> Verified </q-badge>
                  <q-badge mr-1 color="positive"> KYC </q-badge>
                  <q-badge mr-1 color="blue-5"> Audit </q-badge>
                  <q-badge mr-1 color="amber-14"> Doxx </q-badge>
                </q-td>
                <q-td key="status" :props="props">
                  <q-badge px-10 h-4 text-2 outline color="primary">
                    {{ props.row.status }}
                  </q-badge>
                </q-td>
                <q-td key="links" :props="props">
                  <HBtn
                    size="xs"
                    dense
                    flat
                    color="defaultText"
                    target="_blank"
                    :href="l.link"
                    v-for="l in props.row.links"
                    :key="l.link"
                    :icon="l.icon"
                  />
                </q-td>
                <q-td key="tgonline" :props="props">
                  {{ props.row.tgonline }}
                </q-td>
                <q-td key="countdown" :props="props">
                  {{ props.row.countdown }}
                </q-td>
              </q-tr>
            </template>
            <template v-slot:pagination="scope">
              <q-btn
                v-if="scope.pagesNumber > 2"
                icon="first_page"
                color="primary"
                round
                mx-1
                dense
                :disable="scope.isFirstPage"
                @click="scope.firstPage"
              />

              <q-btn
                icon="chevron_left"
                color="primary"
                round
                mx-1
                dense
                :disable="scope.isFirstPage"
                @click="scope.prevPage"
              />

              <q-btn
                icon="chevron_right"
                color="primary"
                round
                mx-1
                dense
                :disable="scope.isLastPage"
                @click="scope.nextPage"
              />

              <q-btn
                v-if="scope.pagesNumber > 2"
                icon="last_page"
                color="primary"
                round
                mx-1
                dense
                :disable="scope.isLastPage"
                @click="scope.lastPage"
              /> </template
          ></q-table>
        </div>
      </q-tab-panel>
      <q-tab-panel name="my-contributions">
        <p opacity-60 text-center>
          Please connect your wallet to see your contributions.
        </p>
      </q-tab-panel>
      <q-tab-panel name="my-presales">
        <p opacity-60 text-center>
          Please connect your wallet to see your created presales.
        </p>
      </q-tab-panel>
      <q-tab-panel name="my-favorites">
        <p opacity-60 text-center>
          Please connect your wallet to see your favorites.
        </p>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
  const columns = [
    {
      name: 'name',
      field: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      sortable: true,
    },
    {
      name: 'hc',
      align: 'right',
      label: 'HC',
      field: 'hc',
      sortable: true,
    },
    { name: 'coin', label: 'Coin', field: 'coin', sortable: true },
    { name: 'initcap', label: 'InitialCap', field: 'initcap' },
    { name: 'kyca', align: 'left', label: 'KYC/Audit', field: 'kyca' },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    {
      name: 'links',
      label: 'Links',
      field: 'links',
    },
    {
      name: 'tgonline',
      label: 'TGOnline',
      field: 'tgonline',
      sortable: true,
    },
    {
      name: 'countdown',
      label: 'Countdown',
      field: 'countdown',
      sortable: true,
    },
  ];

  const rows = [
    {
      name: '8BitEarn',
      hc: '400',
      coin: 'BNB',
      initcap: '$229.4k',
      kyca: 'kyc doxx, safu',
      status: 'Upcoming',
      links: [
        {
          icon: 'telegram',
          link: 'ss',
        },
      ],
      tgonline: '524/4211',
      countdown: '01:23:45:03',
    },
    {
      name: '8BitEarn',
      hc: '400',
      coin: 'BNB',
      initcap: '$229.4k',
      kyca: 'kyc doxx, safu',
      status: 'Upcoming',
      links: [
        {
          icon: 'telegram',
          link: 'ss',
        },
      ],
      tgonline: '524/4211',
      countdown: '01:23:45:03',
    },
    {
      name: '8BitEarn',
      hc: '400',
      coin: 'BNB',
      initcap: '$229.4k',
      kyca: 'kyc doxx, safu',
      status: 'Upcoming',
      links: [
        {
          icon: 'telegram',
          link: 'ss',
        },
      ],
      tgonline: '524/4211',
      countdown: '01:23:45:03',
    },
  ];

  const search = ref('');

  const tab = $ref('launchpad-list');

  const filterBy = ref('All status');
  const filterByOptions = [
    'All Status',
    'KYC',
    'Audit',
    'Doxx',
    'Verified',
    'Upcoming',
    'Cancelled',
    'Inprogress',
    'Filled',
    'Ended',
  ];

  const sortBy = ref('No sort');
  const sortByOptions = [
    'No sort',
    'Hard Cap',
    'Soft Cap',
    'LP Percent',
    'Start Time',
    'End Time',
    'Insured Tier',
    'Standard Tier',

    'Whitelisted',
    'Public',
  ];

  const slide = ref('0');
  const slideSettingsDialog = ref(false);

  const slides = [
    {
      href: '',
      img: 'https://i.ibb.co/z7YMGBg/8-it-EARN-17.png',
    },
    {
      href: '',
      img: 'https://i.ibb.co/z7YMGBg/8-it-EARN-17.png',
    },
    {
      href: '',
      img: 'https://i.ibb.co/z7YMGBg/8-it-EARN-17.png',
    },
  ];
</script>

<style lang="scss" scoped>
  .launchpad-tabs {
    @media only screen and (max-width: 1024px) {
      width: calc(100vw - 2rem);
    }
  }
</style>
