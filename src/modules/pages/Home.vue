<template>
  <div>
    <section class="section-home d-flex flex-column justify-content-start">
      <div class="col-4 ms-5 h-75 d-flex justify-content-center align-items-center">
        <input type="search" placeholder="Busca un servicio" class="form-control form-control-sm px-3 py-2">
      </div>
    </section>
    <div class="other-section" style="height: 100vh;">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>


  .section-home{
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../../../src/assets/home1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
  }

  .section-home::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 40vh;
    bottom: 0;
    background: url(../../../src/assets/wave.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .other-section{
    background-color: var(--secondary);
  }
</style>