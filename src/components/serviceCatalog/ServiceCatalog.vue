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
    <Listing :services="services" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import useServices from '@/composables/useServices'
import Button from '../common/button.vue'
import Add from '@/assets/icons/add.vue'
import Search from '@/assets/icons/search.vue'
import Listing from './ServiceCatalogListing.vue'

// Import services from the composable
const { services, loading } = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')


</script>

<style lang="scss" scoped>
.service-catalog {
  margin: 3rem auto;
  max-width: 1366px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--font-color-light);
        a{
          color:var(--primary-color-dark)
        }
      }
    }
    .header-right{
      display: flex;
      column-gap: 24px;
      .search-input {
        padding: 8px 16px;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 4px;
        column-gap: 5px;
       border: solid 1px var(--border-color);
       input{
        font-size: 1.4rem;
       }
      }
      .button-text{
        display: flex;
        align-items: center;
        display: flex;
        column-gap: 5px;
      }
    }




  }
}
</style>
