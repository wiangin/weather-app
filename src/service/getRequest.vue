<script>
    import { ref, onMounted } from 'vue';
    const data = ref(null);
    const error = ref(null);
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=dmi_seamless';

    console.log( url );
    
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data.value = await response.json();
            console.log( data.value );
            
        } catch (err) {
            error.value = err;
        }
}; 

fetchData();
onMounted( fetchData );

</script>

 <template>

 </template>