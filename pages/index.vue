<template>
  <div class="home wrapper">
    <img class="background-image" src="~/assets/homesplash.jpg" />
    <figure class="text-white text-right relative mb-10">
      <blockquote class="text-6xl pb-10">
        “Revolution is based on land.
        Land is the basis for all independence.
        Land is the basis of freedom,
        justice, and equality.”
      </blockquote>
      <figcaption class="text-4xl">Malcolm X, Detroit, November 1963</figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    onMounted(() => {
    })
    const data = reactive({
    })
    const { title } = useMeta({ title: 'Home | Black Detroiters Rebuild' })
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
.home.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  .logo 
    max-width: 340px;
  p 
    font-size: 18px;
  p + p 
    margin-top: 16px;
  .background-image 
    object-fit: cover;
    object-position: bottom;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  .text-content 
    background-color: rgba(0,0,0,0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    min-width: 60%;
    max-height: 90%;
    width: 90%;
    overflow-y: auto;
  blockquote
    font-family var(--serif);
    max-width 30ch;
    font-size 82px;
    line-height 1.1;
.splash-text 
  overflow-y: auto;


</style>
