<template>
  <div class="user-avatar">
    <img
      alt="User avatar"
      :src="user.avatar"
    >
  </div>
</template>
<script lang="ts" setup>
defineProps({
  user: Object,
})
</script>
<style lang="scss" scoped>

.user-avatar{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 36px;
        height: 36px;
        object-fit: cover;
    }
}
</style>