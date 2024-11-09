<template>
  <div class="pagination">
    <button
      class="pagination-button"
      :disabled="IsPrevDisabled"
      @click="handleGoToPrevPage"
    >
      <Prev />
    </button>
    <div class="page-info">
      <span class="current-page-info">
        {{ getPageRange }}
      </span>

      of {{ totalItems }} services
    </div>
    <button
      class="pagination-button"
      :disabled="isNextDisabled"
      @click="handleGotToNextPage"
    >
      <Next />
    </button>
  </div>
</template>
<script lang="ts" setup>
import Prev from '@/assets/icons/ArrowPrev.vue'
import Next from '@/assets/icons/ArrowNext.vue'
import { computed,ref,toRefs } from 'vue'
const props = defineProps(
  {
    totalItems:{
      type: Number,
      required: true,
    },
    itemsPerPage:{
      type: Number,
      required: true,
    },
    initialPage:{
      type: Number,
      required: true,
    },
  },
)

const emits = defineEmits(['page-changed'])

const {
  initialPage,itemsPerPage,totalItems,
} = toRefs(props)

const currentPage = ref(initialPage.value)

// handle Page Change to Next
const handleGotToNextPage = ()=> {
  // Check if the current page is less than the total number of pages i.e the last page
  if (currentPage.value < Math.ceil(totalItems.value / itemsPerPage.value)) {
    // Increment the current page
    currentPage.value++
  }
  emits('page-changed', currentPage.value)
}
// handle Page Change to Previous
const handleGoToPrevPage = ()=> {
  // Check if the current page is greater than 1 i.e the first page
  if (currentPage.value > 1) {
    currentPage.value--
  }
  emits('page-changed', currentPage.value)
}
// Check if the next button should be disabled
const isNextDisabled = computed(()=>{
  return (currentPage.value * itemsPerPage.value) >= totalItems.value
})
// Check if the Prev button should be disabled
const IsPrevDisabled = computed(()=>{
  return currentPage.value === 1
})
// Get the range of items displayed on the page
const getPageRange = computed(()=>{
  const start = (currentPage.value - 1) * itemsPerPage.value + 1
  const end = Math.min(currentPage.value * itemsPerPage.value, totalItems.value)
  return `${start} to ${end}`
})

</script>
<style lang="scss" scoped>
.pagination{
    align-items: center;
    column-gap: 15px;
    display: flex;
    justify-content: center;
    .page-info{
        color: var(--font-color-light);
        column-gap: 5px;
        display: flex;
        font-size: 1.3rem;
        font-weight: 500;
        .current-page-info{
            font-weight: 600;
        }
    }

    .pagination-button{
        align-items: center;
        background-color: transparent;
        border: 1px solid var(--primary-color-light);
        border-radius: 50%;
        color: var(--primary-color);
        cursor: pointer;
        display: flex;
        height: 40px;
        justify-content: center;
        width: 40px;

        &:disabled{
          border: solid var(--border-color);
          color: var(--font-color-light);
          cursor: not-allowed;
        }
    }
}
</style>