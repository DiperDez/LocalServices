<template>
  <div class="row m-0 bg-register">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div
        class="
          form
          bg-white
          rounded-1
          shadow
          overflow-hidden
          d-flex
          flex-wrap
          p-2
          m-2
        "
      >
        <form
          class="col-12 d-flex flex-column justify-content-center shadow-sm p-3"
          id="formRegistro"
        >
          <h3 class="fw-light mb-3 text-center">Formulario de registro</h3>
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <div class="col-12 seccion-registro gap-5 mb-3">
              <div class="seccion-numero">1</div>
              <div class="seccion-numero">2</div>
              <div class="seccion-numero">3</div>
            </div>
            <div class="col-12 p-0 grupo-1">
              <div class="col-12 mb-3">
                <label for="">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre (s)"
                  class="form-control rounded-1 shadow-none"
                  name="nombre"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Paterno</label>
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  class="form-control rounded-1 shadow-none"
                  name="apellidoPaterno"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Materno</label>
                <input
                  type="text"
                  placeholder="Apellido Materno "
                  class="form-control rounded-1 shadow-none"
                  name="apellidoMaterno"
                />
              </div>
            </div>
            <div class="col-12 mt-1 mb-3 gap-3 text-end">
             
              <button
                class="btn-primary-local btn-local w-25 py-1 siguiente"
                @click.prevent="validarFormulario"
              >
                Siguiente
              </button>
            </div>
            <div class="col-12 mb-1">
              <div class="text-center">
                <p class="m-0">¿Ya tienes una cuenta?</p>
                <a href="">Inicia sesión</a>
              </div>
            </div>
          </div>


          <slot></slot>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datos: {
        nombre: false,
        apellidoPaterno: false,
        apellidoMaterno: false,
        email: false,
        password: false,
        direccion: false
      },
      expresiones: {
        texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{4,12}$/
      }
    }
  },
  methods: {
    validarFormulario() {
      const inputs = document.querySelectorAll("#formRegistro input")      
      inputs.forEach(input => {

        switch(input.name){
          case 'nombre':
            this.validarCampo(this.expresiones.texto, input, 'nombre')
          break;
          case 'apellidoPaterno':
            this.validarCampo(this.expresiones.texto, input, 'apellidoPaterno')
          break;
          case 'apellidoMaterno':
            this.validarCampo(this.expresiones.texto, input, 'apellidoMaterno')
          break;
        }

      })
    },
    validarCampo(expresion, input, campo){

      if(expresion.test(input.value)){

        input.classList.remove('border-danger-local', 'border-2px')
        input.classList.add('border-success-local', 'border-2px')
        
        input.parentElement.classList.remove('mb-1')
        input.parentElement.classList.add('mb-3')

        if(input.parentElement.querySelector('.error')){
          input.parentElement.lastElementChild.remove()
        }

        this.datos[campo] = true

      }else{

        input.classList.remove('border-success-local', 'border-2px')
        input.classList.add('border-danger-local', 'border-2px')

        input.parentElement.classList.remove('mb-1')
        input.parentElement.classList.add('mb-3')

        const error = document.createElement('p')
        error.classList.add('text-danger', 'error')

        const contenedorPadre = input.parentElement
        contenedorPadre.appendChild(error)


        input.value.length <= 0 
          ? error.textContent = 'Este campo es obligatorio.' 
          : input.type == 'text' ? error.textContent = 'Solo se permite texto' : undefined  


        if(contenedorPadre.querySelectorAll('.error').length > 1){
          contenedorPadre.querySelector('.error').remove(); 
        }

        this.datos[campo] = false
      }

      if(this.datos.nombre && this.datos.apellidoPaterno && this.datos.apellidoMaterno){
        const numeroSeccion = document.querySelectorAll('.seccion-numero')
        let indice = 0;

        numeroSeccion[indice].classList.add('seccion-numero-correcto');
        
        if(this.datos.nombre){
          indice++;
          numeroSeccion[indice].classList.add('seccion-numero-correcto');
        }

      }else{
        console.log('Datos no completos');
      }
    },
    registrarUsuario() {
      // this.validar()
  
      // const datosUsuario = await fetch('http://localhost/LocalServicesAPI/api/?insertar=1', {
      // method: "POobjectST",
      // body: JSON.stringify(this.datosUsuario)
      // }).then(r => r.json())
      // .catch(console.log)

      // typeof datosUsuario === 'object' ? window.location.href = '/' : console.log('error');
    },
  },
};
</script>

<style>
.bg-register {
  padding: 10vh 0px;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../../../src/assets/backgrounds/register.jpg);
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.form{
  width: 380px;
}

.seccion-registro{
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.seccion-numero{
  width: 50px;
  height: 50px;
  border: 2px solid #beb8eb;
  color: var(--dark);
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: spin 2s linear;
}

.seccion-numero:first-child::before,
.seccion-numero:first-child::after{
  content: "";
  position: absolute;
  height: 2px;
  left: 100%;
}

.seccion-numero:first-child::before{
  width: 400%;
  background-color: #beb8eb;
}

.seccion-numero-correcto.seccion-numero:first-child::after{
  width: 200%;
  background-color: var(--primary);
  transition: all ease-out .5s;
}

.seccion-numero-correcto{
  border-color: var(--primary);
  background-color: var(--primary);
  color: var(--white);
  transition: all ease-out .4s;
}

</style>