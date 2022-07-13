<template>
  <div class="container-fluid p-0 m-0 row p-5 bg-orange-local d-flex flex-column justify-content-center align-items-center">
    <form class="col-4 bg-white rounded-1 py-2" @submit.prevent="registrarOficio">
        <h4 class="h4 text-center mb-3">Registro de datos - informaciónOficios</h4>
        <div class="mb-3">
            <label for="">Logo - de preferencia .ico</label>
            <input v-on:change="onFileChange" type="file" class="form-control" name="logoImg" placeholder="Seleccionar archivo">
        </div>
        <div class="mb-3">
            <label for="">Razón Social (nombre del lugar)</label>
            <input v-model="this.datosOficio.razonSocial" type="text" class="form-control" name="razonSocial" placeholder="Razón social">
        </div>
        <div class="mb-3">
            <label for="">Nombre propietario</label>
            <input v-model="this.datosOficio.nombrePropietario" type="text" class="form-control" name="nombrePropietario" placeholder="Nombre propietario">
        </div>
        <div class="mb-3">
            <label for="">Apellido Paterno</label>
            <input v-model="this.datosOficio.apellidoPaterno" type="text" class="form-control" name="apellidoPaterno" placeholder="Apellido Paterno">
        </div>
        <div class="mb-3">
            <label for="">Apellido Materno</label>
            <input v-model="this.datosOficio.apellidoMaterno" type="text" class="form-control" name="apellidoMaterno" placeholder="Apellido Materno">
        </div>
        <div class="mb-3">
            <label for="">No. Establecimiento (opcional)</label>
            <input v-model="this.datosOficio.noEstablecimiento" type="text" class="form-control" name="noEstablecimiento" placeholder="No. Establecimiento">
        </div>
        <div class="mb-3">
            <label for="">Horario - ej. 7:00 - 16:00</label>
            <input v-model="this.datosOficio.horario" type="text" class="form-control" name="horario" placeholder="Horario">
        </div>
        <div class="mb-3">
            <label for="">Costo</label>
            <input v-model="this.datosOficio.costo" type="text" class="form-control" name="costo" placeholder="Costo">
        </div>
        <div class="mb-3">
            <label for="">Referencia (opcional)</label>
            <textarea v-model="this.datosOficio.referencia" class="form-control" name="referencia" placeholder="Referencia"></textarea>
        </div>
        <div class="mb-3">
            <label for="">Información del oficio</label>
            <textarea v-model="this.datosOficio.informacionOficio" class="form-control" name="informacionOficio" placeholder="Información del oficio"></textarea>
        </div>
        <div class="mb-3">
            <label for="">Teléfono</label>
            <input v-model="this.datosOficio.telefono" type="text" class="form-control" name="telefono" placeholder="Teléfono">
        </div>
        <div class="mb-3">
            <label for="">Email</label>
            <input v-model="this.datosOficio.email" type="text" class="form-control" name="email" placeholder="Email">
        </div>
        <div class="mb-3">
            <label for="">Password</label>
            <input v-model="this.datosOficio.password" type="text" class="form-control" name="password" placeholder="Password">
        </div>
        <div class="mb-3 text-end">
            <input type="submit" class="btn btn-primary btn-sm" value="Registrar datos">
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            datosOficio: {
                selectedFile: null,
                imagen: '',
                razonSocial: '',
                nombrePropietario: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                noEstablecimiento: '',
                horario: '',
                costo: '',
                referencia: '',
                informacionOficio: '',
                telefono: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        registrarOficio(){
            console.log(this.datosOficio)
            // const datosUsuario = await fetch('http://localhost/LocalServicesAPI/api/?registrarOficio=1', {
                // method: "POobjectST",
                // body: JSON.stringify(this.datosUsuario)
            // }).then(r => r.json())
            // .catch(console.log)
        
            // typeof datosUsuario === 'object' ? window.location.href = '/' : console.log('error');
            const formData = new FormData()
            formData.append('image_to_upload', this.datosOficio.selectedFile, this.datosOficio.selectedFile.name)

            fetch('http://localhost/LocalServicesAPI/api/registrarOficio.php?insertar=1', {
                method: 'POST',
                body: formData
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
           
        },
        createImage(file){
            const reader = new FileReader()
            reader.onload = (e) => { this.datosOficio.imagen = e.target.result  }
            reader.readAsDataURL(file)
        },
        onFileChange(e){
            this.datosOficio.selectedFile = e.target.files[0]
            this.createImage(this.datosOficio.selectedFile)
        }
    }
}
</script>

<style>

</style>