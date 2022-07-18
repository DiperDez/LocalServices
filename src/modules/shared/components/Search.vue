<template>
  <div class="col-8 col-md-11 col-lg-8 bg-white section-search rounded-1 p-2 d-flex flex-wrap justify-content-center align-items-center">
    <div class="col-12 d-flex justify-content-center align-items-end gap-3">
      <div class="col-2 m-0">
        <label for="">Estado:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Estado</option>
          <option v-for="estado in estados" :key="estado.idEstado" :value="estado.idEstado">{{estado.NombreEstado}}</option>
        </select>
      </div>
      <div class="col-2">
        <label for="">Municipio:</label>
        <select class="form-select shadow-none">
          <option selected disabled>Municipio</option>
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
export default {
    data(){
      return{
        ciudades: [],
        municipios: [],
        estados: [],
        categoria: []
      }
    },
    created(){
      this.obtenerOpciones()
    },
    methods:{
      async obtenerOpciones(){
        const datos = await fetch('http://localservices.com.mx/LocalServicesAPI/api/estado.php')
                              .then(r => r.json())
                              .catch(console.log)

        this.estados = datos;
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