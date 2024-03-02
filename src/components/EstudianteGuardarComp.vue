<template>
  <div class="container">
    <form class="formulario">
      <p type="Token"><input type="text" v-model="token" id="token" /></p>
      <p type="Nombre"><input type="text" v-model="nombre" /></p>
      <p type="Apellido"><input type="text" v-model="apellido" /></p>
      <p type="Cedula"><input type="text" v-model="cedula" /></p>

      <div class="boton">
        <button @click="insertar">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  insertarFachada,
  consultarEstudianteFachada,
} from "../helpers/clienteEstudiantes";

export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
  methods: {
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      await insertarFachada(estuBody);

      setTimeout(async () => {
        const estu = await consultarEstudianteFachada(this.cedula);
        this.$emit("obtenerEstudiante", estu);
      }, 2000);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-content: center;
}

p:before {
  content: attr(type);
  display: block;
  margin: 3px 2px;
  font-size: 17px;
  color: rgb(0, 110, 200);
  text-align: left;
}

.formulario {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 5px;
  height: 50%;
  width: 100%;
}


button {
  border-radius: 5px;
  background: rgb(0, 176, 240);
  font-size: 17px;
  width: 65%;
  padding: 10px;
  margin-top: 20px;
  color: white;
}
</style>