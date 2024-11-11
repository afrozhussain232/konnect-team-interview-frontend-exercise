<template>
  <div class="catalog-listing-wrapper">
    <ul
      v-if="services.length"
      class="catalog"
      data-testid="service-catalog-listing"
    >
      <ListItem
        v-for="service in GetFilteredServices"
        :key="service.id"
        :service="service"
      />
    </ul>
    <div
      v-else
      class="no-results"
      data-testid="no-results"
    >
      <div class="title">
        No Services Found
      </div>
      <div class="description">
        Please try a different search term, or create a new service. <a href="/">Learn More</a>
      </div>
    </div>
    <Pagination
      v-if="services.length"
      :initial-page="1"
      :items-per-page="9"
      :total-items="services?.length"
      @page-changed="handlePageChanged"
    />
  </div>
</template>
<script lang="ts" setup>
import ListItem from './ServiceCatalogListItem.vue'
import Pagination from '../common/BottomPagination.vue'
import { ref,computed , toRefs, type PropType } from 'vue'
import type { Service } from '@/types/services'
const props = defineProps({
  services:{
    type: Array as PropType<Service[]>,
    required: true,
  },
})
const {
  services,
} = toRefs(props)
const pageInfo = ref({
  currentPage: 1,
  itemsPerPage: 9,
})
// Handle Page Change
const handlePageChanged = (page: number) => {
  // Update the current page
  pageInfo.value.currentPage = page
}
// Get the filtered services based on the current page
const GetFilteredServices = computed(() => {
  const start = (pageInfo.value.currentPage - 1) * pageInfo.value.itemsPerPage
  const end = pageInfo.value.currentPage * pageInfo.value.itemsPerPage
  return services.value.slice(start, end)
})

</script>
<style scoped lang="scss">
.catalog-listing-wrapper{
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 30px;
  row-gap: 20px;
}
.catalog{
    column-gap: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    @media screen and (max-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }
   @media (max-width: 768px) {
    grid-template-columns: 1fr;
   }
}
.no-results{
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  row-gap: 10px;
  .title{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .description{
    color: var(--font-color-light);
    font-size: 1.3rem;
    text-align: center;
    a{
      color: var(--primary-color);
      font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>