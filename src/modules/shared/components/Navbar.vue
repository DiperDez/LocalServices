<template>
    <div class="col-12 menu d-flex justify-content-between align-items-center gap-4 px-5 shadow-sm position-fixed flex-wrap">

        <div class="menu-logo h-100">
            <img src="../../../../src/assets/Logo/LocalServicesLogoBlack.png" alt="Logo">
        </div>

        <div class="menu-button-container h-50 d-flex align-items-center">
            <div class="menu-burger">
                <span class="menu-span-1"></span>
                <span class="menu-span-2"></span>
                <span class="menu-span-3"></span>
            </div>
            <div class="menu-button-items invisible">
                <router-link class="text-decoration-none router-link" to="/">Inicio</router-link>
                <router-link class="text-decoration-none router-link" to="/services">Servicios</router-link>
                <router-link class="text-decoration-none router-link" to="/aboutUs">Acerca de</router-link>
                <router-link class="text-decoration-none btn btn-sm px-4 py-2 btn-primary-blue rounded-0 text-white rounded-1" to="/register">Registrarse</router-link>
            </div>
        </div>

        <div class="menu-search col-4 col-md-7 col-xl-4 p-0 m-0 h-100 d-flex align-items-center">
            
            <img src="../../../../src/assets/Logo/LocalServicesLogoBlack.png" alt="Logo">

            <div class="input-group h-50 ms-4">
                 <input type="text" placeholder="Search" class="form-control rounded-0 shadow-none ps-3">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-100 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

        </div>

        <div class="menu-items col-lg-12 d-flex align-items-center flex-wrap gap-5 gap-md-3 p-0 m-0">
            <router-link class="text-decoration-none router-link" to="/">Inicio</router-link>
            <router-link class="text-decoration-none router-link" to="/services">Servicios</router-link>
            <router-link class="text-decoration-none router-link" to="/aboutUs">Acerca de</router-link>
            <router-link class="text-decoration-none btn btn-sm px-4 py-2 btn-primary-blue rounded-0 text-white rounded-1" to="/register">Registrarse</router-link>
        </div>
    </div>
</template>

<style scoped>
    .menu{
        width: 100%;
        height: 70px;
        background-color: white;
        z-index: 100;
    }

    .menu-burger{
        width: 50px;
        height: 50px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        transition: all ease-in .4s;
        cursor: pointer;
    }

    .menu-span-1,
    .menu-span-2,
    .menu-span-3{
        position: absolute;
        width: 80%;
        height: 4px;
        background-color: var(--dark);
        transition: all ease-in .4s;
        border-radius: 8px;
    }    

    .menu-span-2{top: 8px}
    .menu-span-3{bottom: 8px}

    .menu-burger:hover .menu-span-1{
        opacity: 0;
    }

    .menu-burger:hover .menu-span-2{
        transform: rotate(47deg) translate(10px, 10px);
    }

    .menu-burger:hover .menu-span-3{
        transform: rotate(-47deg) translate(10px, -10px);
    }


    


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

    .btn-primary-blue{
        font-family: var(--fontPrimary);
        font-weight: var(--fontBold);
        background-color: var(--primary);
    }

    @media (max-width: 992px){
        .menu-items,
        .menu-search{
            display: none;
            visibility: hidden;
        }
    }

    @media (min-width: 993px){
        .menu-items,
        .menu-search{
            display: none;
            visibility: visible;
        }
    }
    
</style>