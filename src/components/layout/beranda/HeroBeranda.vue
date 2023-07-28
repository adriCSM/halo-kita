<template>
  <div class="hero pt-15" style="background-color: #f8f7f3">
    <v-row class="mt-15 pt-5">
      <v-col md="8" class="ps-3 ps-md-15"
        ><p class="heading">
          <span style="color: #6ac8d2">Mentoring</span> Jadi Lebih
          <span style="color: #fec395">Mudah</span> dan
          <span style="color: #d00a0a">Cepat</span>
        </p>
        <p class="mt-5 text">
          Hubungi tentor, Konsul terkait pekerjaan, Update seputar pekerjaan semua hanya dengan Halo
          Kak
        </p>
        <v-row class="mt-10 d-flex">
          <v-col cols="12" md="3" v-for="i in 4" :key="i">
            <v-card
              class="rounded-lg me-md-5"
              elevation="0"
              height="97px"
              style="border: 1px solid rgba(106, 200, 210, 0.8)"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="auto mx-auto">
        <v-img src="../../../assets/image1.svg" width="291.84px" height="290.47px"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.hero {
  padding: var(--px);
  min-height: 572px;
}

.heading {
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  max-width: 458px;
  color: #333333;
}
.text {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  max-width: 667.17px;
  color: #53565a;
}
</style>
