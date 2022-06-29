<template>
    <div class="col-12 menu d-flex justify-content-between align-items-center flex-wrap px-2 px-lg-4 shadow-sm position-fixed">
        <div class="col-auto col-lg-4 menu-search p-0 m-0 h-100 d-flex align-items-center">
            
            <img src="../../../../src/assets/Logo/LocalServicesLogoBlack.png" alt="Logo" class="logo h-100 py-2">

            <div class="col-12 input-group h-auto ms-4 d-none d-md-flex shadow-sm">
                 <input type="text" placeholder="Busca un servicio dentro de tu ubicación..." class="form-control rounded-0 shadow-none ps-3">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-100 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

        </div>
        <div class="menu-icon" @click="pressIcon" v-show="windowWidth <= 992">
            <span class="menu-span"></span>
            <span class="menu-span"></span>
            <span class="menu-span"></span>
        </div>      
        <div class="col-auto d-none d-lg-flex align-items-center flex-wrap gap-5 gap-md-3 p-0 m-0" id="menu-items">
            <router-link class="text-decoration-none router-link" to="/">Inicio</router-link>
            <router-link class="text-decoration-none router-link" to="/services">Servicios</router-link>
            <router-link class="text-decoration-none router-link" to="/aboutUs">Acerca de</router-link>
            <router-link class="text-decoration-none px-3 py-1 btn btn-sm btn-primary-blue rounded-0 rounded-1" to="/register">Registrarse</router-link>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            windowWidth: document.documentElement.clientWidth,
        }
    },
    mounted(){
        window.addEventListener('resize', this.getDimensions)
    },
    unmounted(){
        window.removeEventListener('resize', this.getDimensions)
    },
    methods: {
        
        getDimensions(){
            const menuIcon = document.querySelector('.menu-icon'),
                  container = document.querySelector('body')

            this.windowWidth = document.documentElement.clientWidth

            if(this.windowWidth >= 992){
                if(menuIcon.classList.contains('active')){
                    container.classList.remove('active-container')
                    menuIcon.classList.remove('active')
                }
            }
        },
        pressIcon(){
            
            const menuIcon = document.querySelector('.menu-icon'),
                  container = document.querySelector('body')

            menuIcon.classList.toggle('active')
            container.classList.toggle('active-container')   

        }
    }
}
</script>

<style>
    img{
        width: auto;
        height: 100%;
        padding: 10px 0px;
    }

    input{
        position: relative;
    }

    svg{
        right: 10px;
        position: absolute;
        padding: 5px;
        z-index: 3;
        width: 30px;
    }

    .menu{
        width: 100%;
        height: 70px;
        background-color: white;
        z-index: 4;
    }

    .menu-icon{
        width: 50px;
        height: 50px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 8px;
    }

    .menu-span{
        width: 35px;
        height: 4px;
        border-radius: 3px;
        background-color: rgba(0,0,0,0.6);
        transition: all ease .4s;
    }

    .active .menu-span:nth-child(1){
        transform: rotate(135deg) translate(9px, -8px);
    }

    .active .menu-span:nth-child(2){
       opacity: 0;
       transform: scale(0);
    }

    .active .menu-span:nth-child(3){
        transform: rotate(-135deg) translate(9px, 8px);
    }

    .menu-items{
        background-color: var(--primary);
    }

    .active-container{
      position: relative;
    }

    .active-container::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 3;
        transition: all ease .4s;
    }

    .router-link{
        color: var(--dark-50);
        position: relative;
        transition: all ease-in .6s;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 300;
    }

    .router-link::before{
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        left: 50%;
        right: 50%;
        bottom: -5px;
        background: var(--dark);
        border-radius: 10px;
        transition: all ease-in .4s;
    }

    .router-link:hover::before{
        width: 100%;
        left: 0;
        right: 0;
        transition: all ease-out .4s;
    }

    .router-link:hover{
        color: var(--dark);
        transition: all ease-out .4s;
    }

    .router-link-exact-active{
        color: var(--dark);
    }


    .router-link-exact-active::before{
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }


</style>