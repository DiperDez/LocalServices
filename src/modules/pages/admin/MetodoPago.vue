<template>
  <div class="container-fluid p-0 m-0 row p-5 bg-orange-local d-flex justify-content-center">
    
    <div class="col-6 d-flex justify-content-end flex-wrap gap-4">
      <form class="col-12 col-md-10 col-lg-8 bg-white rounded-1 p-3" @submit.prevent="registrarMetodo">
          <h4 class="h4 text-center mb-3">Registrar método de pago</h4>
          <div class="mb-3">
              <label for="metodoPago">Nombre del método de pago</label>
              <input v-model="this.registrarDatos.metodoPago" type="text" class="form-control" name="metodoPago" placeholder="Nombre del método de pago">
          </div>
          <p class="mb-2" v-if="mensajeRegistro">{{mensajeRegistro}}</p>
          <div class="mb-3 text-end">
              <input type="submit" class="btn btn-primary btn-sm" value="Registrar datos">
          </div>
      </form>
      
      <form class="col-12 col-md-10 col-lg-8  bg-white rounded-1 p-3" @submit.prevent="editarMetodo" id="editarMetodo">
          <h4 class="h4 text-center mb-3">Editar método de pago</h4>
          <div class="mb-3">
              <label for="metodoPago">Nombre del método de pago</label>
              <input v-model="this.editarDatos.metodoPago" type="text" class="form-control" name="metodoPago" placeholder="Nombre del método de pago">
          </div>
          <p class="mb-2" v-if="mensajeEditar">{{mensajeEditar}}</p>
          <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success btn-sm">Guardar cambios</button>
          </div>
      </form>
    </div>
    <div class="col-6 d-flex justify-content-center flex-wrap gap-4 align-items-baseline">
      <div class="col-8 bg-white rounded-1 p-3">
        <h4 class="h4 text-center mb-3">Lista de métodos de pago</h4>
        <div class="col-12" v-for="metodo in metodos" :key="metodo.idMetodoPago">
          <div class="col-12 d-flex justify-content-between my-3">
            <li class="list-style-none bg-light d-flex justify-content-center align-items-center px-2 rounded-1">{{metodo.idMetodoPago}} - <span name="metodo" class="ps-1">{{metodo.MetodoPago}}</span></li>
              <div class="btn-group">
                <a 
                  type="button" 
                  class="btn btn-primary btn-sm shadow-none rounded-1 mx-3 editarMetodo"
                  :data-id="metodo.idMetodoPago"
                  href="#"
                  name="editarMetodo"
                  @click.prevent="btnEditarMetodo"
                >
                  Editar
                </a>
                <a 
                  type="button" 
                  class="btn btn-danger btn-sm shadow-none rounded-1 eliminarMetodo"
                  :data-id="metodo.idMetodoPago"
                  href="#"
                  name="eliminarMetodo"
                  @click.prevent="btnEliminarMetodo"
                  >
                  Eliminar Método
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
            metodos: [],
            idMetodo: '',
            mensajeRegistro: '',
            mensajeEditar: '',
            registrarDatos: {
              metodoPago: ''
            },
            editarDatos: {
              idMetodo: null,
              metodoPago: ''
            }
        }
    },
    created(){
        this.leerMetodos()
    },
    methods: {
        async leerMetodos(){

            await fetch('http://localhost/LocalServicesAPI/api/metodoPago.php')
            .then(r => r.json())
            .then(data => {
                
                this.metodos = []
                
                if(typeof data[0].success === 'undefined'){
                    this.metodos = data
                }

            })
            .catch(console.log)

        },
        registrarMetodo(){
            if(this.registrarDatos.metodoPago != ''){
                fetch('http://localhost/LocalServicesAPI/api/metodoPago.php?registrarMetodo=1', {
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
        btnEditarMetodo(e){
          // Variables
          const dataID = e.target.getAttribute('data-id'),
                metodoPago = e.target.parentElement.parentElement.querySelector('[name]').textContent

          const formEditar = document.querySelector('#editarMetodo input'),
                btnEditar  = document.querySelector('#editarMetodo button')

          // Código
          formEditar.value = metodoPago
          btnEditar.value  = Number(dataID)

          this.editarDatos.idMetodo = Number(dataID)
          this.editarDatos.metodoPago = metodoPago
        },
        editarMetodo(){
          if(this.editarDatos.idMetodo != null && this.editarDatos.metodoPago != ''){
            fetch('http://localhost/LocalServicesAPI/api/metodoPago.php?editarMetodo=1', {
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
            this.mensajeEditar = 'Necesitas seleccionar un registro primero.'
          }
        },
        btnEliminarMetodo(e){
          // Variables
          const dataID = e.target.getAttribute('data-id')
        
          fetch(`http://localhost/LocalServicesAPI/api/metodoPago.php?eliminarMetodo=${dataID}`).then(r => {
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