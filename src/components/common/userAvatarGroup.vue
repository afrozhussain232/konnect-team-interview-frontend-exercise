<template>
  <div class="user-avatar-group">
    <div
      v-if="remainingUsers > 0"
      class="group-item"
      :style="{zIndex:visibleUsers?.length + 1}"
    >
      <div class="more-avatar">
        +{{ remainingUsers }}
      </div>
    </div>
    <UserAvatar
      v-for="(user,index) in visibleUsers"
      :key="user.id"
      class="group-item"
      :style="{ zIndex: visibleUsers.length - index }"
      :user="user"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import UserAvatar from './UserAvatar.vue'
import type { User } from '@/types/user'

interface Props {
  users: User[]
  maxVisible?: number
}

const props = withDefaults(defineProps<Props>(), {
  users: () => [],
  maxVisible: 2,
})

const visibleUsers = computed<User[]>(() => {
  return props.users.slice(0, props.maxVisible)
})

const remainingUsers = computed(() => {
  return Math.max(props.users.length - props.maxVisible, 0)
})
</script>

<style lang="scss" scoped>
.user-avatar-group{
    display:flex;
    :last-child{
        margin-left: 0px;
    }
    .group-item{
        align-items: center;
        background-color: var(--background-color);
        border: solid 2px white;
        border-radius: 50%;
        display: flex;
        height: 36px;
        justify-content: center;
        margin-left: -15px;
        overflow: hidden;
        width: 36px;
        .more-avatar{
          color: var(--font-color-light);
          font-size: 1.2rem;
          font-weight: 600;
          opacity: 0.8;
        }
    }
}
</style>