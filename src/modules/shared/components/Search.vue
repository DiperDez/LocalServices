<template>
  <div class="col-8 col-lg-11  bg-white section-search rounded-1 p-2 d-flex flex-wrap justify-content-center align-items-center">
    <div class="col-12 d-flex justify-content-center align-items-end gap-3">
      <div class="col-2 m-0">
        <label for="">Estado:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Estado</option>
          <option v-for="estado in estados" :key="estado.idEstado" :value="estado.idEstado" v-on:change="data.estado">{{estado.NombreEstado}}</option>
        </select>
      </div>
      <div class="col-2">
        <label for="">Municipio:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Municipio</option>
          <option disabled>Selecciona primero un estado</option>
        </select>
      </div>
      <div class="col-2">
        <label for="">Ciudad:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Ciudad</option>
        </select>
      </div>
      <div class="col-2">
        <label for="">Categoría:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Categoría</option>
          <option v-for="categoria in categorias" :key="categoria.idCategoriaOficio" :value="categoria.idCategoriaOficio">{{categoria.NombreOficio}}</option>
        </select>
      </div>
      <div class="col-3 d-flex flex-wrap justify-content-around align-items-center">
        <input type="search" class="form-control shadow-none w-75" placeholder="Busca el servicio que necesitas.">
        <button class="btn btn-primary btn-sm shadow-none">Buscar</button>
      </div>
    </div>
    </div>
</template>

<script>
import url from '@/main.js';
export default {
    data(){
      return{
        ciudades: [],
        municipios: [],
        estados: [],
        categorias: [],
        data: {
          estado: '',
          municipio: '',
          ciudad: ''
        }
      }
    },
    created(){
      this.obtenerOpciones()
    },
    methods:{
      async obtenerOpciones(){
        const estados = await fetch(`${url}/estado.php`)
                                .then(r => r.json())
                                .catch(console.log)

        const categoriaOficio = await fetch(`${url}/categoriaOficio.php`)
                                  .then(r => r.json())
                                  .catch(console.log)
 
        this.estados   = estados;
        this.categorias = categoriaOficio; 

      }
    }
}
</script>

<style> 
  .section-search{
    position: absolute;
    bottom: -2.3rem;
    box-shadow: 0px 0px 5px #ced4da;
  }
</style>