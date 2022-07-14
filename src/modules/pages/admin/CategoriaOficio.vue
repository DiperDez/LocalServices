<template>
  <div class="col-12 px-0 py-5 m-0 d-flex flex-wrap justify-content-center gap-4 align-items-baseline">
    
    <div class="col-12 col-md-10 col-lg-6 d-flex justify-content-md-center justify-content-lg-end flex-wrap gap-4 p-0 m-0 align-items-baseline">
      <form class="col-12 col-md-10 col-lg-6 col-lg-8 bg-white rounded-1 p-3" @submit.prevent="registrarCategoria">
          <h4 class="h4 text-center mb-3">Registrar categoría oficio</h4>
          <div class="mb-3">
              <label for="categoriaOficio">Nombre de la categoría oficio</label>
              <input v-model="this.registrarDatos.categoriaOficio" type="text" class="form-control" name="categoriaOficio" placeholder="Nombre de la categoría oficio">
          </div>
          <p class="mb-2" v-if="mensajeRegistro">{{mensajeRegistro}}</p>
          <div class="mb-3 text-end">
              <input type="submit" class="btn btn-primary btn-sm" value="Registrar datos">
          </div>
      </form>
      
      <form class="col-12 col-md-10 col-lg-6 col-lg-8 bg-white rounded-1 p-3" @submit.prevent="editarCategoria" id="editarMetodo">
          <h4 class="h4 text-center mb-3">Editar categoría oficio</h4>
          <div class="mb-3">
              <label for="categoriaOficio">Nombre de la categoría oficio</label>
              <input v-model="this.editarDatos.categoriaOficio" type="text" class="form-control" name="categoriaOficio" placeholder="Nombre de la categoría oficio">
          </div>
          <p class="mb-2" v-if="mensajeEditar">{{mensajeEditar}}</p>
          <div class="mb-3 text-end">
              <button type="submit" class="btn btn-success btn-sm">Guardar cambios</button>
          </div>
      </form>
    </div>
    <div class="col-12 col-md-10 col-lg-5 d-flex justify-content-center align-items-baseline">
      <div class="col-12 col-md-10 bg-white rounded-1 p-3">
        <h4 class="h4 text-center mb-3">Lista de categorías oficio</h4>
        <div class="col-12" v-for="categoria in categoriaOficios" :key="categoria.idCategoriaOficio">
          <div class="col-12 d-flex justify-content-between my-3">
            <li class="list-style-none bg-light d-flex justify-content-center align-items-center px-2 rounded-1">{{categoria.idCategoriaOficio}} - <span name="categoria" class="ps-1">{{categoria.NombreOficio}}</span></li>
              <div class="btn-group">
                <a 
                  type="button" 
                  class="btn btn-primary btn-sm shadow-none rounded-1 mx-3 editarMetodo"
                  :data-id="categoria.idCategoriaOficio"
                  href="#"
                  name="editarMetodo"
                  @click.prevent="btnEditarCategoria"
                >
                  Editar
                </a>
                <a 
                  type="button" 
                  class="btn btn-danger btn-sm shadow-none rounded-1 eliminarMetodo"
                  :data-id="categoria.idCategoriaOficio"
                  href="#"
                  name="eliminarMetodo"
                  @click.prevent="btnEliminarCategoria"
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
            categoriaOficios: [],
            idCategoria: '',
            mensajeRegistro: '',
            mensajeEditar: '',
            registrarDatos: {
              categoriaOficio: ''
            },
            editarDatos: {
              idCategoria: null,
              categoriaOficio: ''
            }
        }
    },
    created(){
        this.leerCategoria()
    },
    methods: {
        async leerCategoria(){

            await fetch('http://localservices.com.mx/LocalServicesAPI/api/categoriaOficio.php')
            .then(r => r.json())
            .then(data => {
                
                this.categoriaOficios = []
                
                if(typeof data[0].success === 'undefined'){
                    this.categoriaOficios = data
                }

            })
            .catch(console.log)
        },
        registrarCategoria(){
          console.log(this.registrarDatos);
            if(this.registrarDatos.categoriaOficio != ''){
                fetch('http://localservices.com.mx/LocalServicesAPI/api/categoriaOficio.php?registrarCategoria=1', {
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
        btnEditarCategoria(e){
          // Variables
          const dataID = e.target.getAttribute('data-id'),
                categoriaOficio = e.target.parentElement.parentElement.querySelector('[name]').textContent

          const formEditar = document.querySelector('#editarMetodo input'),
                btnEditar  = document.querySelector('#editarMetodo button')

          // Código
          formEditar.value = categoriaOficio
          btnEditar.value  = Number(dataID)

          this.editarDatos.idCategoria = Number(dataID)
          this.editarDatos.categoriaOficio = categoriaOficio

        },
        editarCategoria(){
          if(this.editarDatos.idCategoria != null && this.editarDatos.categoriaOficio != ''){
            fetch('http://localservices.com.mx/LocalServicesAPI/api/categoriaOficio.php?editarCategoria=1', {
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
        btnEliminarCategoria(e){
          // Variables
          const dataID = e.target.getAttribute('data-id')
        
          fetch(`http://localservices.com.mx/LocalServicesAPI/api/categoriaOficio.php?eliminarCategoria=${dataID}`).then(r => {
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