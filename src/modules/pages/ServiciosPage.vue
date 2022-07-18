<template>
  <div class="row m-0 p-0">
     <section class="col-12 section-services d-flex flex-column justify-content-start align-items-center">
      <div class="col-12 h-100 px-2 d-flex flex-column justify-content-end align-items-center flex-wrap">
         <h1 class="display-1 text-white fw-bold text-uppercase text-center mb-5">Encuentra tu mejor opción.</h1>
      </div>
      <Search/>
    </section>
    <section class="col-12 section-servicesCards d-flex justify-content-center align-items-center flex-wrap">
      <div class="col-12 d-flex justify-content-center align-items-baseline gap-5 vh-100">
        <div class="col-3 card-services col-md-5 bg-white rounded-2 overflow-hidden">
          <div class="card-img">
            <img src="../../assets/Images/carpinteria.jpg" alt="Servicio" class="w-100 h-100">
            <h1 class="text-uppercase fw-light text-center text-white">Carpinteria Lupita</h1>
          </div>
          <div class="card-body">
            <h3>Info</h3>
            <h4>info</h4>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-sm">Botón</button>
          </div>
        </div>
         <div class="col-3 card-services col-md-5 bg-white rounded-2 overflow-hidden">
          <div class="card-img">
            <img src="../../assets/Images/carpinteria.jpg" alt="Servicio" class="w-100 h-100">
          </div>
          <div class="card-body">
            <h3>Info</h3>
            <h4>info</h4>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-sm">Botón</button>
          </div>
        </div>
        <!-- <div class="col-3 bg-white rounded-2 shadow-sm overflow-hidden">
          <div class="card-img">
            <img src="../../assets/Images/carpinteria.jpg" alt="Servicio" class="w-100 h-100">
          </div>
          <div class="card-body">
            <h3>Info</h3>
            <h4>info</h4>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-sm">Botón</button>
          </div>
        </div>
        <div class="col-3 bg-white rounded-2 shadow-sm overflow-hidden">
          <div class="card-img">
            <img src="../../assets/Images/carpinteria.jpg" alt="Servicio" class="w-100 h-100">
          </div>
          <div class="card-body">
            <h3>Info</h3>
            <h4>info</h4>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-sm">Botón</button>
          </div>
        </div> -->
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

  .section-servicesCards{
    margin: 10rem 0;
  }

  .card-services{
    transition: all ease-out .7s;
  }

  .card-services:hover{
    transition: all ease-in .5s;
    box-shadow: 2px 2px 10px #ced4da;
  }
  
  .card-services > .card-img{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-out .5s;
  }

  .card-services:hover > .card-img::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
  }

  .card-services > .card-img > h1{
    position: absolute;
    opacity: 0;
  }  

  .card-services:hover .card-img > h1{
    opacity: 1;
    transition: all ease-out .5s;
  }

 
</style>