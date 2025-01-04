<script>
import {defineComponent} from 'vue'
import {Pie} from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: "ReligionPieChart",
  components: {
    Pie
  },
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loaded: false,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#ffffff',
              padding: 20,
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value * 100) / total).toFixed(1);
                return `${label}: ${value.toLocaleString()} (${percentage}%)`;
              }
            }
          }
        }
      }
    }
  },
  computed: {
    chartDataFormatted() {
      const filteredData = this.tableData.filter(
          item => !['Not stated', 'Inadequately described'].includes(item.religion)
      );

      return {
        labels: filteredData.map(item => item.religion),
        datasets: [{
          backgroundColor: [
            '#e74c3c',
            '#3498db',
            '#2ecc71',
            '#f1c40f',
            '#9b59b6',
            '#e67e22',
            '#1abc9c',
            '#34495e'
          ],
          data: filteredData.map(item => item.population)
        }]
      }
    }
  },
  watch: {
    tableData: {
      immediate: true,
      handler() {
        this.loaded = true;
      }
    }
  }

})
</script>

<template>
  <div class="chart-wrapper">
    <Pie
        v-if="loaded"
        :data="chartDataFormatted"
        :options="chartOptions"
    />
  </div>

</template>

<style scoped>
.chart-wrapper {
  position: relative;
  height: 600px;
  background-color: #4d4d4d;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>