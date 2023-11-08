<template>
  <q-no-ssr>
    <div id="chart-bar">
      <apexchart
        v-if="flashHack"
        type="pie"
        :options="options"
        :series="[44, 55, 13, 43, 22]"
      />
    </div>
  </q-no-ssr>
</template>

<script setup lang="ts">
  const theme = useQDarkMode();

  const createChartOptions = () => ({
    theme: {
      mode: theme.value,
      palette: 'palette1', // upto palette10
      monochrome: {
        enabled: false,
        color: useCssVar('--q-primary', useDocument()?.body).value,
      },
    },
    grid: {
      borderColor: useCssVar('--q-primary', useDocument()?.body).value,
      show: false,
    },
    labels: ['Liqudity', 'Presale', 'Team Vesting', 'Locked', 'Treasury'],
    chart: {
      zoom: {
        enabled: false,
      },

      background: '#00000000',
    },
    responsive: [
      {
        breakpoint: 1900,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const colorMode = useQDarkMode();
  const colorChange = isColorChanging();
  const options = ref();

  let flashHack = $ref(false);

  watch([colorMode, colorChange], () => {
    options.value = createChartOptions();
  });

  onMounted(() => {
    nextTick(() => {
      options.value = createChartOptions();
      flashHack = true;
    });
  });
</script>

<style scoped></style>
