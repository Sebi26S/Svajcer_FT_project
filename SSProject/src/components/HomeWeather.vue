<script lang="ts">
import { defineComponent } from 'vue';

interface WeatherData {
  temperature: number | null;
  feelsLike: number | null;
  condition: string;
  humidity: number | null;
  windSpeed: number | null;
  icon: string | null;
}

export default defineComponent({
  name: "HomeWeather",
  data() {
    return {
      weather: {
        temperature: null,
        feelsLike: null,
        condition: '',
        humidity: null,
        windSpeed: null,
        icon: null
      } as WeatherData,
      loading: true,
      error: null as string | null,
      API_KEY: '97dd8af9798d48601ffcb489ca1d3a03',
      city: 'Liverpool,UK'
    };
  },
  async created() {
    try {
      await this.fetchWeatherData();
    } catch (err) {
      this.error = 'Failed to load weather data';
      console.error('Weather data error:', err);
    }
  },
  methods: {
    async fetchWeatherData() {
      try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Weather data not available');
        }

        const data = await response.json();

        this.weather = {
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          condition:
              data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed * 3.6,
          icon: data.weather[0].icon
        };
      } catch (err) {
        throw err;
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>


<template>
  <div class="weather">
    <div class="weather-container">
      <h2>Liverpool Weather</h2>
      <div v-if="loading" class="loading">
        Loading weather data...
      </div>
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      <div v-else class="weather-info">
        <div class="weather-icon" v-if="weather.icon">
          <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" :alt="weather.condition">
        </div>
        <div class="temperature">
          <span class="temp-value">{{ Math.round(weather.temperature ?? 0) }}°C</span>
          <span class="condition">{{ weather.condition }}</span>
        </div>
        <div class="details">
          <div class="detail-item">
            <span class="label">Feels like:</span>
            <span class="value">{{ Math.round(weather.feelsLike ?? 0) }}°C</span>
          </div>
          <div class="detail-item">
            <span class="label">Humidity:</span>
            <span class="value">{{ weather.humidity }}%</span>
          </div>
          <div class="detail-item">
            <span class="label">Wind:</span>
            <span class="value">{{ Math.round(weather.windSpeed ?? 0) }} km/h</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.weather {
  margin: 2rem auto;
  max-width: 300px;
}

.weather-container {
  background: linear-gradient(to bottom right, #4a90e2, #87ceeb);
  border-radius: 15px;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-align: center;
}

.loading, .error {
  text-align: center;
  padding: 1rem;
}

.weather-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.weather-icon {
  text-align: center;
}

.weather-icon img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.temperature {
  text-align: center;
}

.temp-value {
  font-size: 2.5rem;
  font-weight: bold;
}

.condition {
  display: block;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.value {
  font-weight: bold;
}

</style>