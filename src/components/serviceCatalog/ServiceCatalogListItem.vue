<template>
  <div
    class="service slide-top-to-bottom"
    data-testid="service-catalog-item"
    @click="handleGoToService"
  >
    <div class="header">
      <span class="service-status">
        <component
          :is="getStatusIcon"
          :class="[getStatusType]"
        />
        <p>
          {{ getStatusMessage }}
        </p>
      </span>
      <div
        v-if="service.versions.length"
        class="service-versions"
        @click.stop="openVersionsModal"
      >
        {{ service.versions.length }} versions
      </div>
    </div>
    <div class="service-content">
      <h2 class="service-name">
        {{ service.name }}
      </h2>
      <p class="service-description">
        {{ service.description }}
      </p>
    </div>
    <div class="service-info">
      <div
        v-if="service.metrics"
        class="service-metrics"
      >
        <div class="metric">
          <div class="dot" />
          <div class="metric-value">
            {{ getServiceMetrics.latency }}
          </div>
          <div class="metric-name">
            latency
          </div>
        </div>
        <div class="metric">
          <div class="dot" />
          <div class="metric-value">
            {{ getServiceMetrics.uptime }}
          </div>
          <div class="metric-name">
            uptime
          </div>
        </div>
        <div class="metric">
          <div class="dot" />
          <div class="metric-value">
            {{ getServiceMetrics.requests }}
          </div>
          <div class="metric-name">
            requests
          </div>
          <div class="divider" />
          <div class="metric-value">
            {{ getServiceMetrics.errors }}
          </div>
          <div class="metric-name">
            Errors
          </div>
        </div>
      </div>
      <div
        v-else-if="getStatusType === SERVICE_CATALOG_STATUS.NOT_CONFIGURED"
        class="unconfigured-service"
      >
        <div class="message">
          <span class="dot" />
          <p>Not configured with runtime yet</p>
        </div>
      </div>
      <div class="service-developers">
        <UserAvatarGroup :users="getPublishedUsers()" />
      </div>
    </div>
  </div>

  <Modal
    v-model="showVersionsModal"
    :height="400"
    :width="700"
    @close="closeVersionsModal"
  >
    <ServiceVersionsModal
      :service-type="service.type"
      :versions="service.versions"
      @close="closeVersionsModal"
    />
  </Modal>
