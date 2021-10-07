<template>
  <v-app>
    <v-app-bar app color="light">
      <!-- <svg preserveAspectRatio="xMinYMax meet" focusable="false" width="30.77319587628866" height="30" viewBox="0 0 155 97"><path d="m13.56963,13.7495c-6.79091,7.34631 -12.40474,13.81108 -12.40474,14.20287c0,0.39181 22.09314,0.68567 49.16629,0.68567l49.07573,0l13.12911,-14.20287l13.12911,-14.20287l-49.8001,0l-49.8001,0l-12.4953,13.51722l0,-0.00003z" style="stroke-width: 0; fill: rgb(56, 113, 167);"></path><path d="m114.78879,17.24615l-12.58585,13.61516l7.1531,17.23935l7.06257,17.14141l18.92405,0c10.32221,0 18.8335,-0.09796 18.8335,-0.29385c0,-0.48975 -26.1677,-60.72954 -26.52989,-61.02339c-0.18108,-0.19589 -5.88546,5.7791 -12.85748,13.32133z" style="stroke-width: 0; fill: rgb(33, 98, 157);"></path><path d="m1.63389,32.42883c0,0.48975 22.6364,60.43568 23.27022,61.6111c0.27163,0.39181 6.3382,-5.48525 13.4913,-13.22337l12.85748,-13.90901l-8.05857,-17.5332l-8.05857,-17.43527l-16.75094,0c-9.23566,0 -16.75094,0.19589 -16.75094,0.48975l0.00003,0z" style="stroke-width: 0; fill: rgb(1, 65, 114);"></path><path d="m41.7482,81.73613c-6.79091,7.34631 -12.40474,13.81105 -12.40474,14.20287c0,0.39181 22.09314,0.68564 49.16629,0.68564l49.07573,0l13.12911,-14.20287l13.12911,-14.20287l-49.8001,0l-49.8001,0l-12.4953,13.51722z" style="stroke-width: 0; fill: rgb(79, 144, 194);"></path></svg> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
     
      <v-card class="mx-auto" max-width="434" tile>
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    Marcus Obrien
                  </v-list-item-title>
                  <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.link"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>
    <v-main>
        <v-container class="pa-4 pa-sm-6 pa-md-8" fluid>
            <router-view class="pa-0"/>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        action: "mdi-book-plus-outline",
        items: [
          { title: "Registrar", link: "/cotizador/maestro" },
          { title: "Informe", link: "/cotizador/informe" },
        ],
        title: "Cotizaciones",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
