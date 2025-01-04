<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ReligionComp",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      return this.tableData.reduce((sum, item) => sum + item.population, 0);
    },
  },

})
</script>

<template>
  <div class="culture-table">
    <table>
      <thead>
      <tr>
        <th>Religion</th>
        <th>Population</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.religion }}</td>
        <td>{{ item.population }}</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>{{ total }}</strong></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
.culture-table {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  width: 60%;
  text-align: left;
  background-color: #4d4d4d;
  border-radius: 8px;
  padding: 20px;
}

h1 {
  text-align: center;
  color: black;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #e74c3c;
  color: white;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
  color: #333;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

td, th {
  text-align: left;
}

tfoot {
  font-weight: bold;
}

</style>