<template>
  <div class="row bg-orange-local m-0 py-5">
    <div class="col-12 d-flex justify-content-center align-items-center flex-column">
        <h1 class="text-white mt-5 pt-5 mb-3 text-center">Panel de administrador</h1>  
        <div class="col-12 col-md-5 bg-white rounded-1 py-2 d-flex justify-content-around">
            <router-link class="text-decoration-none text-primary" to="/administrador/estados">Estados</router-link>
            <router-link class="text-decoration-none text-primary" to="/administrador/metodoPago">Método de pago</router-link>
            <router-link class="text-decoration-none text-primary" to="/administrador/oficio">Oficios</router-link>
            <router-link class="text-decoration-none text-primary" to="/administrador/categoriaOficio">Categoria Oficio</router-link>
        </div>
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>