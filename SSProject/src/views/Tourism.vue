<script>
import { useTourismStore } from '../stores/tourism';
import TourismList from '../components/TourismList.vue';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'TourismPage',
  components: {
    TourismList,
  },
  data() {
    return {
      showFavourites: false,
    };
  },
  computed: {
    ...mapState(useTourismStore, [
      'places',
      'favourites',
      'filteredPlaces',
      'categories',
      'activeFilter',
    ]),
  },
  methods: {
    ...mapActions(useTourismStore, ['fetchPlaces', 'toggleFavourite', 'setFilter']),
    toggleShowFavourites() {
      this.showFavourites = !this.showFavourites;
    },
  },
  mounted() {
    this.fetchPlaces();
  },
};
</script>

<template>
  <div>
    <div class="centered">
      <h1>Tourism</h1>
      <p>Plan your trip with information on local accommodations, restaurants, and transportation.</p>
    </div>

    <div class="filters">
      <div class="filter-buttons">
        <button
            v-for="category in categories"
            :key="category"
            @click="setFilter(category)"
            :class="{ active: activeFilter === category }"
            class="filter-button"
        >
          {{ category === 'all' ? 'All Places' : category }}
        </button>
      </div>

      <button @click="toggleShowFavourites" class="favourite-button">
        {{ showFavourites ? 'Show All' : 'Show Favourites' }}
      </button>
    </div>

    <TourismList
        :places="showFavourites ? favourites : filteredPlaces"
        @toggle-favourite="toggleFavourite"
    />
  </div>
</template>

<style scoped>
.centered {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: black;
}

.centered h1 {
  font-size: 2.5rem;
}

.centered p {
  font-size: 1.2rem;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: dimgrey;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background-color: red;
}

.filter-button.active {
  background-color: #b20000;
  color: white;
  border-color: red;
}

.favourite-button{
  background-color: red;
  padding: 8px 16px;
  font-size: 14px;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
