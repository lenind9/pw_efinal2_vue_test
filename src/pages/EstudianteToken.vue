<template>
  <h1>TOKEN</h1>
  <EstudianteTokenComp />
</template>

<script>
import EstudianteTokenComp from "../components/EstudianteTokenComp.vue";

export default {
  components: {
    EstudianteTokenComp,
  },
};
</script>

<style scoped>
h1 {
  margin: 25px;
  color: rgb(0, 110, 200);
  font-size: 20px;
  font-weight: bold;
}
</style>