<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <h1 class="title is-1">Task Manager</h1>
        </RouterLink>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- Home -->
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <!-- Create task -->
          <RouterLink to="/tasks/new" class="navbar-item">Create task</RouterLink>
          <!-- Edit task -->
          <RouterLink to="/tasks/edit" class="navbar-item">Edit task</RouterLink>
          <!-- Delete task -->
          <RouterLink to="/tasks/delete" class="navbar-item">Delete task</RouterLink>
          <!-- About app -->
          <RouterLink to="/about" class="navbar-item">About</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/navbar.scss";
</style>
