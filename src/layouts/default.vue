<template>
  <q-dialog v-model="startupDialog">
    <!-- <div rounded-xl bg-primaryBg p-4 w-90vw md:w-50vw>
      <div
        items-center
        flex
        justify-between
        mb-4
        pb-2
        border-b
        border-secondaryBg
      >
        <h2 text-lg font-500>Launchpad tiering system</h2>
        <HBtn flat icon="i-uil-times-circle" v-close-popup />
      </div>
      <p font-300 text-xs opacity-60 text-center>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
        accusamus?
      </p>
      <div fc md:flex-row gap-4 justify-center my-4>
        <div fc p-4 items-center rounded-xl bg-secondaryBg>
          <span font-700 opacity-60 text-base mt-1>Normal Tier</span>
          <span font-300 text-xs color-primary>
            <q-icon size="sm" name="i-uil-shield-slash"
          /></span>
          <p mt-2 font-300 text-xs opacity-60 text-center>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            facilis.
          </p>
        </div>
        <div fc p-2 items-center rounded-xl bg-secondaryBg>
          <span font-700 opacity-60 text-base mt-1>Insured Tier</span>
          <span font-300 text-xs color-primary>
            <q-icon size="sm" name="i-uil-shield-check"
          /></span>
          <p mt-2 font-300 text-xs opacity-60 text-center>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            facilis.
          </p>
        </div>
      </div>
      <p font-300 text-xs opacity-60 text-center>
        Don't have $8Bit tokens? By now.
      </p>

      <div flex justify-center mt-4>
        <HBtn target="_blank" href="https://prodex.8bitearn.com/">
          <span px-2>Buy $8bit now</span>
        </HBtn>
      </div>
    </div> -->
    <div rounded-xl bg-primaryBg p-4 w-90vw md:w-50vw>
      <div
        items-center
        flex
        justify-between
        mb-4
        pb-2
        border-b
        border-secondaryBg
      >
        <h2 text-lg font-500>StartUP Guide</h2>
        <HBtn flat icon="i-uil-times-circle" v-close-popup />
      </div>
      <p>
        If you are looking for any assistance in your Crypto Start-up, 8BitEARN
        is poised to assist you from scratch of your journey. Please write a
        mail to
        <a text-primary href="mailto:admin@8bitearn.com">admin@8bitearn.com</a>
        to proceed further.
      </p>
    </div>
  </q-dialog>
  <q-layout view="lLl lpR fFf">
    <Sidebar v-model="drawer">
      <template #header>
        <div px-5 pt-3>
          <q-img dark:hidden h-18 fit="cover" w-50 src="~assets/img/1.png" />
          <q-img light:hidden h-18 fit="cover" w-50 src="~assets/img/2.png" />
        </div>
      </template>
      <template #navigation>
        <div px-4 mb-4 lg:hidden>
          <ChainSelect dense label="Select network" />
        </div>
        <q-item
          rounded-0
          class="rounded-borders"
          active-classs="active-bg"
          :to="getTo('')"
          clickable
          v-ripple
          exact
          mb-1
          relative
        >
          <Indicator v-if="$route.path === '/'" />
          <q-item-section avatar pl-1>
            <q-icon i-uil-home-alt color-defaultText size="sm" />
          </q-item-section>

          <q-item-section>Presale List</q-item-section>
        </q-item>

        <q-expansion-item icon="i-uil-rocket" label="Launchpad Pools">
          <div bg-secondaryBg p-2 mx-4 rounded-lg>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-presale"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator
                v-if="$route.path === '/create-presale' && !$route.query.type"
              />
              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Create Presale</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-presale?type=hyper"
              clickable
              exact-active
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'hyper'" />
              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Create Hyper Launch</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-presale?type=subscription"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'subscription'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Subscription Launch</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-presale?type=fairlaunch"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'fairlaunch'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Create Fair Launch</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-presale?type=special"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'special'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Special/Private Sale</q-item-section>
            </q-item>
          </div>
        </q-expansion-item>
        <q-expansion-item icon="i-uil-usd-circle" label="Create Tokens">
          <div bg-secondaryBg p-2 mx-4 rounded-lg>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-token?type=standard-token"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'standard-token'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Standard Token</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-token?type=liqidity-generator-token"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator
                v-if="$route.query.type === 'liqidity-generator-token'"
              />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Liqidity Generator Token</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-token?type=baby-token"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'baby-token'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Baby Token</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/create-token?type=buyback-baby-token"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.type === 'buyback-baby-token'" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Buyback Baby Token</q-item-section>
            </q-item>
          </div>
        </q-expansion-item>
        <q-expansion-item icon="i-uil-lock" label="Manage Locks">
          <div bg-secondaryBg mx-4 p-2 rounded-lg>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/lock"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.path === '/lock' && !$route.query.view" />

              <q-item-section avatar>
                <q-icon i-uil-plus color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Create Lock</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/lock?view=token"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.view === 'token'" />

              <q-item-section avatar>
                <q-icon i-uil-eye color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Token Locks</q-item-section>
            </q-item>
            <q-item
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              to="/lock?view=liquidity"
              clickable
              v-ripple
              exact
              mb-1
              relative
              px-2
            >
              <Indicator v-if="$route.query.view === 'liquidity'" />

              <q-item-section avatar>
                <q-icon i-uil-eye color-defaultText size="xs" />
              </q-item-section>
              <q-item-section text-xs>Liquidity Locks</q-item-section>
            </q-item>
          </div>
        </q-expansion-item>

        <q-item
          rounded-0
          class="rounded-borders"
          active-classs="active-bg"
          to="/multisender"
          clickable
          v-ripple
          exact
          mb-1
          relative
        >
          <Indicator v-if="$route.path.startsWith('/multisender')" />
          <q-item-section avatar pl-1>
            <q-icon i-uil-navigator color-defaultText size="sm" />
          </q-item-section>
          <q-item-section>Multisender</q-item-section>
        </q-item>
        <q-item
          rounded-0
          class="rounded-borders"
          active-classs="active-bg"
          href="https://github.com/8BitEARN/8BitEARN-EcoSystem"
          target="_blank"
          clickable
          v-ripple
          exact
          mb-1
          relative
        >
          <Indicator v-if="$route.path.startsWith('/multisender')" />
          <q-item-section avatar pl-1>
            <q-icon i-uil-files-landscapes-alt color-defaultText size="sm" />
          </q-item-section>
          <q-item-section>Docs</q-item-section>
        </q-item>

        <q-item
          rounded-0
          class="rounded-borders"
          active-classs="active-bg"
          clickable
          @click="startupDialog = true"
          v-ripple
          exact
          mb-1
          relative
        >
          <q-item-section avatar pl-1>
            <q-icon i-uil-rocket color-defaultText size="sm" />
          </q-item-section>
          <q-item-section>StartUP Guide</q-item-section>
        </q-item>
        <div relative>
          <q-expansion-item>
            <q-item
              v-for="e in [
                {
                  name: 'Audit',
                  link: 'https://github.com/8BitEARN/8BitEARN-EcoSystem',
                },
                {
                  name: 'KYC',
                  link: 'https://github.com/8BitEARN/8BitEARN-EcoSystem',
                },
              ]"
              :key="e.name"
              target="_blank"
              :href="e.link"
              rounded-0
              class="rounded-borders"
              active-classs="active-bg"
              clickable
              v-ripple
              exact
              mb-1
              relative
              pl-15
            >
              <q-item-section>{{ e.name }}</q-item-section>
            </q-item>
          </q-expansion-item>

          <div
            pointer-events-none
            absolute
            top-3
            left-5
            flex
            justify-between
            items-center
            gap-4
          >
            <IKyc text-2xl />
            <div>Audit/KYC</div>
          </div>
        </div>
        <div mx-4 mb-65>
          <p mt-4 mb-2 text-xs font-300 opacity-50>Launchpad tiers</p>

          <div>
            <div
              bg-secondaryBg
              flex
              justify-between
              items-center
              p-2
              px-4
              rounded-xl
              border
              border-primaryBg
              mb-2
            >
              <span font-700 text-xs>Insured Tier</span>
              <q-icon size="sm" name="i-uil-shield-check" />
            </div>
            <div
              bg-secondaryBg
              flex
              justify-between
              items-center
              p-2
              px-4
              rounded-xl
              border
              border-primaryBg
            >
              <span font-700 text-xs>Standard Tier</span>
              <q-icon size="sm" name="i-uil-shield-slash" />
            </div>
          </div>
          <div mt-1 flex justify-center>
            <HBtn
              no-padding
              flat
              size="sm"
              href="https://github.com/8BitEARN/8BitEARN-EcoSystem"
              target="_blank"
              ><span px-2>Tiers guide</span></HBtn
            >
          </div>
        </div>
      </template>
      <template #fixed-bottom>
        <Divider opacity-10 />

        <div flex justify-between items-center>
          <span text-xs py-1 px-2 rounded-lg bg-secondaryBg font-500>{{
            '$0.006' || price
          }}</span>

          <q-no-ssr>
            <ThemeSwitcher />
          </q-no-ssr>
        </div>
        <div flex>
          <HBtn
            dark:hidden
            flex-1
            target="_blank"
            href="https://www.prodex.app"
            rounded-lg
            px-6
            no-padding
            size="sm"
          >
            <span text-4 py-1>Buy $8Bit</span></HBtn
          >
          <HBtn
            light:hidden
            flex-1
            target="_blank"
            href="https://www.prodex.app"
            rounded-lg
            px-6
            no-padding
            outline
            size="sm"
          >
            <span text-4 py-1>Buy $8Bit</span></HBtn
          >
        </div>

        <div flex items-center justify-center>
          <HBtn size="sm" flat color="defaultText" icon="i-uil-telegram" />
          <HBtn size="sm" flat color="defaultText" icon="i-uil-twitter" />
          <HBtn size="sm" flat color="defaultText" icon="i-uil-globe" />
        </div>

        <div flex justify-center>
          <p pxs>
            Powered by
            <a
              text-primary
              href="https://www.8bitearn.com/"
              target="_blank"
              rel="noopener noreferrer"
              >8BitEARN</a
            >
          </p>
        </div>
      </template>
    </Sidebar>
    <q-page-container>
      <q-page bg-secondaryBg>
        <div
          flex
          justify-between
          items-center
          sticky
          top-0
          z-10
          py-4
          px-4
          lg:px-8
          bg-primaryBg
          lg:border-l
          lg:border-secondaryBg
        >
          <div>
            <q-img
              lg:hidden
              light:hidden
              @click="$router.push('/')"
              w-15
              src="~assets/img/6.png"
            />

            <q-img
              lg:hidden
              dark:hidden
              @click="$router.push('/')"
              w-15
              src="~assets/img/7.png"
            />
            <div hidden lg:flex items-center gap-10>
              <HBtn
                v-if="!drawer"
                absolute
                top="5"
                left="5"
                size="sm"
                color="accent"
                @click="drawer = true"
                icon="i-uil-angle-right-b"
              />
            </div>
            <div :class="{ 'ml-8': !drawer }" hidden lg:flex items-center>
              <p text-xs opacity-50 mr-2>$8Bit</p>
              <span py-2 px-4 rounded-lg bg-secondaryBg font-500>{{
                '$0.006' || price
              }}</span>
            </div>
          </div>

          <div flex items-center lg:rounded-bl-lg>
            <!-- If wallet is not connected -->
            <div ml-4 hidden md:block>
              <ChainSelect min-w-25 dense label="Select chain" />
            </div>

            <HBtn @click="connectWallet" v-if="!userStore.wallet.address" ml-4>
              <span px-4>Connect wallet</span>
            </HBtn>

            <!-- If wallet is connected -->
            <q-btn-dropdown
              v-else
              ml-4
              padding="8px 12px"
              outline
              dropdown-icon="i-uil-arrow-down"
              no-caps
              :icon="
                !errorMessage
                  ? 'i-uil-wallet'
                  : errorMessage.includes('sign')
                  ? 'i-uil-sign-out-alt'
                  : 'i-uil-exclamation-octagon'
              "
              :color="
                !errorMessage
                  ? 'primary'
                  : errorMessage.includes('sign')
                  ? 'secondary'
                  : 'negative'
              "
              :label="addressShortener(userStore.wallet.address)"
              font-700
            >
              <q-banner v-if="errorMessage" bg-negative dense>
                <template v-slot:avatar>
                  <q-icon name="i-uil-exclamation-octagon" />
                </template>
                <div v-html="errorMessage" text-xs font-700></div>
              </q-banner>

              <div bg-secondaryBg border border-primaryBg rounded-lg>
                <div pa-4 class="items-center flex flex-col">
                  <Solacon
                    :data="userStore.wallet.address"
                    variant="primary"
                    w-12
                    h-12
                  />

                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                    {{ addressShortener(userStore.wallet.address) }}
                  </div>

                  <q-btn
                    size="sm"
                    no-caps
                    color="negative"
                    @click="disconnectWallet"
                    label="Disconnect"
                    v-close-popup
                  />
                </div>
              </div>
            </q-btn-dropdown>
            <HBtn
              flat
              color="defaultText"
              lg:hidden
              ml-4
              size="lg"
              @click="drawer = true"
              icon="i-uil-bars"
            />
          </div>
        </div>
        <div class="content" px-4 lg:px-8 py-4 lg:py-8>
          <RouterView v-slot="{ Component }">
            <template v-if="Component">
              <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                appear
                :duration="200"
                mode="out-in"
              >
                <div :key="$route.path + 1">
                  <q-no-ssr>
                    <Suspense timeout="0">
                      <component :is="Component" :key="$route.path" />
                      <template #fallback>
                        <GlobalLoading />
                      </template>
                    </Suspense>
                    <template #placeholder>
                      <div v-show="false">
                        <Suspense timeout="0">
                          <component :is="Component" :key="$route.path" />
                        </Suspense>
                      </div>
                    </template>
                  </q-no-ssr>
                </div>
              </transition>
            </template>
          </RouterView>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
  import { ethers } from 'ethers';

  let drawer = $ref(false);
  const router = useRouter();
  const route = useRoute();

  const startupDialog = ref(false);

  const screen = useWindowSize();

  const chainSelect = ref('Binance Smart Chain');
  const chainSelectOptions = [
    'Binance Smart Chain',
    'Doge Chain Mainnet',
    'Etherium',
    'Cronos Mainnet',
    'Polygon Mainnet',
    'Testnet',
  ];

  watch(
    () => route.path,
    () => {
      if (screen.width.value < 1024) {
        drawer = false;
      }
    }
  );

  let loading = $ref(false);

  const giveawayModal = ref(false);
  const giveawayForm = reactive<{ wallet: string; isWinner: null | boolean }>({
    wallet: '',
    isWinner: null,
  });

  let profileModal = $ref(false);

  const userStore = useUserStore();

  const price = usePriceCalculator();

  const axios = useAxios();

  let web3Modal = useWeb3Modal();

  const savedToken = useLocalStorage('token', '');

  if ((web3Modal as any)?.providerController.cachedProvider) {
    connectWallet();
  }
  web3Modal?.on('chainChanged', () => {
    disconnectWallet();
  });

  const errorMessage = computed(() => {
    if (userStore.wallet.chainId != 0x38)
      return `Unsuported Network detected!<br />Please connect to BSC Mainnet.`;
    if (!savedToken.value.length)
      return `Not authenticated !<br />Please sign nonce message.`;

    return null;
  });

  async function checkWinner() {
    if (giveawayForm.wallet.length != 42) {
      useNotify('negative', 'Please enter valid ETH address!');
      return;
    }
    loading = true;

    giveawayForm.isWinner = null;
    const { data: isWinner } = await axios.get(
      `https://api.bwatch.cc/v1/giveawayWinner/7296/${giveawayForm.wallet}`
    );
    giveawayForm.isWinner = isWinner;
    loading = false;
  }

  async function connectWallet(justNonce?: boolean) {
    const connection = await web3Modal?.connect();
    userStore.wallet.provider = new ethers.providers.Web3Provider(
      connection,
      'any'
    );

    const address =
      connection.address ||
      connection.selectedAddress ||
      (connection.accounts && connection.accounts[0]);

    const chainId = connection.chainId;

    userStore.wallet.address = address;
    userStore.wallet.chainId = chainId;

    // const { nonce } = (await axios.get(`/api/nonce/${address}`))?.data;
    const signer = userStore.wallet.provider.getSigner();
    savedToken.value = await signer.getAddress();

    // if (!savedToken.value.length) {
    //   try {
    //     const signature = await signer.signMessage(nonce);
    //     const { token } = (
    //       await axios.post(`/api/auth`, {
    //         nonce,
    //         signature,
    //         claimedAddress: address,
    //       })
    //     )?.data;

    //     savedToken.value = token;
    //   } catch (error) {
    //     disconnectWallet();
    //     throw new Error(error as string);
    //   }
    // }

    if (justNonce) {
      return;
    }

    connection.on('accountsChanged', (accounts: string[]) => {
      userStore.wallet.address = accounts[0];
      savedToken.value = '';
      connectWallet(true);
    });

    // Subscribe to chainId change
    connection.on('chainChanged', (chainId: number) => {
      userStore.wallet.chainId = chainId;
    });

    // Subscribe to provider connection
    connection.on('connect', (info: { chainId: number }) => {
      console.log(info);
      userStore.wallet.address = address;
    });

    // Subscribe to provider disconnection
    connection.on('disconnect', (error: { code: number; message: string }) => {
      disconnectWallet();
    });
  }

  async function disconnectWallet() {
    web3Modal?.clearCachedProvider();
    localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
    localStorage.removeItem('walletconnect');

    savedToken.value = '';
    userStore.wallet.address = '';
    userStore.user = {};

    localStorage.removeItem('token');
  }

  const getTo = (path: string) => `/${path}`;
</script>

<style lang="scss">
  body {
    background-color: var(--q-secondaryBg);
  }
  .q-item__section--avatar {
    min-width: unset;
  }
  .content {
    max-width: 1670px;
    margin: 0 auto;
  }

  .sidebar-expansion {
    .q-item__section--side {
      margin-right: 0;
    }
    .q-item {
      border-radius: 10px;
    }
  }
  .sidebar-expansion.q-expansion-item--colapsed {
    background: transparent;
  }
  .sidebar-expansion.q-expansion-item--expanded {
    background: var(--q-accent);
  }

  .btn-drawer {
    position: absolute;
    top: 24px;
    right: -16px;
    z-index: 1;
  }
</style>
