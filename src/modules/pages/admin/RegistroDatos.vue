<template>
  <div class="container-fluid p-0 m-0 row p-5 bg-orange-local d-flex flex-column justify-content-center align-items-center">
    <form class="col-4 bg-white rounded-1 py-2" @submit.prevent="registrarOficio">
        <h4 class="h4 text-center mb-3">Registro de datos - informaciónOficios</h4>
        <div class="mb-3">
            <label for="">Logo - de preferencia (.ico, .jpg, .jpeg, .png)</label>
            <input v-on:change="onFileChange" type="file" class="form-control" name="logoImg" placeholder="Seleccionar archivo">
            <img :src="url" style="width: 200px" v-if="url" class="p-2">
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
        <p class="mb-2" v-if="mensaje">{{mensaje}}</p>
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
            url: null,
            mensaje: '',
            datosOficio: {
                imagen: null,
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
            // console.log(this.datosOficio)


            // fetch('http://localhost/LocalServicesAPI/api/?registrarOficio=1', {
            //     method: "POST",
            //     body: JSON.stringify(this.datosOficio)
            // }).then(r => r.json())
            // .catch(console.log)
        
            const formData = new FormData()

            formData.append('image', this.datosOficio.imagen)
            formData.append('razonSocial', this.datosOficio.razonSocial)
            formData.append('nombrePropietario', this.datosOficio.nombrePropietario)
            formData.append('apellidoPaterno', this.datosOficio.apellidoPaterno)
            formData.append('apellidoMaterno', this.datosOficio.apellidoMaterno)
            formData.append('noEstablecimiento', this.datosOficio.noEstablecimiento)
            formData.append('horario', this.datosOficio.horario)
            formData.append('costo', this.datosOficio.costo)
            formData.append('referencia', this.datosOficio.referencia)
            formData.append('informacionOficio', this.datosOficio.informacionOficio)
            formData.append('telefono', this.datosOficio.telefono)
            formData.append('email', this.datosOficio.email)
            formData.append('password', this.datosOficio.password)

            fetch('http://localhost/LocalServicesAPI/api/?registrarOficio=1', {
                method: 'POST',
                body: formData
            })
                .then(() =>{
                    this.mensaje = 'Exito';
                }).catch(function(error){
                    console.log(error);
                })
           
        },
        // createImage(file){
        //     const reader = new FileReader()
        //     reader.onload = (e) => { this.datosOficio.imagen = e.target.result  }
        //     reader.readAsDataURL(file)
        // },
        onFileChange(e){
            const file = e.target.files[0]
            this.url = URL.createObjectURL(file)
            this.datosOficio.imagen = file
        },
        leerServicios(){
            fetch('http://localhost/LocalServicesAPI/api/?leerServicios=1')
                .then(r => r.json())
                .catch(console.log)
        }
    }
}
</script>

<style>

</style>