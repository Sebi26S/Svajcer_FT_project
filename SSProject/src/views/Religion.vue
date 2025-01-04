<script lang="ts">
import {defineComponent} from 'vue'
import religionComp from "@/components/ReligionComp.vue";
import religionPieChart from "@/components/ReligionPieChart.vue";
import data from "@/Data/religion.json"

export default defineComponent({
  name: "Religion",
  components:{
    religionComp,
    religionPieChart,
  },
  data() {
    return {
      tableData: data,
    };
  },

})
</script>

<template>
  <div class="culture">
    <div class="cultureh">
      <h1>Liverpool Population by Religion</h1>
      <p>Explore the population distribution across various religions in Liverpool.</p>
    </div>
    <main class="culture-main">
      <h1 class="chart-title">Liverpool Religion and Population</h1>
      <religionComp :tableData="tableData" />
      <div class="chart-section">
        <h1 class="chart-title">Religion Distribution Chart</h1>
        <religionPieChart :tableData="tableData" />
      </div>
    </main>
  </div>


</template>

<style scoped>
.culture {
  color: #ffffff;
  padding: 20px 0;
  min-height: 100vh;
}

.cultureh {
  color: black;
  padding: 20px;
  text-align: center;
}

.cultureh h1 {
  font-size: 2.5rem;
  margin: 0;
}

.chart-title {
  color: black;
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
}

.culture-header p {
  font-size: 1.2rem;
  margin: 10px 0 0;
}

.culture-main {
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  border-radius: 10px;
}

.chart-section {
  margin-top: 3rem;
}


@media (max-width: 768px) {
  .culture-main {
    width: 95%;
  }

  .culture-header h1 {
    font-size: 2rem;
  }

  .culture-header p {
    font-size: 1rem;
  }

  .chart-title {
    font-size: 1.5rem;
  }
}

</style>