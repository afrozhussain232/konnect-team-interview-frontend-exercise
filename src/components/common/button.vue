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
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.6rem;
  &.primary {
    background-color: var(--primary-color);
  }
  &.submit {
   background-color: var(--tertiary-color);
  }
}
</style>