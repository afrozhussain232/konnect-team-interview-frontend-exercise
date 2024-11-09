<template>
  <ul
    class="catalog"
  >
    <ListItem
      v-for="i in 9"
      :key="i"
    />
  </ul>
</template>
<script lang="ts" setup>
import ListItem from './ListingItemSkeleton.vue'


</script>
  <style scoped lang="scss">
  .catalog{
      column-gap: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 40px;

  }
  </style>