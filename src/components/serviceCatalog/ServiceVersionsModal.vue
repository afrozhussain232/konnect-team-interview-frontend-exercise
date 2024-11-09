<template>
  <div class="service-versions">
    <div class="header">
      <h3>Versions({{ versions.length }})</h3>
      <button
        class="close-button"
        @click="$emit('close')"
      >
        <Close />
      </button>
    </div>
    <div class="version-cards">
      <div
        v-for="version in versions"
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
          <div
            class="version-type-pill"
            :class="[serviceType]"
          >
            {{ serviceType }}
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
import Close from '@/assets/icons/ClearClose.vue'
import UserAvatar from '../common/UserAvatar.vue'
import type { PropType } from 'vue'
import type { Version } from '@/types/services'


defineEmits(['close'])
defineProps({
  versions: {
    type: Array as PropType<Version[]>,
    required: true,
  },
  serviceType:{
    type: String,
    required: true,
  },
})
</script>
<style scoped lang="scss">
.service-versions{
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 30px;
    row-gap: 15px;
    .header{
        display: flex;
        justify-content: space-between;
        h3{
            font-size: 1.5rem;
            font-weight: 600;
        }
        .close-button{
            background-color: transparent;
            color: var(--font-color-light);
            cursor: pointer;
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
    .version-cards{
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 10px;
        .version-card{
            align-items: flex-start;
            border-bottom: solid var(--border-color) 0.5px;
            column-gap: 10px;
            display: grid;
            grid-template-columns: 60px 1fr 0.4fr 150px;
            padding: 15px 0px;
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
                    border-radius: 5px;
                    font-size: 1rem;
                    font-weight: 600;
                    padding: 5px 10px;
                    &.HTTP{
                      background-color: var(--secondary-color-light);
                      color: var(--primary-color);
                    }
                    &.REST{
                      background-color: var(--primary-color-light);
                      color: var(--primary-color);
                    }
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