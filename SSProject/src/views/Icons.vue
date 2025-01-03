<script lang="ts">
import {defineComponent} from 'vue'
import iconscomp from "@/components/Iconscomp.vue";
import iconsdata from "../Data/icons.json"

export default defineComponent({
  name: "Icons",
  components: {
    iconscomp,
  },
  data(){
    return{
      icons: iconsdata.icons,
    };
  }
})
</script>

<template>
<div class ="icons">
  <header class="icons-header">
    <h1>Icons of Liverpool</h1>
    <p>Discover the people and places that define Liverpool's legacy.</p>
  </header>
  <main class="icons-main">
    <iconscomp :icons="icons" />
  </main>

</div>
</template>

<style scoped>
.icons {
  color: black;
  padding: 20px 0;
}

.icons-header {
  color: black;
  padding: 20px;
  text-align: center;
}

.icons-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.icons-header p {
  font-size: 1.2rem;
  margin: 10px 0 0;
}

.icons-main {
  margin: 0 auto;
  width: 40%;
  padding: 20px;
}



@media (max-width: 768px) {
  .icons-main {
    width: 90%;
  }
}

</style>