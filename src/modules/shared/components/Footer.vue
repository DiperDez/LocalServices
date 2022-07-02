<template>
    <footer class="bg-white shadow m-0 py-5 mt-5 d-flex justify-content-around align-items-center gap-5">

      <div class="col-12 footer-box text-dark d-flex flex-column justify-content-around     align-items-center">
        
        <div class="col-12 d-flex flex-column align-items-center flex-wrap">
            <div class="mb-5" style="width: 15rem;">
                <img src="../../../../src/assets/Logo/LocalServicesLogoBlack.png" alt="" class="w-100 h-100">
            </div>
            <div class="menu-footer d-flex justify-content-center align-items-center flex-column flex-md-row w-100 flex-wrap">
                <router-link class="text-decoration-none menu-item-footer" to="/">Inicio</router-link>
                <router-link class="text-decoration-none menu-item-footer" to="/servicios">Servicios</router-link>
                <router-link class="text-decoration-none menu-item-footer" to="/acercaDe">Acerca de</router-link>
                <router-link class="text-decoration-none menu-item-footer" to="/registro">Registrarse</router-link>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center flex-column align-items-center flex-wrap">
            <hr class="w-75 text-dark my-5">
            <h4 class="fw-light text-secondary text-center">@ 2022 TechWebCompany. All rights reserved</h4>
        </div>

      </div>

    </footer>
</template>

<script>
export default {

}
</script>

<style>
    .menu-footer{
        font-size: 20px;
        gap: 3rem;
        font-weight: lighter;
    }

    .menu-item-footer{
        text-transform: uppercase;
        color: var(--dark);
        letter-spacing: 4px;
    }
</style>