<template>
  <q-no-ssr>
    <div id="chart-candlestick">
      <apexchart
        v-if="flashHack"
        type="candlestick"
        height="250"
        :options="options"
        :series="[
          {
            data: seriesData,
          },
        ]"
      />
    </div>
    <div id="chart-bar">
      <apexchart
        v-if="flashHack"
        type="bar"
        height="150"
        :options="barOptions"
        :series="seriesBar"
      />
    </div>
  </q-no-ssr>
</template>

<script setup lang="ts">
  const theme = useQDarkMode();
  const createChartOptions = () => ({
    theme: {
      mode: theme.value,
      palette: 'palette10', // upto palette10
      monochrome: {
        enabled: true,
        color: useCssVar('--q-primary', useDocument()?.body).value,
      },
    },
    grid: {
      borderColor: useCssVar('--q-primary', useDocument()?.body).value,
      show: false,
    },
    chart: {
      id: 'candles',
      zoom: {
        enabled: false,
      },
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },

      background: '#00000000',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return '$' + val + 'k';
        },
      },
    },
    legend: { show: false },

    yaxis: {
      labels: { show: true },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      labels: { show: false },
      type: 'datetime',
      categories: [
        '2022-11-17T00:00:00.000Z',
        '2022-11-18T01:30:00.000Z',
        '2022-11-19T02:30:00.000Z',
        '2022-11-20T03:30:00.000Z',
        '2022-11-21T04:30:00.000Z',
        '2022-11-22T05:30:00.000Z',
        '2022-11-23T06:30:00.000Z',
      ],
    },
  });

  const seriesData = [
    {
      x: new Date(2021, 1, 1),
      y: [51.98, 56.29, 51.59, 53.85],
    },
    {
      x: new Date(2021, 2, 1),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date(2021, 3, 1),
      y: [52.96, 53.78, 51.54, 52.48],
    },
    {
      x: new Date(2021, 4, 1),
      y: [52.54, 52.79, 47.88, 49.24],
    },
    {
      x: new Date(2021, 5, 1),
      y: [49.1, 52.86, 47.7, 52.78],
    },
    {
      x: new Date(2021, 6, 1),
      y: [52.83, 53.48, 50.32, 52.29],
    },
    {
      x: new Date(2021, 7, 1),
      y: [52.2, 54.48, 51.64, 52.58],
    },
    {
      x: new Date(2021, 8, 1),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date(2021, 9, 1),
      y: [57.04, 58.15, 48.88, 56.19],
    },
    {
      x: new Date(2021, 10, 1),
      y: [56.9, 58.85, 55.48, 58.79],
    },
    {
      x: new Date(2021, 11, 1),
      y: [58.78, 59.65, 58.23, 59.05],
    },
    {
      x: new Date(2022, 0, 1),
      y: [59.37, 61.11, 59.35, 60.34],
    },
    {
      x: new Date(2022, 1, 1),
      y: [60.4, 60.52, 56.71, 56.93],
    },
    {
      x: new Date(2022, 2, 1),
      y: [57.02, 59.71, 56.04, 56.82],
    },
    {
      x: new Date(2022, 3, 1),
      y: [56.97, 59.62, 54.77, 59.3],
    },
    {
      x: new Date(2022, 4, 1),
      y: [59.11, 62.29, 59.1, 59.85],
    },
    {
      x: new Date(2022, 5, 1),
      y: [59.97, 60.11, 55.66, 58.42],
    },
    {
      x: new Date(2022, 6, 1),
      y: [58.34, 60.93, 56.75, 57.42],
    },
    {
      x: new Date(2022, 7, 1),
      y: [57.76, 58.8, 51.18, 54.71],
    },
    {
      x: new Date(2022, 8, 1),
      y: [54.8, 61.42, 53.18, 57.35],
    },
    {
      x: new Date(2022, 9, 1),
      y: [57.56, 63.9, 57.0, 62.99],
    },
    {
      x: new Date(2022, 10, 1),
      y: [62.89, 63.42, 59.72, 61.76],
    },
    {
      x: new Date(2022, 11, 1),
      y: [61.71, 64.15, 61.29, 63.04],
    },
  ];

  const chartOptionsBar = () => ({
    theme: {
      mode: theme.value,
      palette: 'palette10', // upto palette10
      monochrome: {
        enabled: true,
        color: useCssVar('--q-primary', useDocument()?.body).value,
      },
    },
    chart: {
      background: '#00000000',
      height: 160,
      type: 'bar',
      brush: {
        enabled: true,
        target: 'candles',
      },
      selection: {
        enabled: true,
        xaxis: {},
        fill: {
          color: '#ccc',
          opacity: 0.4,
        },
        stroke: {
          color: '#0D47A1',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        colors: {
          ranges: [
            {
              from: -1000,
              to: 0,
              color: '#F15B46',
            },
            {
              from: 1,
              to: 10000,
              color: '#FEB019',
            },
          ],
        },
      },
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        offsetX: 13,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
  });

  const seriesDataLinear = [
    {
      x: new Date(2021, 1, 1),
      y: 3.85,
    },
    {
      x: new Date(2021, 2, 1),
      y: 2.95,
    },
    {
      x: new Date(2021, 3, 1),
      y: -12.48,
    },
    {
      x: new Date(2021, 4, 1),
      y: 19.24,
    },
    {
      x: new Date(2021, 5, 1),
      y: 12.78,
    },
    {
      x: new Date(2021, 6, 1),
      y: 22.29,
    },
    {
      x: new Date(2021, 7, 1),
      y: -12.58,
    },
    {
      x: new Date(2021, 8, 1),
      y: -17.03,
    },
    {
      x: new Date(2021, 9, 1),
      y: -19.19,
    },
    {
      x: new Date(2021, 10, 1),
      y: -28.79,
    },
    {
      x: new Date(2021, 11, 1),
      y: -39.05,
    },
    {
      x: new Date(2022, 0, 1),
      y: 20.34,
    },
    {
      x: new Date(2022, 1, 1),
      y: 36.93,
    },
    {
      x: new Date(2022, 2, 1),
      y: 36.82,
    },
    {
      x: new Date(2022, 3, 1),
      y: 29.3,
    },
    {
      x: new Date(2022, 4, 1),
      y: 39.85,
    },
    {
      x: new Date(2022, 5, 1),
      y: 28.42,
    },
    {
      x: new Date(2022, 6, 1),
      y: 37.42,
    },
    {
      x: new Date(2022, 7, 1),
      y: 24.71,
    },
    {
      x: new Date(2022, 8, 1),
      y: 37.35,
    },
    {
      x: new Date(2022, 9, 1),
      y: 32.99,
    },
    {
      x: new Date(2022, 10, 1),
      y: 31.76,
    },
    {
      x: new Date(2022, 11, 1),
      y: 43.04,
    },
  ];

  const seriesBar = [
    {
      name: 'volume',
      data: seriesDataLinear,
    },
  ];

  const colorMode = useQDarkMode();

  const colorChange = isColorChanging();

  const options = ref();
  const barOptions = ref();

  let flashHack = $ref(false);

  watch([colorMode, colorChange], () => {
    options.value = createChartOptions();
    barOptions.value = chartOptionsBar();
  });

  onMounted(() => {
    nextTick(() => {
      options.value = createChartOptions();
      barOptions.value = chartOptionsBar();
      flashHack = true;
    });
  });
</script>

<style scoped></style>
