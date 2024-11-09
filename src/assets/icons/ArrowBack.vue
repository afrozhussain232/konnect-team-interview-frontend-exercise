<template>
  <svg
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
      fill="currentColor"
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