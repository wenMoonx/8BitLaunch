<template>
  <q-no-ssr>
    <apexchart
      v-if="flashHack"
      type="area"
      :options="options"
      :series="series"
    />
    <div v-else h-80 w-1></div>
  </q-no-ssr>
</template>

<script setup lang="ts">
  const props = defineProps<{
    labels?: boolean;
    priceFn?: (val: string) => string;
  }>();

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
      zoom: {
        enabled: false,
      },

      toolbar: {
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
        formatter:
          props.priceFn ||
          function (val: string) {
            return '$' + val + 'k';
          },
      },
    },
    legend: { show: false },

    yaxis: {
      labels: { show: props.labels || false },
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

  const colorMode = useQDarkMode();

  const colorChange = isColorChanging();

  const options = ref();
  let flashHack = $ref(false);

  watch([colorMode, colorChange], () => {
    options.value = createChartOptions();
  });

  const series = [
    {
      name: props.priceFn ? 'Value' : 'Total Value Locked',
      data: [0, 40, 50, 150, 180, 340, 325],
    },
  ];

  onMounted(() => {
    nextTick(() => {
      options.value = createChartOptions();
      flashHack = true;
    });
  });
</script>

<style scoped></style>
