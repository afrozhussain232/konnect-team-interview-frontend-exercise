<template>
  <ul
    v-if="services.length"
    class="catalog"
  >
    <ListItem
      v-for="service in services"
      :key="service.id"
      :service="service"
    />
  </ul>
  <div
    v-else
    data-testid="no-results"
  >
    No services
  </div>
</template>
<script lang="ts" setup>
import ListItem from './ServiceCatalogListItem.vue'
defineProps({
  services: Array,
})
</script>
<style scoped lang="scss">
.catalog{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
    li{
        height: 230px;
    }
}
</style>