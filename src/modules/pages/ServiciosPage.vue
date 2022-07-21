<template>
  <div class="row m-0 p-0">
     <section class="col-12 section-services d-flex flex-column justify-content-start align-items-center">
      <div class="col-12 h-100 px-2 d-flex flex-column justify-content-end align-items-center flex-wrap">
         <h1 class="display-1 text-white fw-bold text-uppercase text-center mb-5">Encuentra tu mejor opción.</h1>
      </div>
      <Search/>
    </section>
    <section class="col-12 section-servicesCards d-flex justify-content-center align-items-center flex-wrap">
      <div class="col-12 d-flex justify-content-center align-items-baseline gap-5 flex-wrap">
        <div class="col-3 cardServices bg-white rounded-2 overflow-hidden d-flex justify-content-center align-items-center flex-wrap">
         <div class="cardServices-header">
           <img src="../../assets/Images/panaderia.jpeg" alt="carpinteria" class="w-100 h-100">
           <h3 class="titulo-servicio fw-light text-uppercase">Los dos hermanos</h3>
         </div>
         <div class="cardServices-body p-3 pb-0 w-100">
           <h6>Ubicación: <span class="text-secondary">Calle Nezahualcoyotl - Estado de México - CDMX - C.P. 43000 </span></h6>  
           <h6>Categoría: <span class="text-secondary">Carpinteria</span></h6>  
           <h6>Teléfono: <span class="text-secondary">7713400653</span></h6>  
           <h6>Horario: <span class="text-secondary">7:00 A.M - 16:00 P.M</span></h6>  
         </div>
         <hr class="w-100 mx-3">
         <div class="cardServices-footer p-3 pt-0 w-100 d-flex justify-content-end align-items-center gap-3">
           <button class="btn btn-orange-local btn-sm text-white">Añadir a favoritos</button>
           <button class="btn btn-primary-local btn-sm text-white">Más información</button>
         </div>
        </div>
        <div class="col-3 cardServices bg-white rounded-2 overflow-hidden d-flex justify-content-center align-items-center flex-wrap">
          <div class="cardServices-header">
            <img src="../../assets/Images/carpinteria.jpg" alt="carpinteria" class="w-100 h-100">
            <h3 class="titulo-servicio fw-light text-uppercase">Los dos hermanos</h3>
          </div>
          <div class="cardServices-body p-3 pb-0 w-100">
            <h6>Ubicación: <span class="text-secondary">Calle Nezahualcoyotl - Estado de México - CDMX</span></h6>  
            <h6>Categoría: <span class="text-secondary">Carpinteria</span></h6>  
            <h6>Teléfono: <span class="text-secondary">7713400653</span></h6>  
            <h6>Horario: <span class="text-secondary">7:00 A.M - 16:00 P.M</span></h6>  
          </div>
          <hr class="w-100 mx-3">
          <div class="cardServices-footer p-3 pt-0 w-100 d-flex justify-content-end align-items-center gap-3">
            <button class="btn btn-orange-local btn-sm text-white">Añadir a favoritos</button>
            <button class="btn btn-primary-local btn-sm text-white">Más información</button>
          </div>
        </div>
        <div class="col-3 cardServices bg-white rounded-2 overflow-hidden d-flex justify-content-center align-items-center flex-wrap">
         <div class="cardServices-header">
           <img src="../../assets/Images/carpinteria.jpg" alt="carpinteria" class="w-100 h-100">
           <h3 class="titulo-servicio fw-light text-uppercase">Los dos hermanos</h3>
         </div>
         <div class="cardServices-body p-3 pb-0 w-100">
           <h6>Ubicación: <span class="text-secondary">Calle Nezahualcoyotl - Estado de México - CDMX</span></h6>  
           <h6>Categoría: <span class="text-secondary">Carpinteria</span></h6>  
           <h6>Teléfono: <span class="text-secondary">7713400653</span></h6>  
           <h6>Horario: <span class="text-secondary">7:00 A.M - 16:00 P.M</span></h6>  
         </div>
         <hr class="w-100 mx-3">
         <div class="cardServices-footer p-3 pt-0 w-100 d-flex justify-content-end align-items-center gap-3">
           <button class="btn btn-orange-local btn-sm text-white">Añadir a favoritos</button>
           <button class="btn btn-primary-local btn-sm text-white">Más información</button>
         </div>
        </div>
        <div class="col-3 cardServices bg-white rounded-2 overflow-hidden d-flex justify-content-center align-items-center flex-wrap">
          <div class="cardServices-header">
            <img src="../../assets/Images/carpinteria.jpg" alt="carpinteria" class="w-100 h-100">
            <h3 class="titulo-servicio fw-light text-uppercase">Los dos hermanos</h3>
          </div>
          <div class="cardServices-body p-3 pb-0 w-100">
            <h6>Ubicación: <span class="text-secondary">Calle Nezahualcoyotl - Estado de México - CDMX</span></h6>  
            <h6>Categoría: <span class="text-secondary">Carpinteria</span></h6>  
            <h6>Teléfono: <span class="text-secondary">7713400653</span></h6>  
            <h6>Horario: <span class="text-secondary">7:00 A.M - 16:00 P.M</span></h6>  
          </div>
          <hr class="w-100 mx-3">
          <div class="cardServices-footer p-3 pt-0 w-100 d-flex justify-content-end align-items-center gap-3">
            <button class="btn btn-orange-local btn-sm text-white">Añadir a favoritos</button>
            <button class="btn btn-primary-local btn-sm text-white">Más información</button>
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
      srcImage: 'x'
    }
  },
  components: {
    Search
  }
}
</script>

<style>
  .section-services{
    height: 70vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../../../src/assets/backgrounds/services.jpg);
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
  }

  hr{
    color: var(--dark-50);
  }

  .section-servicesCards{
    margin: 10rem 0;
  }

  .cardServices{
    box-shadow: 0px 0px 15px #e5e5e5;
    transition: all ease-out .4s;
  }

  .cardServices:hover{
    box-shadow: 2px 2px 25px #e5e5e5;
    transition: all ease-out .6s;
  }

  .cardServices-header{
    width: 100%;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardServices-header::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    transition: all ease-in .6s;
  }

  .cardServices:hover .cardServices-header::before{
    top: -300px;
    transition: all ease-out .6s;
  }

  .cardServices:hover > .cardServices-header > .titulo-servicio{
    transform: translateY(-500px);
    transition: all ease-out .6s;
  }

  .cardServices-header > .titulo-servicio{
    position: absolute;
    color: var(--white);
    transition: all ease-out .6s;
    transform: translateY(0px);
  }

</style>
