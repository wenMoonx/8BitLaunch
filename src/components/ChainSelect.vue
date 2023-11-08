<template>
  <q-select
    v-if="!useFlags"
    option-label="name"
    bg-color="bg-primaryBg"
    dropdown-icon="i-uil-angle-down"
    :label-color="select ? 'defaultText' : ''"
    :label-slot="select"
    :outlined="!borderless"
    :borderless="borderless"
    v-model="model"
    :options="options"
    v-bind="$attrs"
    text-xs
  >
    <template v-if="select" v-slot:label>
      <span text-xs>{{ $attrs.label }}</span>
    </template>
    <template v-slot:prepend>
      <q-img
        rounded-1
        mb-1
        v-if="model"
        w-6
        h-6
        mr-4
        fit-contain
        :src="getImageUrl(model.img)"
      />
      <q-icon v-else i-uil-link-h mr-4 />
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-img
            rounded-1
            w-6
            h-6
            fit-contain
            :src="getImageUrl(scope.opt.img)"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
  <q-select
    v-else
    option-label="name"
    bg-color="bg-primaryBg"
    dropdown-icon="i-uil-angle-down"
    :outlined="!borderless"
    :borderless="borderless"
    v-model="model"
    :options="
      flags.map((e) => ({
        name: e.split('.')[0].toUpperCase(),
        img: e,
        value: e.split('.')[0].toUpperCase(),
      }))
    "
    v-bind="$attrs"
    text-xs
  >
    <template v-slot:prepend>
      <q-img
        mb-1
        rounded-1
        v-if="model"
        w-6
        h-6
        mr-4
        fit-contain
        :src="getFlagUrl(model.img)"
      />
      <q-icon v-else i-uil-dollar-sign mr-4 />
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-img
            rounded-1
            w-6
            h-6
            fit-contain
            :src="getFlagUrl(scope.opt.img)"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label font-black>{{ scope.opt.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
  const model = ref(null as any);
  const options = [
    {
      name: 'Binance Smart Chain',
      img: 'binance.webp',
      value: 'Binance Smart Chain',
    },
    {
      name: 'Bitcoin',
      img: 'bitcoin.webp',
      value: 'Bitcoin',
    },
    {
      name: 'Ethereum',
      img: 'eth.webp',
      value: 'Ethereum',
    },
    {
      name: 'Cronos Mainnet',
      img: 'cronos.webp',
      value: 'Cronos',
    },
    {
      name: 'DogeChain',
      img: 'dogechain.webp',
      value: 'Doge',
    },
    {
      name: 'Polygon',
      img: 'polygon.webp',
      value: 'Polygon',
    },
    {
      name: 'Avalanche',
      img: 'avalanche.webp',
      value: 'Avalanche',
    },
    {
      name: 'Cardano',
      img: 'cardano.webp',
      value: 'Cardano',
    },
    {
      name: 'Polkadot',
      img: 'polkadot.webp',
      value: 'Polkadot',
    },
    {
      name: 'Solana',
      img: 'solana.webp',
      value: 'Solana',
    },
    {
      name: 'Stellar',
      img: 'stellar.webp',
      value: 'Stellar',
    },
    {
      name: 'Tezos',
      img: 'tezos.webp',
      value: 'Tezos',
    },
    {
      name: 'Arbitrum',
      img: 'arbitrum.webp',
      value: 'Arbitrum',
    },
    {
      name: 'Optimism',
      img: 'optimism.webp',
      value: 'Optimism',
    },
    {
      name: 'Fantom',
      img: 'fantom.webp',
      value: 'Fantom',
    },
    {
      name: 'Klaytn',
      img: 'klaytn.webp',
      value: 'Klaytn',
    },
    {
      name: 'Fusion',
      img: 'fusion.webp',
      value: 'Fusion',
    },
    {
      name: 'Celo',
      img: 'celo.webp',
      value: 'Celo',
    },
    {
      name: 'Heco',
      img: 'heco.webp',
      value: 'Heco',
    },
    {
      name: 'Canto',
      img: 'canto.webp',
      value: 'Canto',
    },
    {
      name: 'Theta',
      img: 'theta.webp',
      value: 'Theta',
    },
    {
      name: 'Velas',
      img: 'velas.webp',
      value: 'Velas',
    },
    {
      name: 'Harmony',
      img: 'harmony.webp',
      value: 'Harmony',
    },
    {
      name: 'Bitgert',
      img: 'bitgert.webp',
      value: 'Bitgert',
    },
    {
      name: 'Kardia',
      img: 'kardia.webp',
      value: 'Kardia',
    },
    {
      name: 'Evmos',
      img: 'evmos.webp',
      value: 'Evmos',
    },
    {
      name: 'Meter',
      img: 'meter.webp',
      value: 'Meter',
    },
    {
      name: 'Elastos',
      img: 'elastos.webp',
      value: 'Elastos',
    },
    {
      name: 'Fuse',
      img: 'fuse.webp',
      value: 'fuse',
    },
    {
      name: 'Syscoin',
      img: 'syscoin.webp',
      value: 'Syscoin',
    },
    {
      name: 'Filecoin',
      img: 'filecoin.webp',
      value: 'Filecoin',
    },
    {
      name: 'Tron',
      img: 'tron.webp',
      value: 'Tron',
    },
    {
      name: 'XDC Network',
      img: 'xdc.webp',
      value: 'XDC',
    },
  ];

  const flags = [
    'aed.svg',
    'ars.svg',
    'aud.svg',
    'bdt.svg',
    'bgn.svg',
    'bnd.svg',
    'brl.svg',
    'bwp.svg',
    'cad.svg',
    'chf.svg',
    'clp.svg',
    'cny.svg',
    'crc.svg',
    'czk.svg',
    'dkk.svg',
    'egp.svg',
    'eur.svg',
    'fjd.svg',
    'gbp.svg',
    'gel.svg',
    'ggp.svg',
    'ghs.svg',
    'hkd.svg',
    'hrk.svg',
    'huf.svg',
    'idr.svg',
    'ils.svg',
    'imp.svg',
    'inr.svg',
    'jep.svg',
    'jpy.svg',
    'kes.svg',
    'krw.svg',
    'lak.svg',
    'lkr.svg',
    'lsl.svg',
    'mad.svg',
    'mxn.svg',
    'myr.svg',
    'ngn.svg',
    'nok.svg',
    'npr.svg',
    'nzd.svg',
    'pab.svg',
    'pen.svg',
    'php.svg',
    'pkr.svg',
    'pln.svg',
    'ron.svg',
    'rub.svg',
    'sek.svg',
    'sgd.svg',
    'thb.svg',
    'tmt.svg',
    'try.svg',
    'tzs.svg',
    'uah.svg',
    'ugx.svg',
    'usd.svg',
    'vnd.svg',
    'xof.svg',
    'zar.svg',
  ];

  function getFlagUrl(img: string) {
    return new URL(`../assets/flags/${img}`, import.meta.url).href;
  }

  defineProps<{ borderless?: boolean; useFlags?: boolean; select?: boolean }>();

  function getImageUrl(img: string) {
    return new URL(`../assets/img/${img}`, import.meta.url).href;
  }
</script>

<style scoped></style>
