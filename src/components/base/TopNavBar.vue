<template>
  <div class="navbar">
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
  </div>
</template>
<script lang="ts" setup>
import Logo from '@/assets/icons/KongLogo.vue'
import Settings from '@/assets/icons/OrgSettings.vue'
import Organization from '@/assets/icons/GroupOrg.vue'
import UserProfile from '@/assets/icons/UserProfile.vue'
</script>
<style lang="scss" scoped>
.navbar{
  align-items: center;
  background: linear-gradient(180deg, #09224F 0%, #073382 100%);
  display: flex;
  height: 70px;
  justify-content: space-between;

  .navbar-right{
    align-items: center;
    column-gap: 20px;
    display: flex;
    .nav-links{
      column-gap: 15px;
      display: flex;

      .nav-item{
        align-items: center;
        color: var(--font-color-white);
        column-gap: 10px;
        display: flex;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .user-profile{
      align-items: center;
      background-color: #072863;
      color: var(--font-color-white);
      column-gap: 10px;
      display: flex;
      font-size: 1.5rem;
      font-weight: 500;
      height: 70px;
      padding: 0px 20px;
    }
  }

}

</style>
