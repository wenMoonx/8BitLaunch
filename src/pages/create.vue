<template>
  <div grid gap-12 grid-cols-1 md:grid-cols-2>
    <div fc>
      <div flex justify-between items-center>
        <h1
          text-xl
          font-700
          relative
          un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
        >
          Launchpad Pools
        </h1>
      </div>

      <div mt-4 flex gap-4 flex-wrap items-center>
        <PresalePickerCard
          w-full
          v-bind="p"
          v-for="p in pools"
          :key="p.title"
        />
      </div>
    </div>
    <div fc>
      <div flex justify-between items-center>
        <h1
          text-xl
          font-700
          relative
          un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
        >
          Create tokens
        </h1>
      </div>

      <div mt-4 flex gap-4 flex-wrap items-center>
        <PresalePickerCard
          w-full
          v-bind="t"
          v-for="t in tokens"
          :key="t.title"
        />
      </div>
    </div>
  </div>

  <div mt-12 flex justify-between items-center my-4>
    <h1
      text-xl
      font-700
      relative
      un-before="content-empty absolute top-full left-0 w-1/2 h-1 bg-primary"
    >
      Create locks
    </h1>
  </div>

  <div mt-8 flex gap-4 flex-wrap items-center>
    <PresalePickerCard
      w-full
      lg:w="1/2.05"
      v-bind="l"
      v-for="l in locks"
      :key="l.title"
    />
  </div>
</template>

<script lang="ts" setup>
  const pools = [
    {
      to: '/create-presale',
      icon: 'i-uil-analysis',
      title: 'Create Presale',
      subtitle: 'Standard presale with Soft/Hard cap',
    },
    {
      to: '/create-presale?type=hyper',
      icon: 'i-uil-fire',
      title: 'Create Hyper Launch',
      subtitle: 'Participant limited presale.',
    },
    {
      to: '/create-presale?type=subscription',
      icon: 'i-uil-user-plus',
      title: 'Create Subscription Launch',
      subtitle: 'Commitment of subscription to gain stake in presale pool.',
    },
    {
      to: '/create-presale?type=fairlaunch',
      icon: 'i-uil-rocket',
      title: 'Create Fair Launch',
      subtitle: 'Only Softcap defined presale.',
    },
    {
      to: '/create-presale?type=special',
      icon: 'i-uil-gift',
      title: 'Create Special/Private Sale',
      subtitle: `Presale unrealated to token listing.`,
    },
  ];

  const tokens = [
    {
      to: '/create-token?type=standard-token',
      icon: 'i-uil-usd-circle',
      title: 'Create Standard Token',
      subtitle: 'Typical ERC-20 Token.',
    },
    {
      to: '/create-token?type=liqidity-generator-token',
      icon: 'i-uil-usd-circle',
      title: 'Create Liqidity Generator Token',
      subtitle:
        'Every transaction make Liqidity pool more stronger, benefits diamond hands.',
    },
    {
      to: '/create-token?type=baby-token',
      icon: 'i-uil-usd-circle',
      title: 'Create Baby Token',
      subtitle: 'Giving out rewards in some other ERC-20 (like) token.',
    },
    {
      to: '/create-token?type=buyback-baby-token',
      icon: 'i-uil-usd-circle',
      title: 'Create Buyback Baby Token',
      subtitle: `Same as Baby Token with buyback mechanism.`,
    },
  ];

  const locks = [
    {
      to: '/lock',
      icon: 'i-uil-lock',
      title: 'Create Lock',
      subtitle: 'Protect your investors by using trustless locks.',
    },
  ];
</script>
