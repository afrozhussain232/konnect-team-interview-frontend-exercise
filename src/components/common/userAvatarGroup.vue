<template>
  <div class="user-avatar-group">
    <div
      class="group-item"
      :style="{zIndex:users?.length}"
    >
      <div class="more-avatar">
        <span>+{{ users?.length - 2 }}</span>
      </div>
    </div>
    <UserAvatar
      v-for="(user,index) in users?.splice(0, 2)"
      :key="user.id"
      class="group-item"
      :style="{ zIndex: users.length - index }"

      :user="user"
    />
  </div>
</template>
<script lang="ts" setup>
import UserAvatar from './userAvatar.vue'
defineProps({
  users: Array,
})
</script>

<style lang="scss" scoped>
.user-avatar-group{
    display:flex;
    :last-child{
        margin-left: 0px;
    }
    .group-item{
        margin-left: -10px;
        overflow: hidden;

        .more-avatar{
            height: 36px;
            width: 36px;
            border-radius: 50%;
            background-color: var(--background-color);
            border: solid 2px white;

        }
    }
}
</style>