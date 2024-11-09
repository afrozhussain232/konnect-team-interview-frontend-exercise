<template>
  <div class="service-catalog">
    <div class="header">
      <div class="header-left">
        <h1>Service Hub</h1>
        <p>
          Organize services, manage and track versioning and API service documentation.

          <a href="/">
            Learn more
          </a>
        </p>
      </div>
      <div class="header-right">
        <div class="search-input">
          <Search />
          <input
            v-model="searchQuery"
            data-testid="search-input"
            placeholder="Search services"
          >
        </div>

        <Button type="submit">
          <div class="button-text">
            <Add />
            Service Package
          </div>
        </Button>
      </div>
    </div>
    <ListingSkeleton v-if="loading" />
    <Listing
      v-else
      :services="services"
    />
  </div>
</template>

<script lang="ts" setup>
import useServices from '@/composables/useServices'
import Button from '@/components/common/BaseButton.vue'
import Add from '@/assets/icons/NewAdd.vue'
import Search from '@/assets/icons/InputSearch.vue'
import Listing from './ServiceCatalogListing.vue'
import ListingSkeleton from './Skeletons/ListingSkeleton.vue'

// Import services from the composable
const { services, searchQuery,loading } = useServices()



</script>

<style lang="scss" scoped>
.service-catalog {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  max-width: 1366px;
  padding: 0 20px;
  row-gap: 20px;

  .header{
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .header-left{
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      h1 {
        font-size: 3rem;
        font-weight: 700;
      }
      p{
        color: var(--font-color-light);
        font-size: 1.5rem;
        font-weight: 400;
        a{
          color:var(--primary-color-dark)
        }
      }
    }
    .header-right{
      column-gap: 24px;
      display: flex;
      .search-input {
        align-items: center;
        background-color: white;
       border: solid 1px var(--border-color);
        border-radius: 4px;
        column-gap: 5px;
        display: flex;
        padding: 8px 16px;
       input{
        font-size: 1.4rem;
       }
      }
      .button-text{
        align-items: center;
        column-gap: 5px;
        display: flex;
      }
    }




  }
}
</style>
