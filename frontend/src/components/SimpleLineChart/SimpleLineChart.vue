<script setup lang="ts">
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { computed, defineProps } from "vue";
import { Line } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

interface Props {
  data: Array<any>;
  xAxis: string;
  dataKey: string;
}

const props = defineProps<Props>();

// Chuyển đổi dữ liệu từ dạng `Recharts` sang `vue-chartjs`
const chartData = computed(() => ({
  labels: props.data.map((item) => item[props.xAxis]),
  datasets: [
    {
      label: props.dataKey,
      data: props.data.map((item) => item[props.dataKey]),
      borderColor: "#8884d8",
      backgroundColor: "rgba(136, 132, 216, 0.2)",
      borderWidth: 2,
      pointRadius: 5,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div style="height: 500px">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
