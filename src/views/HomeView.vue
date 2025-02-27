
<script setup lang="ts">
    import WeatherComponent from '../service/WeatherComponent.vue';
    import WeeklyWeatherComponent  from '../service/WeeklyWeatherComponent.vue';
    import SerchComponent from '@/service/SerchComponent.vue';
</script>

<template>
    <div class="main"> 
        <div>
            <WeatherComponent/>
        </div>
 
        <div>
            <WeeklyWeatherComponent/>
        </div>

        <SerchComponent/>
   

    </div>
    
</template>

<style scoped>
    .main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: yellow;
        height: 100vh;
        gap: 2rem;
      }

      h1 {
        font-size: 5rem;
      }
</style>