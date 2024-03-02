<template>
  <h1>ESTUDIANTE</h1>
  <EstudianteGuardarComp @obtenerEstudiante="manejoEstudiante($event)"/>
  <EstudianteTableComp :estudiantes="estudiantes" />
</template>

<script>
import EstudianteGuardarComp from "../components/EstudianteGuardarComp.vue";
import EstudianteTableComp from "../components/EstudianteTableComp.vue";

export default {
  components: {
    EstudianteGuardarComp,
    EstudianteTableComp,
  },
  data() {
    return {
      estudiante: null,
      estudiantes: [],
    };
  },
  methods: {
    manejoEstudiante(est) {
      this.estudiantes.push(est);
    },
  },
};
</script>

<style>
h1 {
  margin: 25px;
  color: rgb(0, 110, 200);
  font-size: 20px;
  font-weight: bold;
}
</style>