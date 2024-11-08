<template>
  <nav class="navbar">
    <div class="navbar-left">
      <Logo />
    </div>
    <div class="navbar-right">
      <div class="nav-links">
        <router-link
          class="nav-item"
          to="/"
        >
          <Organization />
          Organization
        </router-link>
        <router-link
          class="nav-item"
          to="/"
        >
          <Settings />
          Settings
        </router-link>
      </div>
      <div class="user-profile">
        <UserProfile />
        Afroz hussain
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Logo from '@/assets/icons/logo.vue'
import Settings from '@/assets/icons/settings.vue'
import Organization from '@/assets/icons/organisation.vue'
import UserProfile from '@/assets/icons/userProfile.vue'
</script>
<style lang="scss" scoped>
.navbar{
  height: 70px;
  background: linear-gradient(180deg, #09224F 0%, #073382 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar-right{
    display: flex;
    align-items: center;
    column-gap: 20px;
    .nav-links{
      display: flex;
      column-gap: 15px;

      .nav-item{
        color: var(--font-color-white);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
    }
    .user-profile{
      height: 70px;
      background-color: #072863;
      display: flex;
      align-items: center;
      color: var(--font-color-white);
      padding: 0px 20px;
      column-gap: 10px;
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

}

</style>
