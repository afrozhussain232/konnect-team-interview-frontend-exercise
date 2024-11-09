<template>
  <div
    v-if="model"
    class="modal"
    @click.self="closeModal"
  >
    <div
      class="modal-content"
      :style="{width:width+'px',height:height+'px'}"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>


defineProps({
  width:{
    type:Number,
    default:300,
  },
  height:{
    type:Number,
    default:200,
  },
})

const model = defineModel({
  type:Boolean,
  default:false,
})
const emits = defineEmits(['close'])

const closeModal = ()=>{
  emits('close')
}


</script>
<style scoped lang="scss">
.modal {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
  .modal-content{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

}
</style>