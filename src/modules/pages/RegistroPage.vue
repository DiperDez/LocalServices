<template>
  <div class="row m-0 bg-register">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="col-12 col-sm-8 col-md-3 bg-white rounded-1 shadow overflow-hidden d-flex flex-wrap p-2">
        <form class="col-12 d-flex flex-column justify-content-center shadow-sm p-3" id="formRegistro">
          <h3 class="fw-light mb-3 text-center">Formulario de registro</h3>
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <div class="col-12 seccion-registro gap-5 mb-3">
              <div class="seccion-numero">1</div>
              <div class="seccion-numero">2</div>
              <div class="seccion-numero">3</div>
            </div>
            <!-- <div class="col-12 mb-3 pe-0 pe-lg-3">
              <label for="">Selecciona el tipo de usuario que eres</label>
              <select name="" id="" class="form-select shadow-none rounded-1">
                <option selected disabled>¿Eres usuario común o trabajador?</option>
                <option value="usuario">Usuario</option>
                <option value="trabajador">Trabajador</option>
              </select>
            </div> -->
            <div class="col-12 p-0 grupo-1">
              <div class="col-12 mb-3">
                <label for="">Nombre</label>
                <input v-model="datos.nombre" type="text" placeholder="Nombre (s)" class="form-control" name="nombre">
              </div>
              <div class="col-12 mb-3">
                <label for="">Apellido Paterno</label>
                <input v-model="datos.apellidoPaterno" type="text" placeholder="Apellido Paterno" class="form-control" name="apellidoPaterno">
              </div>
              <div class="col-12 mb-4">
                <label for="">Apellido Materno</label>
                <input v-model="datos.apellidoMaterno" type="text" placeholder="Apellido Materno " class="form-control" name="apellidoMaterno">
              </div>
            </div>
            <div class="mb-3 w-100">
              <button class="btn btn-primary w-100 py-2" @click.prevent="validarInputs">Siguiente</button>
            </div>
            <div class="text-center">
              <p class="m-0">¿Ya tienes una cuenta?</p>
              <a href="">Inicia sesión</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datos: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
      }
    }
  },
  methods: {
    validarInputs(e){  
      const inputs = document.querySelectorAll('#formRegistro input');

      inputs.forEach(input => {

          
        if(this.datos['nombre'] && this.datos['apellidoPaterno'] && this.datos['apellidoMaterno']){
          console.log('Los datos están correctos');
        }else{
          console.log('Faltan datos');
        }
      });

    },
    registrarUsuario(){
      this.validarInputs();

      // const datosUsuario = await fetch('http://localhost/LocalServicesAPI/api/?insertar=1', {
        // method: "POobjectST",
        // body: JSON.stringify(this.datosUsuario)
      // }).then(r => r.json())
        // .catch(console.log)
      
      // typeof datosUsuario === 'object' ? window.location.href = '/' : console.log('error');
    }
  }
}
</script>

<style>
  .bg-register{
    background: #0A2239;
    padding: 90px 0px;
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
    border: 2px solid #BEB8EB;
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
  .seccion-numero:nth-child(2)::after{
    content: "";
    position: absolute;
    width: 110%;
    height: 2px;
    background-color: #BEB8EB;
    z-index: 1;
  }

  .seccion-numero:nth-child(2)::before{ right: 100%; }
  .seccion-numero:nth-child(2)::after { left: 100%; }


</style>
