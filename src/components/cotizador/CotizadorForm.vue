<template>
  <v-card class="pa-4 align-self-center" style="width:800px;">
    <div class="d-flex justify-end" style="width: 100%">
      <v-btn color="error" @click="salir">
        Salir
      </v-btn>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="cliente"
              :counter="50"
              :rules="clienteValidaciones"
              label="Cliente"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="descripcion"
              :counter="200"
              :rules="descripcionValidaciones"
              label="Descripción"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.trim="hdSolicita"
              :rules="hdSolicitaValidaciones"
              label="HD solicita"
              type="number"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.trim="hdAprueba"
              :rules="hdApruebaValidaciones"
              label="HD aprueba"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.trim="hdDesarrollo"
              :rules="hdDesarrolloValidaciones"
              label="HD desarrollo"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.trim="hdProduccion"
              :rules="hdProduccionValidaciones"
              label="HD producción"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model.trim="ot"
              :rules="otValidaciones"
              label="OT"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model.trim="tfs"
              :rules="tfsValidaciones"
              label="TFS"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="linkCarpeta"
              :counter="500"
              :rules="linkCarpetaValidaciones"
              label="Link carpeta"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="guardar"
            >
              Guardar
            </v-btn>
          </v-col>
          <!--    <v-col cols="12" sm="6" md="4">
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-btn color="warning" @click="resetValidation">
              Reset Validation
            </v-btn>
          </v-col> -->
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
// se pueden factorizar las reglas para reutilizarlas en lugares donde se necesite sin repetir código
var reglaTextoObligatorio = [
  (v) => (!!v && v.trim() != "") || "El campo no puede ser vacío.",
];

var reglaEnteroPositivo = [
  (v) => {
    return v ? v > 0 || "No puede ser un valor negativo." : true;
  },
  (v) => v % 1 <= 0 || "No puede ser decimal",
];

export default {
  props: ["datos"],
  data: () => ({
    valid: true,
    cliente: "",
    clienteValidaciones: [
      ...reglaTextoObligatorio,
      (v) => (v && v.length <= 50) || "El máximo de caracteres es 50.",
    ],
    descripcion: "",
    descripcionValidaciones: [
      ...reglaTextoObligatorio,
      (v) => (v && v.length <= 200) || "El máximo de caracteres es 200.",
    ],
    hdSolicita: "",
    hdSolicitaValidaciones: [
      (v) => (!!v && v.trim() != "") || "Debe indicar un HD válido.",
      ...reglaEnteroPositivo,
    ],
    hdAprueba: "",
    hdApruebaValidaciones: [
      (v) => {
        return v ? !!v || "Debe indicar un HD válido." : true;
      }, // valida si v tiene algun valor, si es asi, valida los datos, sino retorna true ya que no es obligatorio
      ...reglaEnteroPositivo,
    ],
    hdDesarrollo: "",
    hdDesarrolloValidaciones: [
      (v) => {
        return v ? !!v || "Debe indicar un HD válido." : true;
      }, // valida si v tiene algun valor, si es asi, valida los datos, sino retorna true ya que no es obligatorio
      ...reglaEnteroPositivo,
    ],
    hdProduccion: "",
    hdProduccionValidaciones: [
      (v) => {
        return v ? !!v || "Debe indicar un HD válido." : true;
      }, // valida si v tiene algun valor, si es asi, valida los datos, sino retorna true ya que no es obligatorio
      ...reglaEnteroPositivo,
    ],
    ot: "",
    otValidaciones: [
      (v) => {
        return v ? !!v || "Debe indicar una OT válida." : true;
      }, // valida si v tiene algun valor, si es asi, valida los datos, sino retorna true ya que no es obligatorio
      ...reglaEnteroPositivo,
    ],
    tfs: "",
    tfsValidaciones: [
      (v) => {
        return v ? !!v || "Debe indicar un código de TFS válido." : true;
      }, // valida si v tiene algun valor, si es asi, valida los datos, sino retorna true ya que no es obligatorio
      ...reglaEnteroPositivo,
    ],
    linkCarpeta: "",
    linkCarpetaValidaciones: [
      ...reglaTextoObligatorio,
      (v) => (v && v.length <= 500) || "El máximo de caracteres es 500.",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    guardar() {
      this.$refs.form.validate();
      alert(123)
    },
    /*  reset() {
      this.$refs.form.reset();
    },
   */
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    salir() {
      this.resetValidation();
      this.resultadoModal();
    },
    resultadoModal() {
      this.$emit("resultado-modal", {
        //siempre debe ser kebab case para los emit
        datos: {},
        cerrarModal: true,
      });
    },
  }
};
</script>

<style lang="scss" scoped></style>
