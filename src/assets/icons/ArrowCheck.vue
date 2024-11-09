<template>
  <svg
    fill="none"
    :height="size"
    viewBox="0 0 20 20"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 7L8 13L5 10.0001"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.25"
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