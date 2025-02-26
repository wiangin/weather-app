


<script lang="ts">
import LocationComponent from './LocationComponent.vue';

interface WeatherData {
    current: {
        temperature_2m: number;
    };
    current_units: {
        temperature_2m: string;
    };
}

export default {
    components: {
        LocationComponent,
    },
    data() {
        return {
            data: null as WeatherData | null,
        };
    },
    async mounted() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=62&longitude=15&current=temperature_2m';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            this.data = result;

        } catch (err) {
            console.error('There was an error!', err);
        }
    }
};
</script>

<template>
    <div class="today-card" v-if="data">
        <h2>Weather Today</h2>
        <LocationComponent />
        <h2>{{ data.current.temperature_2m }} {{data.current_units.temperature_2m}}</h2>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
</template>

<style scoped>
    .today-card {
        border: 5px solid yellow;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 2rem;
        text-align: center;
        min-width: 400px;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2 {
        font-size: 3rem;
        margin-bottom: 20px;
      }
</style>
