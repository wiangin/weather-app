
<script setup lang="ts">
    import WeatherComponent from '../service/WeatherComponent.vue';
    
    
    // const weather = ref<WeatherData | null>(null);

    // onMounted(async () => {
    //     try {
    //         weather.value = await getWeather();
    //         if (weather.value) {
    //             console.log(weather.value.current);
    //             return weather.value.current;
    //         }
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // });
    
</script>

<template>
    <p>Här min väder app</p>
    <WeatherComponent />
    
</template>