<template>
    <div class="col-12 menu d-flex justify-content-between align-items-center flex-wrap px-2 px-md-3">
        <div class="col-auto col-lg-5 col-xl-3 menu-search p-0 m-0 h-100 d-flex align-items-center px-1 px-sm-0">
            
            <img src="../../../../src/assets/Logo/LocalServicesLogoWhite.png" alt="Logo" class="logo py-2 logo-dark">
            

            <div class="col-12 input-group input-search h-auto ms-md-5 d-none d-md-flex shadow-sm">
                 <input type="text" placeholder="Busca un servicio" class="form-control rounded-0 shadow-none ps-3">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-100 w-6 text-secondary search-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

        </div>
        
        <div class="menu-icon" @click="pressIcon" v-show="windowWidth <= 992">
            <span class="menu-span"></span>
            <span class="menu-span"></span>
            <span class="menu-span"></span>
        </div>     

        <div class="col-auto d-none d-lg-flex align-items-center flex-wrap p-0 m-0 gap-4 gap-xl-5 menu-items" id="menu-items">
            <router-link class="text-decoration-none router-link router-link-white" to="/">Inicio</router-link>
            <router-link class="text-decoration-none router-link router-link-white" to="/servicios">Servicios</router-link>
            <router-link class="text-decoration-none router-link router-link-white" to="/acercaDe">Acerca de</router-link>
            <router-link class="text-decoration-none px-3 py-1 btn btn-sm btn-primary-blue rounded-0 rounded-1 router-link router-link-white" to="/registro">Registrarse</router-link>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            windowWidth: document.documentElement.clientWidth,
            windowScroll: window.scrollY
        }
    },
    mounted(){
        window.addEventListener('resize', this.getDimensions)
        window.addEventListener('scroll', this.getPositionY)
    },
    unmounted(){
        window.removeEventListener('resize', this.getDimensions)
        window.removeEventListener('scroll', this.getPositionY)
    },
    methods: {
        
        getDimensions(){
            const menuIcon = document.querySelector('.menu-icon'),
                  container = document.querySelector('.routerView'),
                  menuItems = document.querySelector('.menu-items'),
                  menuLink = document.querySelectorAll('.router-link')

            this.windowWidth = document.documentElement.clientWidth

            if(this.windowWidth >= 992){
                if(menuIcon.classList.contains('active')){
                    container.classList.remove('active-container')
                    menuIcon.classList.remove('active')
                    menuItems.classList.remove('d-flex', 'flex-column', 'col-12', 'mt-5')
                    menuItems.classList.add('d-none')
                    
                    for(let i = 0; i < menuLink.length; i++){
                        menuLink[i].classList.remove('text-white') 
                    }
                }
            }
        },
        getPositionY(){
            this.windowScroll = window.scrollY
            const menu = document.querySelector('.menu'),
                  menuLink = document.querySelectorAll('.router-link')

            if(this.windowScroll >= 50){
                menu.classList.add('menu-scroll', 'shadow-sm')
                

                for(let i = 0; i < menuLink.length; i++){
                    menuLink[i].classList.remove('router-link-white') 
                    menuLink[i].classList.add('router-link-dark')
                }

            }else{
                menu.classList.remove('menu-scroll')
                menu.classList.remove('shadow-sm')

                for(let i = 0; i < menuLink.length; i++){
                    menuLink[i].classList.remove('router-link-dark') 
                    menuLink[i].classList.add('router-link-white')
                }
            }

        },
        pressIcon(){
            
            const menuIcon  = document.querySelector('.menu-icon'),
                  menuItems = document.querySelector('.menu-items'),
                  container = document.querySelector('.routerView'),
                  menuLink = document.querySelectorAll('.router-link')

            menuIcon.classList.toggle('active')
            container.classList.toggle('active-container')   


            if(menuItems.classList.contains('d-none')){
                menuItems.classList.remove('d-none')
                menuItems.classList.add('d-flex', 'flex-column', 'col-12', 'mt-5')
                
                for(let i = 0; i < menuLink.length; i++){
                    menuLink[i].classList.remove('router-link-dark') 
                    menuLink[i].classList.add('router-link-white', 'text-white')
                }
            }else{
                menuItems.classList.remove('d-flex', 'flex-column', 'col-12', 'mt-5')
                menuItems.classList.add('d-none')
            }

        }

    }
}
</script>

<style>

    input{
        position: relative;
    }

    .logo{
        height: 90%;
    }

    .search-svg{
        position: absolute;
        right: 10px;
        padding: 5px;
        z-index: 3;
        width: 30px;
    }

    .icon-left{
        right: 0;
        left: 10px;
    }

    .menu{
        width: 100%;
        height: 70px;
        z-index: 1000;
        background-color: transparent;
        transition: all ease .8s;
    }

    .menu .menu-span{
        background-color: white;
    }

    .menu .input-search,
    .menu .menu-dark{
        opacity: 0;
        transition: all ease .8s;
    }
    
    .menu-scroll{
        width: 100%;
        height: 70px;
        z-index: 1000;
        background-color: white;
        transition: all ease .8s;
    }

    .menu-scroll .menu-span{
        background-color: black;
    }

    .menu-scroll .input-search,
    .menu .menu-white{
        opacity: 1;
        transition: all ease .8s;
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

    .router-link-white,
    .router-link-dark{
        position: relative;
        transition: all ease-in .6s;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: var(--fontLights);
        font-size: 18px;
    }

    .router-link-white{ 
        color: var(--white-50); 
    }
    
    .router-link-dark{
        color: var(--dark-50);
    }

    .router-link-white::before,
    .router-link-dark::before{
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        left: 50%;
        right: 50%;
        bottom: -5px;
        border-radius: 10px;
        transition: all ease-in .4s;
    }

    .router-link-white::before{ 
        background: var(--white);
    }

    .router-link-dark::before{
        background: var(--dark);
    }

    .router-link-white:hover::before,
    .router-link-dark:hover::before{
        width: 100%;
        left: 0;
        right: 0;
        transition: all ease-out .4s;
    }

    .router-link-white:last-child:hover::before,
    .router-link-dark:last-child:hover::before{
        width: 0;
    }
        
    .router-link-white:hover,
    .router-link-dark:hover{
        transition: all ease-out .4s;
    }

    .router-link-white:hover{
        color: var(--white);
    }

    .router-link-dark:hover{
        color: var(--dark);
    }

    .router-link-white.router-link-exact-active{
        color: var(--white);
    }

    .router-link-dark.router-link-exact-active{
        color: var(--dark);
    }

    .btn-primary-blue.router-link-exact-active{
        background-color: #0076FE;
        color: white;
    }

    .router-link-exact-active::before{
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .btn-primary-blue.router-link-exact-active::before{
        width: 0;
    }

</style>