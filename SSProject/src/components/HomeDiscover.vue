<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HomeDiscover",
  data() {
    return {
      topics: [
        {
          title: "Tourism",
          description: "Plan your trip and explore Liverpool's hidden gems.",
          image: new URL('@/assets/images/tourism.jpg', import.meta.url).href,
          link: "/tourism",
        },
        {
          title: "Religion",
          description: "Experience Liverpool's vibrant music and arts scene.",
          image: new URL('@/assets/images/religions.jpg', import.meta.url).href,
          link: "/religion",
        },
        {
          title: "History",
          description: "Dive into 800 years of rich history.",
          image: new URL('@/assets/images/history.jpg', import.meta.url).href,
          link: "/history",
        },
        {
          title: "Icons",
          description: "Learn about the legends who defined Liverpool.",
          image: new URL('@/assets/images/icons.jpg', import.meta.url).href,
          link: "/icons",
        },
      ],
    };
  },
  methods: {
    navigateTo(link: string) {
      this.$router.push(link);
    },
  },
})
</script>

<template>
  <div class="discover">
    <h2>Discover Liverpool</h2>
    <div class="discover-cards">
      <div class="discover-card" v-for="topic in topics" :key="topic.title">
        <img :src="topic.image" :alt="topic.title" class="card-image" />
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>
        <button @click="navigateTo(topic.link)">Learn More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.discover {
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.discover h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;
}

.discover-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
}

.discover-card {
  background: dimgrey;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
}

.card-image {
  width: 330px;
  height: 330px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.discover-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: black;
}

.discover-card p {
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: black;
}

.discover-card button {
  background-color: red;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
}

.discover-card button:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .discover {
    width: 90%;
  }

  .discover-cards {
    grid-template-columns: 1fr;
  }

  .card-image {
    width: 300px;
    height: 300px;
  }

  .discover-card {
    max-width: 350px;
  }
}
</style>
