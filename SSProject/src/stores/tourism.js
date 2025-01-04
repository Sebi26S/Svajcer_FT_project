import { defineStore } from 'pinia';
import axios from 'axios';

const STORAGE_KEY = 'tourism_favorites';


export const useTourismStore = defineStore('tourism', {
    state: () => ({
        places: [],
        activeFilter: 'all',
        initialized: false
    }),

    getters: {
        favourites: (state) => state.places.filter(place => place.isFavourite),
        categories: (state) => {
            const categories = new Set();
            state.places.forEach(place => {
                place.category.split(', ').forEach(category => {
                    categories.add(category);
                });
            });
            return ['all', ...Array.from(categories)];
        },
        filteredPlaces: (state) => {
            if (state.activeFilter === 'all') {
                return state.places;
            }
            return state.places.filter(place =>
                place.category.includes(state.activeFilter)
            );
        }
    },

    actions: {
        loadFavoritesFromStorage() {
            try {
                const savedFavorites = localStorage.getItem(STORAGE_KEY);
                if (savedFavorites) {
                    return new Set(JSON.parse(savedFavorites));
                }
            } catch (error) {
                console.error('Error loading favorites from localStorage:', error);
            }
            return new Set();
        },

        saveFavoritesToStorage() {
            try {
                const favoritesNames = this.favourites.map(place => place.name);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesNames));
            } catch (error) {
                console.error('Error saving favorites to localStorage:', error);
            }
        },

        async fetchPlaces() {
            if (this.initialized) return;

            try {
                const response = await axios.get('/data/tourism.json');
                const favorites = this.loadFavoritesFromStorage();

                this.places = response.data.map(place => ({
                    ...place,
                    isFavourite: favorites.has(place.name)
                }));

                this.initialized = true;
            } catch (error) {
                console.error('Error fetching tourism data:', error);
            }
        },

        toggleFavourite(placeName) {
            const index = this.places.findIndex(p => p.name === placeName);
            if (index !== -1) {
                this.places = [
                    ...this.places.slice(0, index),
                    {
                        ...this.places[index],
                        isFavourite: !this.places[index].isFavourite
                    },
                    ...this.places.slice(index + 1)
                ];

                this.saveFavoritesToStorage();
            }
        },

        setFilter(category) {
            this.activeFilter = category;
        }
    }
});
