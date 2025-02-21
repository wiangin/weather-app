<script>
export default {
    data() {
        return {
            data: null,
        };
    },
    async mounted() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature&timezone=Europe%2FBerlin';
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
    <div v-if="data">
      <p>Temperature: {{ data.current.temperature_2m }}</p>
      <p>Apparent Temperature: {{ data.current.apparent_temperature }}</p>  
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
</template>