
<script setup lang="ts">
    import WeatherComponent from '../service/WeatherComponent.vue';    
</script>

<template>
    <div class="main"> 
        <h1>Weather Today</h1>
        <WeatherComponent />
    </div>
</template>

<style scoped>
    .main {
        border: 2px solid white;
        padding: 40px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;

      }

      h1 {
        font-size: 5rem;
      }
</style>