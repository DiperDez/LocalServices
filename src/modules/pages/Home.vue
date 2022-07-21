<template>
  <div class="row m-0 p-0">
    <section class="col-12 section-home d-flex flex-column justify-content-start align-items-center">
      <div class="col-12 h-100 px-2 d-flex flex-column justify-content-end align-items-center flex-wrap">
         <h1 class="display-2 text-white fw-bold text-uppercase text-center mb-5">Encuentra tu mejor opción.</h1>
      </div>
      <Search/>
    </section>
    <section class="col-12 section-register d-flex justify-content-center align-items-center flex-wrap my-5">
      <div class="col-11 d-flex justify-content-center flex-wrap">
        <div class="col-12 col-md-6 mb-4">
          <img src="../../../src/assets/personal_info.svg" alt="personal info" class="w-100">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
          <h2 class="text-dark text-uppercase mb-5">Consulta un servicio <br> ó <br> afilia tú servicio a nuesta plataforma</h2>
          <h3 class="fw-light mb-2">Puedes escoger registrarte cómo:</h3>
          <div class="mt-3 d-flex justify-content-center gap-4">
            <button class="btn btn-lg btn-primary rounded-2">Trabajador</button>
            <button class="btn btn-lg btn-outline-primary rounded-2">Usuario común</button>
          </div>
        </div>
      </div>
    </section>
    <section class="col-12 section-benefits d-flex justify-content-center align-content-center my-5 py-5">
      <div class="col-12 d-flex justify-content-center">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h2 class="text-uppercase text-center fw-bold mb-5">Beneficios con <span style="color: var(--primary);">Local Services</span></h2>
          <div class="container-benefits d-flex justify-content-center flex-wrap gap-5">
            <div class="col-12 col-md-4 col-lg-4 col-xl-3 box-benefits d-flex flex-column justify-content-center align-items-center text-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 class="mb-3">Seguridad</h2>
              <p class="fw-light m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores magni sunt corrupti neque deleniti veritatis aliquam aliquid nam aspernatur.</p>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-xl-3 box-benefits d-flex flex-column justify-content-center align-items-center text-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h2 class="mb-3">Soporte</h2>
              <p class="fw-light m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores magni sunt corrupti neque deleniti veritatis aliquam aliquid nam aspernatur.</p>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-xl-3 box-benefits d-flex flex-column justify-content-center align-items-center text-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <h2 class="mb-3">Sistema de valoración</h2>
              <p class="fw-light m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores magni sunt corrupti neque deleniti veritatis aliquam aliquid nam aspernatur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Search from '../shared/components/Search';
  
  export default {
    data(){
      return{

      }
    },
    components:{
      Search
    }
  }
</script>

<style scoped>
  .section-register,
  .section-benefits{
    height: 50rem;
  }

  .section-home{
    height: 70vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../../../src/assets/backgrounds/home-background.jpg);
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
  }

 

 
  
  .box-benefits > svg{
    width: 65px;
    color: var(--primary);
    
  }
  
  .box-benefits > p{
    font-size: 18px;
  }
</style>