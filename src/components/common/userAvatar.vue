<template>
  <div
    class="user-avatar"
    :style="{width:`${size}px`,height:`${size}px`}"
  >
    <img
      v-if="user.avatar"
      alt="User avatar"
      :src="user.avatar"
      :style="{width:`${size}px`,height:`${size}px`}"
    >
    <div
      v-else
      class="initials"
    >
      <span>{{ getUserInitials }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/types/user'
import type { PropType } from 'vue'

defineProps({
  user: {
    type:Object as PropType<User>,
    required:true,
  },
  size:{
    type:Number,
    default:36,
  },
})

const getUserInitials = (user:User) => {
  const names = user.name.split(' ')
  return names.map(name => name[0]).join('')
}
</script>
<style lang="scss" scoped>

.user-avatar{
    border-radius: 50%;
    height: 36px;
    overflow: hidden;
    width: 36px;
    img{
        height: 36px;
        object-fit: cover;
        width: 36px;
    }
}
</style>