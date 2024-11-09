<template>
  <button
    :class="[
      'button',
      type,
    ]"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'

defineProps({
  type: {
    type: String as PropType<'primary' | 'secondary' | 'submit'>,
    default: 'primary',
  },

})
</script>
<style scoped lang="scss">
.button {
  align-items: center;
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  color: white;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: center;
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  &.primary {
    background-color: var(--primary-color);
  }
  &.submit {
   background-color: var(--tertiary-color);
  }
}
</style>