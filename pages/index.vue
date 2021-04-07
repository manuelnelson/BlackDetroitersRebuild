<template>
  <div class="home wrapper">
    <transition name="fade">
      <div class="home-container" v-if="slideOneActive">
        <img class="background-image" src="~/assets/homesplash.jpg" />
        <figure v-scrollinto="" class="scroll-into-view text-white text-right relative mb-10">
          <blockquote  class="pb-10">
            “Revolution is based on land.
            Land is the basis for all independence.
            Land is the basis of freedom,
            justice, and equality.”
          </blockquote> 
          <figcaption class="text-lg md:text-4xl pr-3">Malcolm X, Detroit, November 1963</figcaption>
        </figure>
      </div>
    </transition>
    <transition name="fade">
      <div class="home-container" v-if="!slideOneActive">
      <img class="background-image left-aligned" src="~/assets/MainSplash.jpg" />
        <figure class="text-white text-right relative mb-10">
          <blockquote  class="pb-10 smaller-font">
            “This is the story of a community that love built.
  Virginia Park, perhaps more than any other area
  of the city, typies the Spirit of Detroit.
  It is a neighborhood sustained & rebuilt by
  people - people from block clubs, people from
  business, people from city government”
          </blockquote> 
          <figcaption class="text-lg md:text-4xl pr-3">Mayor Coleman A. Young, ~1987</figcaption>
        </figure>
      </div>
    </transition>
    <img class="background-image hidden" src="~/assets/MainSplash.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    onMounted(() => {
      document.querySelector('body').classList.add('no-overflow')
      setInterval(toggleSlide, 10000);
    })
    onUnmounted(() => {
      document.querySelector('body').classList.remove('no-overflow')
    })
    const data = reactive({
      slideOneActive:true
    })
    const toggleSlide = () => {
      data.slideOneActive = !data.slideOneActive;
    }
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
  width: 100%;
  overflow-y hidden;
  .home-container
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    &.left-aligned
      object-position bottom left;
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
  

body.no-overflow 
  overflow-y hidden;

.splash-text 
  overflow-y: auto;

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s;
.fade-enter, .fade-leave-to 
  opacity: 0;

</style>
