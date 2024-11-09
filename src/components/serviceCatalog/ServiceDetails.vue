<template>
  <div
    v-if="service"
    class="service-details"
  >
    <div class="page-header">
      <div class="left">
        <router-link
          class="back"
          to="/"
        >
          <Back :size="18" />
          back to services
        </router-link>
        <h2 class="service-name">
          {{ service.name }}
        </h2>
        <p class="service-description">
          {{ service.description }}
        </p>
      </div>
    </div>
    <div class="service-details-bar">
      <div class="details-item">
        <div class="title">
          Service Status
        </div>
        <div class="value">
          {{ getStatusMessage }}
        </div>
      </div>
      <div class="details-item">
        <div class="title">
          Service Type
        </div>
        <div class="value">
          {{ service.type }}
        </div>
      </div>
    </div>
    <div
      v-if="service.versions && service.versions.length"
      class="versions"
    >
      <div class="title">
        Versions({{ service.versions.length }})
      </div>
      <div
        v-for="version in service.versions"
        :key="version.id"
        class="version-card"
      >
        <h4 class="version-name">
          {{ version.name }}
        </h4>
        <p class="version-description">
          {{ version.description }}
        </p>
        <span class="version-type">
          <div class="version-type-pill">
            HTTP
          </div>
        </span>
        <div
          v-if="version.developer"
          class="version-publisher"
        >
          <UserAvatar
            :size="30"
            :user="version.developer"
          />
          <div class="publisher-info">
            <div class="publisher-name">
              <span>
                {{ version.developer.name }}
              </span>
            </div>
            <p class="published-date">
              2 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useServicesStore } from '@/stores/services'
import { useRoute } from 'vue-router'
import {
  SERVICE_CATALOG_STATUS,
} from '@/constants/serviceCatalog'
import { onMounted ,computed,ref } from 'vue'
import UserAvatar from '../common/UserAvatar.vue'
import Back from '@/assets/icons/ArrowBack.vue'
import type { Service } from '@/types/services'

const route = useRoute()

const serviceStore = useServicesStore()
const service = ref<Service | null>(null)
const getStatusType = computed(()=>{
  if (!service.value) return SERVICE_CATALOG_STATUS.NOT_CONFIGURED
  else if (service.value.published) return SERVICE_CATALOG_STATUS.PUBLISHED
  else if (service.value.configured) return SERVICE_CATALOG_STATUS.UNPUBLISHED
  else return SERVICE_CATALOG_STATUS.NOT_CONFIGURED
})
const getStatusMessage = computed(() => {
  const StatusMessages = {
    [SERVICE_CATALOG_STATUS.PUBLISHED]: 'Published to Portal',
    [SERVICE_CATALOG_STATUS.UNPUBLISHED]: 'Unpublished',
    [SERVICE_CATALOG_STATUS.NOT_CONFIGURED]: 'In Progress',
  }
  return StatusMessages[getStatusType.value]
})



onMounted(() => {
  const serviceId = route.params.id
  if (serviceId) {
    const value = serviceStore.getServiceById(String(serviceId))
    if (value !== null && value !== undefined) {
      service.value = value
    }

  }

})

</script>
<style lang="scss" scoped>
.service-details{
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  max-width: 1366px;
  padding: 0 20px;
  row-gap: 40px;
  .page-header{
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      flex-direction: column;
      .back{
        align-items: center;
        color: var(--font-color-light);
        column-gap: 10px;
        cursor: pointer;
        display: flex;
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .service-name{
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .service-description{
        color: var(--font-color-light);
        font-size: 1.5rem;
      }
    }
    .right{
      .service-status{
        font-size: 1.3rem;

      }
    }
  }
  .service-details-bar{
    column-gap: 30px;
    display: flex;
  }
  .details-item{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .title{
      font-size: 1.4rem;
      font-weight: 600;
    }
    .value{
      color: var(--font-color-light);
      font-size: 1.3rem;
    }
  }
  .versions{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .title{
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
      .version-card{
          align-items: center;
          background-color: white;
          border: solid var(--border-color) 1px;
          border-bottom: solid var(--border-color) 0.5px;
        border-radius: 5px;
          column-gap: 10px;
          display: grid;
          grid-template-columns: 60px 1fr 0.4fr 150px;
          padding: 15px 15px;
          padding-right: 20px;

          &:last-child{
              border-bottom: none;
          }
          .version-name{
              font-size: 1.3rem;
              font-weight: 600;
          }
          .version-description{
              color:var(--font-color-light);
              font-size: 1.2rem;
              line-height: 1.6rem
          }
          .version-type{
              display: flex;
              .version-type-pill{
                  background-color: var(--secondary-color-light);
                  border-radius: 5px;
                  color: var(--primary-color);
                  font-size: 1rem;
                  font-weight: 600;
                  padding: 5px 10px;
              }
          }
          .version-publisher{
              column-gap: 10px;
              display: flex;
              justify-content: flex-end;
              .publisher-info{
                  display: flex;
                  flex-direction: column;
                  .publisher-name{
                      max-width: 70px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 70px;

                      span{
                          font-size: 1.3rem;
                          font-weight: 600;
                          text-overflow: ellipsis;
                          white-space: nowrap;
                      }
                  }
                  .published-date{
                      color: var(--font-color-light);
                      font-size: 1.2rem;
                  }

              }

          }
      }

  }
}
</style>