</template>
<script lang="ts" setup>
import UserAvatarGroup from '@/components/common/UserAvatarGroup.vue'
import Check from '@/assets/icons/ArrowCheck.vue'
import InProgress from '@/assets/icons/InProgress.vue'
import Close from '@/assets/icons/ClearClose.vue'
import {
  SERVICE_CATALOG_STATUS,
} from '@/constants/serviceCatalog'
import ServiceVersionsModal from './ServiceVersionsModal.vue'
import Modal from '../common/CenterModal.vue'
import { computed, ref, type PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { Service } from '@/types/services'
import type { User } from '@/types/user'
import { formatNumber,formatPercentage } from '@/utils/formating'

const props = defineProps({
  service: {
    type: Object as PropType<Service>,
    required: true,
  },
})

const router = useRouter()

const { service } = props

// Get Status of the service based on the configuration
const getStatusType = computed(()=>{
  if (service.published) return SERVICE_CATALOG_STATUS.PUBLISHED
  else if (service.configured) return SERVICE_CATALOG_STATUS.UNPUBLISHED
  else return SERVICE_CATALOG_STATUS.NOT_CONFIGURED
})
// Get the status message based on the status type
const getStatusMessage = computed(() => {
  const StatusMessages = {
    [SERVICE_CATALOG_STATUS.PUBLISHED]: 'Published to Portal',
    [SERVICE_CATALOG_STATUS.UNPUBLISHED]: 'Unpublished',
    [SERVICE_CATALOG_STATUS.NOT_CONFIGURED]: 'In Progress',
  }
  return StatusMessages[getStatusType.value]
})
// Get the status icon based on the status type
const getStatusIcon = computed(() => {
  const StatusIcons = {
    [SERVICE_CATALOG_STATUS.PUBLISHED]: Check,
    [SERVICE_CATALOG_STATUS.UNPUBLISHED]: Close,
    [SERVICE_CATALOG_STATUS.NOT_CONFIGURED]: InProgress,
  }
  return StatusIcons[getStatusType.value]
})
// Get All the service metrics with formatted values
const getServiceMetrics = computed(()=>{
  const metrics = {
    latency: service.metrics?.latency ? service.metrics?.latency + 'ms' : '',
    uptime:service.metrics?.uptime ? formatPercentage(service.metrics?.uptime) : '',
    requests:   service.metrics?.requests ? formatNumber(service.metrics?.requests) : '',
    errors: service.metrics?.errors ? formatPercentage(service.metrics?.errors) : '',
  }
  return metrics
})
// Method to navigate to the service details page
const handleGoToService = () => {
  router.push({
    name: 'ServiceDetails',
    params: {
      id: service.id,
    },
  })
}

// Get the published users
const getPublishedUsers = ()=>{
  const users:User[] = []

  if (service.published && service.versions.length) {
    service.versions.forEach((version) => {
      if (version.developer) users.push(version.developer)
    })
  }
  return users
}

// versions handling
const showVersionsModal = ref(false)
const openVersionsModal = () => {
  showVersionsModal.value = true
}
const closeVersionsModal = () => {
  showVersionsModal.value = false
}

</script>
<style lang="scss" scoped>

.service{
    background-color: white;
    border: solid 1px transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 210px;
    list-style: none;
    padding: 25px;
    row-gap: 15px;
    transition: all 0.2s ease-in-out;
    &:hover{
        border: solid 1px var(--primary-color-light);
    }
    .header{
        align-items: center;
        display: flex;
        justify-content: space-between;

        .service-status{
            align-items: center;
            color: var(--font-color-light);
            column-gap: 5px;
            display: flex;
            font-size: 1.2rem;
            font-weight: 400;
            .published{
                color: var(--success-color);
            }
            .not_configured{
                color: var(--warn-color);
            }
            .unpublished{
                color: var(--font-color-light);
              opacity: 0.7
            }
        }
        .service-versions{
            background-color: var(--secondary-color-light);
            border-radius: 25px;
            color: var(--secondary-color);
            cursor: pointer;
            font-size: 1.3rem;
            font-weight: 600;
            padding: 10px 15px;

        }
    }
    .service-content{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .service-name{
            color: var(--font-color);
            font-size: 2rem;
            font-weight: 600;
        }
        .service-description{
            color: var(--font-color-light);
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 20px;
        }
    }
    .service-info{
        display: flex;
        flex: 1;
        font-family: "Inter", sans-serif;
        .unconfigured-service{
           align-items: flex-end;
           display: flex;
           .message{
            align-items: center;
            column-gap: 10px;
            display: flex;
            .dot{
              background-color: var(--font-color-light);
              border-radius: 50%;
              height: 6px;
              opacity: 0.5;
              width: 6px;
             }
             p{
              color: var(--font-color-light);
              font-size: 1.2rem;
              font-weight: 600;
             }
           }

        }
        .service-metrics{
            column-gap: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            row-gap: 10px;
            .metric{
                align-items: center;
                column-gap: 5px;
                display: flex;
                font-size: 1.2rem;
                font-weight: 600;

                .dot{
                    background-color: var(--success-color);
                    border-radius: 50%;
                    height: 6px;
                    width: 6px;
                }
                .divider{
                    background-color: var(--font-color-light);
                    border-radius: 6px;
                    height: 3px;
                    width: 3px;
                }
                .metric-value{
                    color: var(--font-color);
                }
                .metric-name{
                    color: var(--font-color-light);
                }
            }
        }
        .service-developers{
            align-items: flex-end;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: flex-end;

        }
    }
}
</style>