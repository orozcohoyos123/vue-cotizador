<template>
  <v-container class="d-flex flex-column justify-center">
    <div class="d-sm-flex flex-row-reverse justify-space-between">
      <v-btn color="primary" dark @click="abrirModal('cotizador-form', { idElemento: -1 }, true)">
        Nueva
      </v-btn>
      <v-dialog v-model="dialog" :persistent='esPersistente' max-width="600px">
        <v-card>
          <component :is="contenidoModal" v-bind="datosModal" @resultado-modal="finalizarModal"></component>
          <!--  <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump',
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>
      <h1>Cotizaciones</h1>
    </div>
    <v-divider></v-divider>
    <v-card class="pa-4 mt-4 align-self-center" style="width:100%;">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Cliente
              </th>
              <th class="text-left">
                Descripción
              </th>
              <th class="text-left">
                Help desk solicita
              </th>
              <th class="text-left">
                Help desk aprueba
              </th>
              <th class="text-left">
                Help desk desarrollo
              </th>
              <th class="text-left">
                Help desk producción
              </th>
              <th class="text-left">
                OT
              </th>
              <th class="text-left">
                TFS
              </th>
              <th class="text-left">
                Link carpeta
              </th>
              <th class="text-left">
                Opciones asociadas
              </th>
              <th class="text-left">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in datos" :key="index">
              <td>{{ item.cliente }}</td>
              <td>{{ item.descripcion }}</td>
              <td>{{ item.hdSolicita }}</td>
              <td>{{ item.hdAprueba }}</td>
              <td>{{ item.hdDesarrollo }}</td>
              <td>{{ item.hdProduccion }}</td>
              <td>{{ item.ot }}</td>
              <td>{{ item.tfs }}</td>
              <td>{{ item.linkCarpeta }}</td>
              <td>
                <v-btn color="primary" dark @click="abrirModal('cotizador-rutas', {}, false)">
                  Ver
                </v-btn>
              </td>
              <td>
                <v-btn color="primary" dark @click="abrirModal('cotizador-form', { idElemento: index}, true)">
                  Editar
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import CotizadorForm from '../components/cotizador/CotizadorForm.vue';
import CotizadorRutas from '../components/cotizador/CotizadorRutasInforme.vue';

export default {
  name: 'CotizadorMaestro',
  components: {
    CotizadorForm,
    CotizadorRutas
  },
  data: () => ({
    dialog: false,
    esPersistente: true,
    /*  contenidoModal:  {
      render: h => h(CotizadorForm, { props: { getBOByNr: true } }) // de esta forma se peude enviar todo el componente de una vez incluyendo sus props
    }, */
    contenidoModal: 'cotizador-form',
    datosModal: {},
    datos: [
      {
        cliente :  "Apiros",
        descripcion: "Desarrollo activos fijos",
        hdSolicita: "226841",
        hdAprueba: "352055",
        hdDesarrollo: "368500",
        hdProduccion: "378951",
        ot: "8902302",
        tfs: "55987415",
        linkCarpeta: "\\cumbal\\clientes\\apiros\\requerimientos\\226841"
      },
      {
        cliente :  "Apiros",
        descripcion: "Desarrollo activos fijos",
        hdSolicita: "226841",
        hdAprueba: "352055",
        hdDesarrollo: "368500",
        hdProduccion: "378951",
        ot: "8902302",
        tfs: "55987415",
        linkCarpeta: "\\cumbal\\clientes\\apiros\\requerimientos\\226841"
      },
    ],
  }),
  methods: {
    abrirModal(componente, datos, modalPersistente) {
      this.contenidoModal = componente;
      this.esPersistente = modalPersistente;
      
      if (componente == 'cotizador-form') {   
        if (datos.idElemento >= 0) {
          this.datosModal = { id: datos.idElemento };
        } else {
          this.datosModal = {  };
        }
      }
      this.dialog = true;
    },
    finalizarModal(datos){
      if (!datos || datos.cerrarModal) {
        this.dialog = false;
      }
    }
  },
};
</script>
