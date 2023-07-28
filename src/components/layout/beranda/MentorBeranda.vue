<template>
  <div style="min-height: 572px" class="mentor">
    <v-row>
      <v-col class="ps-3 ps-md-15">
        <div class="heading pt-15">Pilih Mentor Terbaikmu</div>
        <v-row>
          <v-col md="8">
            <div class="heading-dua py-10">Kategori</div>
            <v-row>
              <v-col md="3" v-for="i in 4" :key="i">
                <v-card height="101.25px" elevation="0">
                  <v-img :src="require(`../../../assets/image${i + 1}.svg`)" fit />
                </v-card>
              </v-col>
            </v-row>
            <div class="heading-dua py-10">Direkomendasikan</div>
            <v-row>
              <v-col md="3" v-for="i in 4" :key="i">
                <v-card height="101.25px" elevation="0">
                  <v-img :src="require(`../../../assets/image${i + 1}.svg`)" fit />
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-img src="../../../assets/image6.svg" width="269.51px" height="460.85px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.heading,
.heading-dua {
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
}
.heading-dua {
  font-size: 24px;
}

.mentor {
  padding: var(--px);
}
</style>
