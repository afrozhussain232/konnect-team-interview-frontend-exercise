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
      {{ getUserInitials }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/types/user'
import type { PropType } from 'vue'
import { computed,toRefs } from 'vue'

const props = defineProps({
  user: {
    type:Object as PropType<User>,
    required:true,
  },
  size:{
    type:Number,
    default:36,
  },
})

const { user } = toRefs(props)
// Get the initials of the user
const getUserInitials = computed(() => {
  const names = user.value.name.split(' ')
  // Get the first letter of each name and join them,
  // Truncate the initials to 2 characters and convert to uppercase
  return names.map(name => name[0]).join('').slice(0,2).toUpperCase()
})
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
    .initials{
      align-items: center;
      color: var(--font-color-light);
      display: flex;
      font-size: 1rem;
      font-weight: 600;
      height: 36px;
      justify-content: center;
      width: 36px;


    }
}
</style>