<script lang="ts">
import {defineComponent} from 'vue'
import data from '../Data/History.json'

export default defineComponent({
  name: "History",
  data(){
    return{
      introduction: data.introduction,
      historicalEras: data.historicalEras
    };
  }
})
</script>

<template>
  <div class="history">
    <h1>History of Liverpool</h1>

    <div class="intro-section">
      <p>{{ introduction }}</p>
    </div>

    <div class="timeline">
      <div v-for="era in historicalEras" :key="era.period" class="era-section">
        <h2>{{ era.period }}</h2>
        <div class="era-content">
          <p>{{ era.description }}</p>
        </div>

        <div class="timeline-events">
          <div v-for="event in era.events" :key="event.year" class="timeline-event">
            <div class="year-marker">{{ event.year }}</div>
            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.history {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
}

h1 {
  text-align: center;
  color: black;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.intro-section {
  background-color: dimgrey;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
}
.intro-section p {
  color: whitesmoke;
}

.era-section {
  margin-bottom: 4rem;
}

.era-section h2 {
  color: black;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 0.5rem;
}

.era-content {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.era-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: black;
}

.timeline-events {
  border-left: 4px solid #e74c3c;
  margin-left: 2rem;
  padding-left: 2rem;
}

.timeline-event {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1rem;
}

.year-marker {
  position: absolute;
  left: -3.5rem;
  background-color: #e74c3c;
  color: black;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-weight: bold;
}

.event-content {
  background-color: dimgrey;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.event-content h3 {
  color: black;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.event-content p {
  color: black;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .era-content {
    flex-direction: column;
  }

  .timeline-events {
    margin-left: 1rem;
    padding-left: 1rem;
  }

  .year-marker {
    left: -2.5rem;
    font-size: 0.9rem;
  }
}

</style>