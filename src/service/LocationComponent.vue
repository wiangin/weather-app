<script lang="ts">
interface LocationData {
    results: {
        name: string;
    }[];
}
    export default {
        compotnets: 'LocationComponent',
        data() {
            return {
                data: null as LocationData | null,
            };
        },
        async mounted() {
            const url = 'https://geocoding-api.open-meteo.com/v1/search?name=trelleborg&count=10&language=en&format=json';
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                this.data = result as LocationData;
    
            } catch (err) {
                console.error('There was an error!', err);
            }
        }
    };
</script>

<template>
    <div v-if="data">
        <h2>{{ data.results[0].name }}</h2>
    </div>
</template>