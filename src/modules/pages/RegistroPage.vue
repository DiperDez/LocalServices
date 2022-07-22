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
            <div class="col-12 p-0 grupo-1" v-if="this.indice == 0">
              <div class="col-12 mb-3">
                <label for="">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre (s)"
                  class="form-control rounded-1 shadow-none"
                  name="nombre"
                  v-model="this.datos.nombre"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Paterno</label>
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  class="form-control rounded-1 shadow-none"
                  name="apellidoPaterno"
                  v-model="this.datos.apellidoPaterno"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Materno</label>
                <input
                  type="text"
                  placeholder="Apellido Materno "
                  class="form-control rounded-1 shadow-none"
                  name="apellidoMaterno"
                  v-model="this.datos.apellidoMaterno"
                />
              </div>
            </div>
            <div class="col-12 p-0 grupo-1" v-if="this.indice == 1">
              <div class="col-12 mb-3">
                <label for="">Número de teléfono</label>
                <input
                  type="number"
                  placeholder="Número de teléfono"
                  class="form-control rounded-1 shadow-none"
                  name="telefono"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Estado</label>
                <select class="form-select shadow-none" name="estado" @change="selectOption">
                  <option selected disabled>Selecciona tu estado</option>
                  <option value="Hidalgo">Hidalgo</option>
                </select>
              </div>
              <div class="col-12 mb-3">
                <label for="">Municipio</label>
                <select class="form-select shadow-none" name="municipio" @change="selectOption">
                  <option selected disabled>Selecciona tu municipio</option>
                  <option value="Atlapexco">Atlapexco</option>
                  <option value="Huejutla">Huejutla</option>
                </select>
              </div>
              <div class="col-12 mb-3">
                <label for="">Ciudad</label>
                <select class="form-select shadow-none" name="ciudad" @change="selectOption">
                  <option selected disabled>Selecciona tu ciudad</option>
                  <option value="Atlapexco">Atlapexco</option>
                  <option value="Itzocal">Itzocal</option>
                </select>
              </div>
            </div>
            <div class="col-12 p-0 grupo-1" v-if="this.indice == 2">
              <div class="col-12 mb-3">
                <label for="">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Correo eletrónico"
                  class="form-control rounded-1 shadow-none"
                  name="email"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  class="form-control rounded-1 shadow-none"
                  name="password"
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
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        estado: '',
        municipio: '',
        ciudad: ''
      },
      expresiones: {
        texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{4,12}$/,
        number: /^\d+$/
      },
      indice: 0
    }
  },
  methods: {
    validarFormulario() {
      const inputs = document.querySelectorAll("#formRegistro input")      
      const selects = document.querySelectorAll("#formRegistro select")      
      
      inputs.forEach(input => {

        switch(input.name){
          case 'nombre':
            this.validarCampo(this.expresiones.texto, input)
          break;
          case 'apellidoPaterno':
            this.validarCampo(this.expresiones.texto, input)
          break;
          case 'apellidoMaterno':
            this.validarCampo(this.expresiones.texto, input)
          break;
          case 'telefono':
            this.validarCampo(this.expresiones.number, input)
          break;
        }

      })

      selects.forEach(select => {
        this.validarTarget(select)
      });

      
    },
    validarCampo(expresion, input){
      
      if(expresion.test(input.value)){
        this.validarTarget(input, 'success')

        /* Validar el no permitir pasar si los datos son erroneos */
      
      }else{
          this.validarTarget(input) 
      }
    },
    selectOption(e){

      e.target.name     == 'estado'    ? this.datos.estado    = e.target.value 
        : e.target.name == 'municipio' ? this.datos.municipio = e.target.value
        : e.target.name == 'ciudad'    ? this.datos.ciudad    = e.target.value
        : this.datos[e.target.name] = ''

    },
    validarTarget(tipo, tipoClase){

      if(this.datos.nombre && this.datos.apellidoPaterno && this.datos.apellidoMaterno){
        
          this.indice = 1
          
          const numeroSeccion = document.querySelectorAll('.seccion-numero')
          numeroSeccion[0].classList.add('seccion-numero-correcto')
          
          if(this.datos.telefono && this.datos.estado && this.datos.municipio && this.datos.ciudad){

          this.indice = 2
          numeroSeccion[1].classList.add('seccion-numero-correcto')
          }
        }

      if(tipoClase == 'success'){

        tipo.classList.remove('border-danger-local', 'border-2px')
        tipo.classList.add('border-success-local', 'border-2px')
        
        tipo.parentElement.classList.remove('mb-1')
        tipo.parentElement.classList.add('mb-3')

        if(tipo.parentElement.querySelector('.error')){
          tipo.parentElement.lastElementChild.remove()
        }

      }else{

        tipo.classList.remove('border-success-local', 'border-2px')
        tipo.classList.add('border-danger-local', 'border-2px')
        tipo.parentElement.classList.remove('mb-1')
        tipo.parentElement.classList.add('mb-3')

        const error = document.createElement('p')
        error.classList.add('text-danger', 'error')

        const contenedorPadre = tipo.parentElement
        contenedorPadre.appendChild(error)

        if(contenedorPadre.querySelectorAll('.error').length > 1){
          contenedorPadre.querySelector('.error').remove()
        }

        if(tipo.classList.contains('form-control')){
          tipo.value.length <= 0 
          ? error.textContent = 'Este campo es obligatorio.' 
          : tipo.type == 'text' ? error.textContent = 'Solo se permite texto.' : undefined
        }else{
          error.textContent = 'Este campo es obligatorio.'
        }

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
  width: 110%;
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