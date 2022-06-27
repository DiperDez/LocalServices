<template lang="">
    <div>
        <h1 class="text-primary">AboutPage</h1>
        
    </div>
    
</template>

<script>
    export default{
        beforeCreate(){
            console.log('beforeCreate');
        },
        created(){
            console.log('created');
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted(){
            console.log('mounted');
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        updated(){
            console.log('updated');
        },
        activated(){
            console.log('activated');
        },
        deactivated(){
            console.log('deactivated');
        },
        beforeUnmount(){
            console.log('beforeUnmount');
        },
        unmounted(){
            console.log('unmounted');
        },
        errorCaptured(){
            console.log('errorCaptured');
        },
        renderTracked(){
            console.log('renderTracked');
        },
        renderTriggered(){
            console.log('renderTriggered');
        },
    }
</script>

<style lang="">

    
</style>