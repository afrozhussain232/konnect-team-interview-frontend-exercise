<template>
  <svg
    fill="none"
    :height="size"
    viewBox="0 0 20 20"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      fill="currentColor"
      height="12"
      rx="1"
      width="2.76923"
      x="8.61539"
      y="4"
    />
    <rect
      fill="currentColor"
      height="12"
      rx="1"
      transform="rotate(90 16 8.61539)"
      width="2.76923"
      x="16"
      y="8.61539"
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