<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <ul>
    <li><RouterLink to="/table">表格</RouterLink></li>
  </ul>

  <RouterView />
</template>

<style scoped></style>
