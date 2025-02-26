<script lang="ts">
import LocationComponent from '../service/LocationComponent.vue';

interface WeeklyWeatherData {
    daily: {
        time: string[];
        temperature_2m_max: number[];
    };
    daily_units: {
        temperature_2m_min: string;
    };
}

export default {
    components: {
        LocationComponent,
    },
    data() {
        return {
            data: null as WeeklyWeatherData | null,
        };
    },
    async mounted() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=55.3751&longitude=13.1569&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto';
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
    <div class="daily-card" v-if="data">
        <h2>Weekly Weather</h2>
        <LocationComponent />
        <ul>
            <div>
                <li v-for="day of data.daily.time" >
                    <h3>{{day}}</h3>
                </li>
            </div>
            <div>
                <li v-for="temp of data.daily.temperature_2m_max">
                    <h3>{{temp}} {{data.daily_units.temperature_2m_min}}</h3>
                </li>
            </div>
        </ul>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template> 

<style scoped>
    .daily-card {
        border: 5px solid yellow;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 2rem;
        text-align: center;
        min-width: 400px;
        height: 450px;
        text-align: center;
    }
    h2 {
        font-size: 3rem;
    }
    h3
    {
        font-size: 1.5rem;
    }
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        gap: 20px;
        justify-content: center;
    }
</style>