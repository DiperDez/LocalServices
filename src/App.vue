<template v-on="resize">
  <div class="container-fluid m-0 p-0">
    <Navbar class="position-fixed"/>
    <routerView class="routerView"/>
    <Footer/>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'


export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */'@/modules/shared/components/Navbar')),
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Footer" */'@/modules/shared/components/Footer'))
  }
}

</script>

<style>

  :root{
    --primary: #0076FE;
    --dark: #2a2a2a;
    --dark-50: rgba(0,0,0,0.5);
    --white: #FFFFFF;
    --white-50: rgba(255, 255, 255, 0.7);
    --secondary: #ced4da;
    --danger: #EF476F;
    --success: #06D6A0; 
    --orange: #ff9100; 
    --fontPrimary: 'Roboto Condensed', sans-serif;
    --fontSecondary: 'Comfortaa', cursive;
    --fontLight: 300;
    --fontRegular: 400;
    --fontBold: 700;
  }

  /* Text Colors */
  .text-danger-local{ color: var(--danger); }

  /* Background colors */  
  .bg-primary-local{ background-color: var(--primary); }
  .bg-orange-local{ background-color: var(--orange); }

  /* Border colors */
  .border-2px{ border-width: 2px; }
  .border-success-local{ border-color: var(--success); }
  .border-danger-local{ border-color: var(--danger); }



  *, *::after, *::before{
    box-sizing: inherit;
  }

  html{
    box-sizing: border-box;
  }

  body{
    font-family: var(--fontPrimary) !important;
    background-color: var(--secondary);
  }

  /* Cambiamos el fondo cuando esté en active o hover */
  body::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  body::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  body::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  body::-webkit-scrollbar-thumb:active {
      background-color: #999999;
  }

  body::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
  }

  /* Cambiamos el fondo cuando esté en active o hover */
  body::-webkit-scrollbar-track:hover,
  body::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }

  .form-control{
    font-family: var(--fontPrimary);
    font-weight: var(--fontLight);
  }

  /* Buttons */
  .btn-primary-outline-local{
    border: 2.5px solid var(--primary);
    font-weight: 400;
    font-size: 16px;
    transition: all ease-in .5s;
  }

  .btn-primary-outline-local:hover{
    border: 2.5px solid var(--primary);
    background-color: var(--primary);
    color: var(--white) !important; 
    transition: all ease-out .5s;
    transform: translateY(-1px);
  }

  .btn-local{
    color: var(--white);
    border: none;
    border-radius: 5px;
    transition: background ease-out .2s;
  }

  .btn-local:disabled{
    cursor: not-allowed;
    background-color: var(--secondary);
    color: var(--dark-50);
  }

  .btn-local:hover{ transition: background ease-in .2s; }

  .btn-primary-local{ background-color: var(--primary); }
  .btn-orange-local{ background-color: var(--orange); }


  .btn-primary-local:enabled:hover{ background-color: #016eeb; }
  .btn-orange-local:hover{ background-color: #e78401; }


</style>

 <!-- <button
                class="btn-orange-local btn-local w-25 py-1"
                @click.prevent="validarInputs"
                v-show="isState1"s
              >
                Anterior
              </button> -->
