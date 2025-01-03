<script lang="ts">
import {defineComponent} from 'vue'
import IconsMap from "@/components/IconsMap.vue";

interface Icon {
  name: string;
  description: string;
  location: string;
  image: string;
  mapEmbed: string;
}


export default defineComponent({
  name: "Iconscomp",
  components: {
    IconsMap
  },
  props: {
    icons: {
      type: Array as () => Icon[],
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      selectedLocation: '',
      selectedMapUrl: ''
    };
  },
  methods: {
    openModal(icon: Icon) {
      this.selectedLocation = icon.location;
      this.selectedMapUrl = icon.mapEmbed;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
})
</script>

<template>
  <section class="icons">
    <h2>Famous People</h2>
    <div class="icons-container">
      <div class="icon-card" v-for="icon in icons" :key="icon.name">
        <img
            :src="icon.image"
            :alt="icon.name"
            class="icon-image"
            @click="openModal(icon)"
        />
        <div class="icon-info">
          <h3>{{ icon.name }}</h3>
          <p>{{ icon.description }}</p>
          <p><strong>Related Location:</strong> {{ icon.location }}</p>
        </div>
      </div>
    </div>
    <IconsMap
        :show="showModal"
        :location="selectedLocation"
        :mapUrl="selectedMapUrl"
        @close="closeModal"
    />
  </section>

</template>

<style scoped>
.icons {
  margin-bottom: 40px;
}

.icon-card {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: dimgrey;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.icon-image:hover {
  transform: scale(1.05);
}

.icon-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: black;
}

</style>