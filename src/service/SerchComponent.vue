<script>
    export default {
        components: 'SearchComponent',
        data() {
            return {
                text: "",
            };
        },

        
        async mounted() {
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${this.text}&count=1`;
            console.log(url);
            
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                this.data = result;
                console.log(  result);
                
            } catch (err) {
                console.error('There was an error!', err);
            }
        }
    }

</script>

<template>
    <input type="text" placeholder="Search" v-model="text">
    <button @click="mounted">Search</button>
    
</template>