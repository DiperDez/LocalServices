<template>
  <div class="col-12 px-0 py-5 m-0 d-flex flex-wrap justify-content-center gap-4 align-items-baseline">
    
    <div class="col-12 col-md-10 col-lg-6 d-flex justify-content-md-center justify-content-lg-end flex-wrap gap-4 p-0 m-0">
      
      <form class="col-12 col-md-10 col-lg-6 col-lg-8 bg-white rounded-1 p-3" @submit.prevent="registrarEstado">
          <h4 class="h4 text-center mb-3">Registrar estado</h4>
          <div class="mb-3">
              <label for="nombreEstado">Nombre del estado</label>
              <input v-model="this.registrarDatos.nombreEstado" type="text" class="form-control" name="nombreEstado" placeholder="Nombre del estado">
          </div>
          <p class="mb-2" v-if="mensajeRegistro">{{mensajeRegistro}}</p>
          <div class="mb-3 text-end">
              <input type="submit" class="btn btn-primary btn-sm" value="Registrar datos">
          </div>
      </form>
      
      <form class="col-12 col-md-10 col-lg-6 col-lg-8 bg-white rounded-1 p-3" @submit.prevent="editarEstado" id="editarEstado">
          <h4 class="h4 text-center mb-3">Editar estado</h4>
          <div class="mb-3">
              <label for="nombreEstado">Nombre del estado</label>
              <input v-model="this.editarDatos.nombreEstado" type="text" class="form-control" name="nombreEstado" placeholder="Nombre del estado">
          </div>
          <p class="mb-2" v-if="mensajeEditar">{{mensajeEditar}}</p>
          <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success btn-sm">Guardar cambios</button>
          </div>
      </form>

    </div>
    <div class="col-12 col-md-10 col-lg-5 d-flex justify-content-center align-items-baseline">
      <div class="col-12 col-md-10 bg-white rounded-1 p-3">
        <h4 class="h4 text-center mb-3">Lista de estados</h4>
        <div class="col-12" v-for="estado in estados" :key="estado.idEstado">
          <div class="col-12 d-flex justify-content-between my-3 flex-wrap">
            <li class="list-style-none bg-light d-flex justify-content-center align-items-center px-2 rounded-1">{{estado.idEstado}} - <span name="estado" class="ps-1">{{estado.NombreEstado}}</span></li>
              <div class="btn-group">
                <a 
                  type="button" 
                  class="btn btn-primary btn-sm shadow-none rounded-1 mx-3"
                  :data-id="estado.idEstado"
                  href="#"
                  name="editarEstado"
                  @click.prevent="btnEditarEstado"
                >
                  Editar
                </a>
                <a 
                  type="button" 
                  class="btn btn-danger btn-sm shadow-none rounded-1 editarEstado"
                  :data-id="estado.idEstado"
                  href="#"
                  name="eliminarEstado"
                  @click.prevent="btnEliminarEstado"
                  >
                  Eliminar estado
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return{
            estados: [],
            idEstado: '',
            mensajeRegistro: '',
            mensajeEditar: '',
            registrarDatos: {
              nombreEstado: ''
            },
            editarDatos: {
              idEstado: null,
              nombreEstado: ''
            }
        }
    },
    created(){
        this.leerEstados()
    },
    methods: {
        async leerEstados(){
            await fetch('http://localservices.com.mx/LocalServicesAPI/api/estado.php')
            .then(r => r.json())
            .then(data => {
                this.estados = []
                if(typeof data[0].success === 'undefined'){
                    this.estados = data
                }
            })
            .catch(console.log)

        },
        registrarEstado(){
            if(this.registrarDatos.nombreEstado != ''){
              fetch('http://localservices.com.mx/LocalServicesAPI/api/estado.php?registrarEstado=1', {
                  method: "POST",
                  body: JSON.stringify(this.registrarDatos)
              }).then(r => {
                r.json()
                if(r.statusText == 'OK'){

                  location.reload()  
                  alert('Se registró correctamente.')
                
                } 
              })
              .catch(console.log)
            }else{
              this.mensajeRegistro = 'Primero necesitas ingresar un dato.'
            }
        },
        btnEditarEstado(e){
          // Variables
          const dataID = e.target.getAttribute('data-id'),
                nombreEstado = e.target.parentElement.parentElement.querySelector('[name]').textContent

          const formEditar = document.querySelector('#editarEstado input'),
                btnEditar  = document.querySelector('#editarEstado button')

          // Código
          formEditar.value = nombreEstado
          btnEditar.value  = Number(dataID)

          this.editarDatos.idEstado = Number(dataID)
          this.editarDatos.nombreEstado = nombreEstado
        },
        editarEstado(){
          if(this.editarDatos.idEstado != null && this.editarDatos.nombreEstado != ''){
            fetch('http://localservices.com.mx/LocalServicesAPI/api/estado.php?editarEstado=1', {
                method: "POST",
                body: JSON.stringify(this.editarDatos)
            }).then(r => {
              r.json()
              if(r.statusText == 'OK'){

                location.reload()  
                alert('Se editó correctamente')
              
              } 
            })
            .catch(console.log)
          }else{
            this.mensajeEditar = 'Primero necesitas seleccionar un registro.'
          }
        },
        btnEliminarEstado(e){
          // Variables
          const dataID = e.target.getAttribute('data-id')
        
          fetch(`http://localservices.com.mx/LocalServicesAPI/api/estado.php?eliminarEstado=${dataID}`).then(r => {
            r.json()
            if(r.statusText == 'OK'){
              location.reload()  
              alert('Se editó correctamente')
            } 
          })
          .catch(console.log)
         
        }
    }
}
</script>

<style>

</style>