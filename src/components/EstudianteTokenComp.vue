<template>
  <div class="container">
    <form class="formulario">
      <p type="Semilla"><input type="text" v-model="semilla" /></p>
      <p type="Tiempo de vigencia"><input type="text" v-model="tiempo" /></p>
      <p type="Token"><input type="text" v-model="token" id="token" /></p>

      <div class="boton">
        <button @click="generar">Generar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { consultarTokenFachada } from "../helpers/clienteToken.js";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },
  methods: {
    async generar() {
      const usuario = {
        nombre: "Lenin",
        password: "1234",
      };
      await consultarTokenFachada(usuario);
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

#token {
  height: 200%;
}

button {
  border-radius: 5px;
  background: rgb(0, 176, 240);
  font-size: 17px;
  width: 65%;
  padding: 10px;
  margin-top: 85px;
  color: white;
}
</style>