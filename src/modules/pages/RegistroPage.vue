<template>
  <div class="row m-0 bg-register">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-10 col-xl-7 bg-white rounded-1 shadow overflow-hidden d-flex flex-wrap">
        <div class="col-5 col-lg-6 col-xl-7 d-none d-lg-flex justify-content-center align-items-center">
          <img src="../../../src/assets/Logo/LocalServicesLogo.jpg" alt="logo" class="w-100">
        </div>
        <div class="col-12 col-lg-6 col-xl-5 d-flex flex-column justify-content-center shadow-sm p-3">
          <div class="col-12 mb-4">
            <h1 class="fw-light text-secondary m-0">Formulario de registro</h1>
          </div>
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <div class="col-12 mb-4 pe-0 pe-lg-3">
              <label for="">Selecciona el tipo de usuario que eres</label>
              <select name="" id="" class="form-select shadow-none rounded-1">
                <option selected disabled>¿Eres usuario común o trabajador?</option>
                <option value="usuario">Usuario</option>
                <option value="trabajador">Trabajador</option>
              </select>
            </div>
            <div class="col-6 mb-4 pe-2">
              <label for="">Nombre</label>
              <input type="text" class="form-control shadow-none rounded-1" placeholder="Nombre">
            </div>
            <div class="col-6 mb-4">
              <label for="">Apellidos</label>
              <input type="text" class="form-control shadow-none rounded-1" placeholder="Apellidos">
            </div>
            <div class="col-12 mb-4">
              <label for="">Correo electrónico</label>
              <input type="email" class="form-control shadow-none rounded-1" placeholder="Correo electrónico">
            </div>
            <div class="col-12 mb-4">
              <label for="">Contraseña</label>
              <input type="password" class="form-control shadow-none rounded-1" placeholder="Contraseña">
            </div>
            <div class="col-12 mb-5">
              <label for="">Repetir Contraseña</label>
              <input type="password" class="form-control shadow-none rounded-1" placeholder="Repetir Contraseña">
            </div>
            <div class="col-12 mb-3 d-flex justify-content-center">
              <button class="btn btn-primary w-75 py-2 rounded-1">Siguiente</button>
            </div>
            <div class="col-12 text-center">
              <p class="m-0">¿Ya tienes una cuenta?</p>
              <a href="" class="">Inicia sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .bg-register{
    background: #488BE8;
    padding: 90px 0px;
  }
</style>