<template>
  <v-container class="d-flex flex-column justify-center">
    <div class="d-sm-flex flex-row-reverse justify-space-between">
      <v-btn color="primary" dark @click="abrirModal(-1)">
        Nueva
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="1000px">
        <v-card>
          <component
            :is="contenidoModal"
            v-bind="datosModal"
            @resultado-modal="finalizarModal"
          ></component>
        </v-card>
      </v-dialog>
      <h1>Opciones asociadas</h1>
    </div>
    <v-divider></v-divider>
    <v-card class="pa-4 mt-4 align-self-center" style="width:100%;">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Ruta opción
              </th>
              <th class="text-left">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in datos" :key="index">
              <td>{{ item.rutaOpcion }}</td>
              <td>
                <v-icon small>
                  mdi-delete
                </v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
//import axios from "axios";
import SeleccionadorRutas from "../cotizador/SeleccionadorRutas.vue";

export default {
  components: {
    SeleccionadorRutas,
  },
  data: () => ({
    dialog: false,
    contenidoModal: "seleccionador-rutas",
    datosModal: {},
    datos: [
      {
        rutaOpcion:
          "\\Financiero\\Activos Fijos\\Informes\\Informe detallado de depreciación",
      },
      {
        rutaOpcion:
          "\\Financiero\\Activos Fijos\\Informes\\Informe general de depreciación",
      },
    ],
  }),
  methods: {
    abrirModal(datos) {
      console.log(datos);
      /* if (datos.idElemento >= 0) {
          this.datosModal = { id: datos.idElemento };
        } else {
          this.datosModal = {  };
        } */

      this.dialog = true;
    },
    finalizarModal(datos) {
      if (!datos || datos.cerrarModal) {
        this.dialog = false;
      }
    },
  },
  mounted() {
    /* axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        alert(response);
      }); */
  }  
};
</script>
