<template>
  <div md:flex mb-4>
    <Breadcrumb>
      <q-breadcrumbs-el
        color="primary"
        label="Home"
        icon="i-uil-home-alt"
        to="/launchpad"
      />
      <q-breadcrumbs-el label="Multisender" />
    </Breadcrumb>
  </div>
  <div
    mb-4
    md:mb-8
    flex
    justify-between
    lg="justify-center text-center"
    items-center
  >
    <div>
      <h1
        text-2xl
        font-700
        relative
        w-max
        un-before="content-empty absolute top-full lg:left-1/4 w-1/2 h-1  bg-primary"
      >
        Multisender
      </h1>
    </div>
  </div>

  <div lg:max-w="2/3" xl:max-w="55%" xl2:max-w="45%" m-auto>
    <div text-center opacity-50 mb-4>Massdroping of Tokens</div>
    <!-- <div flex flex-wrap mb-8 justify-center gap-2>
      <div p-3 bg-primaryBg rounded-xl>
        <p font-300 opacity-50>Vested Token Distribution</p>
      </div>
      <div p-3 bg-primaryBg rounded-xl>
        <p font-300 opacity-50>Diamond Hands Airdrops</p>
      </div>
      <div p-3 bg-primaryBg rounded-xl>
        <p font-300 opacity-50>Giveaway Airdrops</p>
      </div>
    </div> -->

    <MultisenderForm />
  </div>
</template>

<script setup lang="ts"></script>
