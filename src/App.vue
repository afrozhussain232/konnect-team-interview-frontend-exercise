<template>
  <TopNavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TopNavBar from './components/base/TopNavBar.vue'

</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  overflow: auto;
}

</style>
