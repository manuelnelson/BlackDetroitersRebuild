<template>
  <div class="support wrapper">
    <div class="content flex w-full items-center text-center text-white pt-6">
      <div class="w-1/3 pr-4 pl-4">
        <div class="image-placeholder yellow w-full"></div>
        <h3 class="text-6xl">Donate.</h3>
        <p class="text-5xl font-bold">$20</p>
      </div>
      <div class="w-1/3 pr-4 pl-4">
        <div class="image-placeholder yellow w-full"></div>
        <h3 class="text-6xl">Pin.</h3>
        <p class="text-5xl font-bold">$10</p>
      </div>
      <div class="w-1/3 pr-4 pl-4">
        <div class="image-placeholder yellow w-full"></div>
        <h3 class="text-6xl">Yard Sign.</h3>
        <p class="text-5xl font-bold">$10</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {},
  head: {},
  setup() {
    onMounted(() => {
    })
    const data = reactive({
    })
    const { title } = useMeta({ title: 'Support | Black Detroiters Rebuild' })
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style>
 /* @screen md { 
   .text-content {
     overflow-y: hidden;
     width: auto !important;
   }
 } */
</style>
<style lang="stylus"> 
.support.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  padding 0 80px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  font-family: var(--sans-serif)
  .content
    margin-top 120px
  .image-placeholder
    height 250px

</style>
