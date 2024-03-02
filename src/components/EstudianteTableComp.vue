<template>
  <div class="container">
    <table>

      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cédula</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="estudiante in estu" :key="estudiante.id">
          <th scope="row">{{ estudiante.id }}</th>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
    props: {
        estudiantes: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            estu: null
        }
    },
    mounted() {
        this.estu = this.estudiantes;
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

table {
  color: rgb(0, 110, 200);
}

table {
  margin-top: 20px;
  table-layout: fixed;
  width: 75%;
  border-collapse: collapse;
  border: 1px solid black;
}

</style>