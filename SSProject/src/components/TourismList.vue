<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TourismList",
  props: {
    places: {
      type: Array,
      required: true,
    },
  },
  emits: ['toggle-favourite'],
  data() {
    return {
      showModal: false,
      modalPlace: {},
    };
  },
  methods: {
    openModal(place) {
      this.modalPlace = place;
      this.showModal = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.showModal = false;
      this.modalPlace = {};
      document.body.style.overflow = 'auto';
    },
  },

})
</script>

<template>
  <div class="tourism-grid">
    <div class="tourism-card" v-for="place in places" :key="place.name">
      <div class="image-container">
        <img :src="place.image" :alt="place.name" class="tourism-image" />
        <button
            @click="$emit('toggle-favourite', place.name)"
            class="heart-button"
            :class="{ 'is-favourite': place.isFavourite }"
            :disabled="showModal"
        >
          ♥
        </button>
      </div>
      <div class="tourism-info">
        <h3>{{ place.name }}</h3>
        <p>{{ place.category }}</p>
        <p><strong>Price:</strong> {{ place.price }}</p>
        <button @click="openModal(place)" :disabled="showModal">
          Show Description
        </button>
      </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h3>{{ modalPlace.name }}</h3>
        <img :src="modalPlace.image" :alt="modalPlace.name" class="modal-image" />
        <p><strong>Category:</strong> {{ modalPlace.category }}</p>
        <p><strong>Price:</strong> {{ modalPlace.price }}</p>
        <p>{{ modalPlace.description }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.tourism-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  position: relative;
}

@media (max-width: 768px) {
  .tourism-grid {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }
}

@media (max-width: 480px) {
  .tourism-grid {
    grid-template-columns: 1fr;
    width: 90%;
    padding: 10px;
  }
}

.tourism-card {
  border: 5px solid grey;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: dimgrey;
}

.image-container {
  position: relative;
  width: 100%;
}

.tourism-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.tourism-info {
  padding: 20px;
}

.tourism-info h3 {
  margin: 0 0 15px;
  font-size: 20px;
  color: black;
}

.tourism-info p {
  margin: 5px 0;
  font-size: 18px;
  color: black;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #b20000;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:not(:disabled):hover {
  background-color: red;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.heart-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 40px;
  padding: 5px;
  margin: 0;
  color: whitesmoke;
  transition: all 0.3s ease;
  z-index: 1;
}

.heart-button:not(:disabled):hover {
  background: none;
  color: red;
  transform: scale(1.1);
}

.heart-button.is-favourite {
  color: red;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: darkgrey;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
}

.modal-image {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: black;
}

.close-button:hover {
  color: red;
}

</style>