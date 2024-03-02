<template>
  <div>
    <router-link to="/token">Generar Token</router-link>
    <router-link to="/estudiante">Generar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div a{
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: solid 2px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: aqua;
}

.router-link-exact-active{
    background: azure;
}
</style>