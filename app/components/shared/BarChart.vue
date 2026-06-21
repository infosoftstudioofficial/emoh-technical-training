<template>
  <Bar
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const props = defineProps<{
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      backgroundColor: string;
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

<style scoped>
</style>