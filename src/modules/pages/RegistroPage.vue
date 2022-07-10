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
                  v-model="datos.nombre"
                  type="text"
                  placeholder="Nombre (s)"
                  class="form-control rounded-1"
                  name="nombre"
                />
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Paterno</label>
                <input
                  v-model="datos.apellidoPaterno"
                  type="text"
                  placeholder="Apellido Paterno"
                  class="form-control rounded-1"
                  name="apellidoPaterno"
                />
              </div>
              <div class="col-12 mb-4">
                <label for="">Apellido Materno</label>
                <input
                  v-model="datos.apellidoMaterno"
                  type="text"
                  placeholder="Apellido Materno "
                  class="form-control rounded-1"
                  name="apellidoMaterno"
                />
              </div>
            </div>
            <div class="col-12 mt-1 mb-3 gap-3 text-end">
             
              <button
                class="btn-primary-local btn-local w-25 py-1"
                @click.prevent="validarInputs"
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
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
      },
    };
  },
  methods: {
    validarInputs(e) {
      const inputs = document.querySelectorAll("#formRegistro input")

      inputs.forEach(input => {
        if(!input.value){
          input.classList.add('border-danger-local', 'border-2px')
          console.log(input.parentElement);
        }else{
          input.classList.add('border-success-local', 'border-2px')
        }
      })
    },
    registrarUsuario() {
      this.validarInputs();

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
  height: 100vh;;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../../../src/assets/backgrounds/register.jpg);
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.form{
  width: 380px;
}

.seccion-registro {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.seccion-numero {
  width: 50px;
  height: 50px;
  border: 2px solid #beb8eb;
  color: var(--dark);
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
}

.seccion-numero:nth-child(2)::before,
.seccion-numero:nth-child(2)::after {
  content: "";
  position: absolute;
  width: 110%;
  height: 2px;
  background-color: #beb8eb;
  z-index: 1;
}

.seccion-numero:nth-child(2)::before {
  right: 100%;
}
.seccion-numero:nth-child(2)::after {
  left: 100%;
}
</style>
