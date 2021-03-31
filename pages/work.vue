<template>
  <div class="work wrapper">
    <img class="background-image" src="~/assets/MainSplash.jpg" />
    <figure class="text-white text-right relative mb-10">
      <blockquote class="text-6xl pb-10">
        “Revolution is based on land. Land is the basis for all independence. Land is the basis of freedom, justice and equality”
      </blockquote>
      <figcaption class="text-4xl">Reverend Garrison Frazier (1865)</figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import axios from 'axios';
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: '/.netlify/functions'
})
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
@import '~/assets/css/main';

.work.wrapper 
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
  blockquote
    font-family var(--serif);
    max-width 30ch;
    font-size 82px;
    line-height 1.1;

</style>
