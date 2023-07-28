<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App" />
    <HeroBeranda />
    <MentorBeranda />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import HeroBeranda from '@/components/layout/beranda/HeroBeranda.vue';
import MentorBeranda from '@/components/layout/beranda/MentorBeranda.vue';
</script>
