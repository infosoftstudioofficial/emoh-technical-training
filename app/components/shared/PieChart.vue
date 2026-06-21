<template>
  <Pie
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip, 
  Legend
} from 'chart.js';

import { Pie } from 'vue-chartjs';
ChartJS.register(ArcElement, Tooltip, Legend);
const props = defineProps<{
  chartData: {
    labels: string[];
    datasets: {
      backgroundColor: string[];
      data: number[];
    }[];
  };
  chartOptions?: any;
}>();
const chartOptions = props.chartOptions || {
  responsive: true,
  maintainAspectRatio: false,
};
</script>