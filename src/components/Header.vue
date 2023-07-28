<template>
  <v-container
    elevation="0"
    style="
      z-index: 2;
      padding: 0 54.5px 0 54.5px;
      background-color: transparent;
      max-width: 100vw;
      position: fixed;
    "
  >
    <v-row class="text-center bg-white mt-5 rounded-xl pa-2">
      <v-col cols="auto py-0">
        <v-img
          :src="require('../assets/halokak.svg')"
          class="my-3 ms-8"
          contain
          height="49.32px"
          width="227px"
        />
      </v-col>

      <v-col cols="auto py-0" align-self="center " class="font-weight-medium">
        <v-list>
          <router-link to="/" class="text-decoration-none">
            <v-list-items class="mx-4 text-black"> Beranda </v-list-items>
          </router-link>
          <router-link to="/riwayat" class="text-decoration-none">
            <v-list-items class="mx-4 text-black"> Riwayat </v-list-items>
          </router-link>
          <router-link to="/artikel" class="text-decoration-none">
            <v-list-items class="mx-4 text-black"> Artikel </v-list-items>
          </router-link>
          <router-link to="/aplikasi" class="text-decoration-none">
            <v-list-items class="mx-4 text-black"> Aplikasi </v-list-items>
          </router-link>
        </v-list>
      </v-col>
      <v-spacer></v-spacer>

      <v-col align-self="center" cols="auto py-0">
        <v-btn
          variant="outlined"
          class="rounded-lg me-8"
          color="#6AC8D2"
          width="116.55px"
          height="37px"
          >Login</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
};
</script>
