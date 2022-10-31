<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="main-container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>