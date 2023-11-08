<template>
  <div cursor-pointer class="card">
    <div class="card__front card__part">
      <img
        class="card__front-square card__square"
        src="~assets/img/busd_32.webp"
      />
      <img
        class="card__front-logo card__logo"
        src="~assets/img/8bit-text.png"
      />
      <p class="card_numer">0x** **** **** RG53</p>
      <div class="card__space-75">
        <span class="card__label">Card holder</span>
        <p class="card__info">0x...rg53</p>
      </div>
      <div class="card__space-25">
        <span class="card__label">Staked to</span>
        <p class="card__info">12/22</p>
      </div>
    </div>

    <div class="card__back card__part">
      <div class="card__black-line"></div>
      <div class="card__back-content">
        <div relative class="card__secret">
          <div
            bg-white
            border="~ 2px solid primary"
            @click="$router.push('/credit-facility')"
            hover="text-primary"
            style="font-family: Inter"
            transition-all
            font-medium
            absolute
            p-1
            px-2
            top="15.5"
            left-0
            rounded-xl
            dark="text-primaryBg hover:text-primary"
          >
            Click to check Eligibility.
          </div>
          <p class="card__secret--last">420</p>
        </div>
        <img
          opacity-0
          class="card__back-square card__square"
          src="~assets/img/chip.png"
        />
        <img
          class="card__back-logo card__logo"
          src="~assets/img/8bit-text.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');

  * {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    background-image: linear-gradient(
      to right top,
      #a2beeb,
      #8ecfee,
      #8edde5,
      #a4e7d5,
      #c7eec7
    );
    flex-direction: column;
    -webkit-flex-direction: column;
  }
  .title {
    margin-bottom: 30px;
    color: #162969;
  }

  .card {
    width: 320px;
    height: 190px;
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    perspective: 600px;
  }

  .card__part {
    box-shadow: 3px 3px var(--q-primaryBg);
    top: 0;
    position: absolute;
    z-index: 1000;
    left: 0;
    display: inline-block;
    width: 320px;
    height: 190px;
    background-image: url('~/src/assets/img/footer-bg.png'),
      linear-gradient(
        to right bottom,
        #fdce69,
        #fac761,
        #f6d458,
        #f1a950,
        #eca548
      ); /*linear-gradient(to right bottom, #fd8369, #fc7870, #f96e78, #f56581, #ee5d8a)*/
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;

    -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;

    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .card__front {
    padding: 18px;
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);

    transform: rotateY(0);
  }

  .card__back {
    padding: 18px 0;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  .card__black-line {
    margin-top: 5px;
    height: 38px;
    background-color: #303030;
  }

  .card__logo {
    height: 32px;
    filter: grayscale(1) contrast(100) brightness(1);
  }

  .card__front-logo {
    position: absolute;
    top: 18px;
    right: 18px;
  }
  .card__square {
    filter: grayscale(1) contrast(100) brightness(1);
    border-radius: 5px;
    height: 30px;
  }

  .card_numer {
    display: block;
    width: 100%;
    word-spacing: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .card_numer {
      font-size: 18px;
    }
  }

  .card__space-75 {
    width: 75%;
    float: left;
  }

  .card__space-25 {
    width: 25%;
    float: left;
  }

  .card__label {
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
  }

  .card__info {
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .card__back-content {
    padding: 15px 15px 0;
  }
  .card__secret--last {
    color: #303030;
    text-align: right;
    margin: 0;
    font-size: 14px;
  }

  .card__secret {
    padding: 5px 12px;
    background-color: #fff;
    position: relative;
  }

  .card__secret:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    height: calc(100% + 6px);
    width: calc(100% - 42px);
    border-radius: 4px;
    background: repeating-linear-gradient(
      45deg,
      #ededed,
      #ededed 5px,
      #f9f9f9 5px,
      #f9f9f9 10px
    );
  }

  .card__back-logo {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  .card__back-square {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  .card:hover .card__front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .card:hover .card__back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
</style>
