<template>
  <li class="service">
    <div class="header">
      <p class="service-status">
        {{ getStatus() }}
      </p>
      <div class="service-versions">
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
            {{ service.metrics.latency }}ms
          </div>
          <div class="metric-name">
            latency
          </div>
        </div>
        <div class="metric">
          <div class="dot" />
          <div class="metric-value">
            {{ (service.metrics.uptime *100).toFixed(2) }}%
          </div>
          <div class="metric-name">
            uptime
          </div>
        </div>
        <div class="metric">
          <div class="dot" />
          <div class="metric-value">
            {{ (service.metrics.requests) }}
          </div>
          <div class="metric-name">
            requests
          </div>
          <div class="divider" />
          <div class="metric-value">
            {{ (service.metrics.errors) }}
          </div>
          <div class="metric-name">
            Errors
          </div>
        </div>
      </div>
      <div class="service-developers">
        <UserAvatarGroup :users="getPublishedUsers()" />
      </div>
    </div>
  </li>
</template>
<script lang="ts" setup>
import UserAvatarGroup from '@/components/common/userAvatarGroup.vue'
const { service } = defineProps({
  service: Object,
})

const getStatus = () => {
  if (service.published) return 'Published to Portal'
  else if (service.configured) return 'unpublished'
  else return 'Not Configured'
}

const getPublishedUsers = ()=>{
  let devlopers = []

  if (service.published && service.versions.length) {
    service.versions.forEach((version) => {
      devlopers.push(version.developer)
    })
  }
  return devlopers
}

</script>
<style lang="scss" scoped>

.service{
    background-color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 25px;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .service-status{
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--font-color-light);
        }
        .service-versions{
            padding: 10px 15px;
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--secondary-color);
            background-color: var(--secondary-color-light);
            border-radius: 25px;

        }
    }
    .service-content{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .service-name{
            font-size: 2rem;
            font-weight: 600;
            color: var(--font-color);
        }
        .service-description{
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 20px;
            color: var(--font-color-light);
        }
    }
    .service-info{
        flex: 1;
        display: flex;
        font-family: "Inter";
        .service-metrics{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            column-gap: 20px;
            row-gap: 10px;
            .metric{
                display: flex;
                align-items: center;
                font-weight: 600;
                column-gap: 5px;
                font-size: 1.2rem;

                .dot{
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: var(--success-color);
                }
                .divider{
                    width: 3px;
                    height: 3px;
                    border-radius: 6px;
                    background-color: var(--font-color-light);
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
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;

        }
    }
}
</style>