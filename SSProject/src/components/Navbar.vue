<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
})
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">Liverpool City</router-link>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">☰</button>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/tourism" class="nav-link">Tourism</router-link></li>
        <li><router-link to="/religion" class="nav-link">Religion</router-link></li>
        <li><router-link to="/history" class="nav-link">History</router-link></li>
        <li><router-link to="/icons" class="nav-link">Icons</router-link></li>
      </ul>
    </div>
  </nav>

</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  max-width: none;
  padding: 0 2rem;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: red;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  transition: max-height 0.3s ease-in-out;
}

.nav-links .nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s;
}

.nav-links .nav-link:hover {
  color: red;
}

.nav-links .router-link-active {
  color: red;
  font-weight: bold;
}


@media (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
    transform: none;
  }

  .menu-toggle {
    display: block;
  }



  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #333;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0.5rem 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    text-align: center;
    padding: 0.5rem 0;
  }
}

</style>