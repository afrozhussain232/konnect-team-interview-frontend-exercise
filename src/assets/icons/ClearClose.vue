<template>
  <svg
    fill="none"
    :height="size"
    viewBox="0 0 20 20"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 6.5L7.16666 13.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
    />
    <path
      d="M14.1667 13.5L7.16666 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
    />
  </svg>
</template>
<script lang="ts" setup>
defineProps(
  {
    size: {
      type: Number,
      default:20,
    },
  },
)
</script>