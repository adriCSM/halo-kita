<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html,
body,
main {
  font-family: 'Poppins', sans-serif;
}

.router-link-active {
  background-color: #fec395;
  width: 115px;
  height: 32px;
  border-radius: 10px;
  padding: 5px;
  color: #000000;
}
</style>
