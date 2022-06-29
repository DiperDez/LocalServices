<template v-on="resize">
  <div class="container-fluid m-0 p-0">
    <Navbar/>
    
    <routerView/>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'


export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */'@/modules/shared/components/Navbar'))
  }
}

</script>

<style>

  :root{
    --primary: #0076FE;
    --dark: #2a2a2a;
    --dark-50: rgba(0,0,0,0.5);
    --white: #FFFFFF;
    --shadow: rgba(0,0,0,0.2);
    --secondary: #F9F9F9;
    --fontPrimary: 'Roboto Condensed', sans-serif;
    --fontSecondary: 'Comfortaa', cursive;
    --fontLight: 300;
    --fontRegular: 400;
    --fontBold: 700;
  }

  *, *::after, *::before{
    box-sizing: inherit;
  }

  html{
    box-sizing: border-box;
  }

  body{
    font-family: var(--fontPrimary) !important;
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
    font-family: var(--fontSecondary);
    font-weight: var(--fontLight);
  }

  /* Buttons */
  .btn-primary-blue{
    border: 2px solid var(--primary);
    color: var(--primary);
    font-weight: 400;
    font-size: 16px;
    transition: all ease-in .5s;
  }

  .btn-primary-blue:hover{
    border: 2px solid var(--primary);
    background-color: var(--primary);
    color: var(--white); 
    transition: all ease-out .5s;
    transform: translateY(-2px);
    box-shadow: 5px 5px 3px #0077fee3;
  }

  

</style>
