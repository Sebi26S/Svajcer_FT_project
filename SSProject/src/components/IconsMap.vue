<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IconsMap",
  props: {
    show: Boolean,
    location: String,
    mapUrl: String,
  },
  watch: {
    show(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },

})
</script>

<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">&times;</button>
      <h3>{{ location }} on Map</h3>
      <iframe
          :src="mapUrl"
          class="modal-map"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  box-sizing: border-box;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
  transition: color 0.3s;
}

.close-button:hover {
  background: none;
  color: red;
}

.modal-map {
  width: 100%;
  height: 50vh;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
}

@media (max-width: 600px) {
  .modal-content {
    width: 95%;
    padding: 15px;
  }

  .modal-map {
    height: 40vh;
  }
}

</style>