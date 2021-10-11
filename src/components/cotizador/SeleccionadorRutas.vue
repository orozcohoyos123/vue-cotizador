<template>
  <v-container class="d-flex flex-column justify-center">
    <div class="d-sm-flex flex-row-reverse justify-space-between">
      <v-btn color="error" dark @click="salir">
        Salir
      </v-btn>
      <h1>Asignar opción a cotización</h1>
    </div>
    <v-divider></v-divider>
    <div class="d-flex justify-start ml-4" style="width: 19%">
      <v-select :items="items" label="Standard"></v-select>
    </div>
    <div class="d-flex justify-end">
      <v-btn color="green" dark>
        Guardar
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["datos"],
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  methods: {
    salir() {
      this.resultadoModal();
    },
    resultadoModal() {
      this.$emit("resultado-modal", {
        //siempre debe ser kebab case para los emit
        datos: {},
        cerrarModal: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
