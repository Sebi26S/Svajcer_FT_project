<script lang="ts">
import {defineComponent} from 'vue'
import HomeDiscover from "@/components/HomeDiscover.vue";
import HomeWeather from "@/components/HomeWeather.vue";

export default defineComponent({
  name: "Home",
  components:{
    HomeWeather,
    HomeDiscover
  }
})
</script>

<template>
<div class="homepage">
  <header>
    <h1>Welcome to Liverpool</h1>
    <p>Discover the history, religion, and the iconic people of Liverpool</p>
  </header>
  <HomeDiscover/>
  <HomeWeather/>
</div>

</template>

<style scoped>
.homepage h1{
  text-align: center;
  color: black;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.homepage p{
  font-size: 1.2rem;
  text-align: center;
  color: black;
}

</style>