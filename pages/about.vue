<template>
<div>
  <div class="about wrapper">
    <div class="content">
      <div class="about-homes flex flex-wrap mt-8 mb-8">
        <div class="about-homes w-1/2 md:w-1/4 pr-4 md:p-8">
          <img src="~/assets/home1.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes w-1/2 md:w-1/4 pl-4 md:p-8">
          <img src="~/assets/home2.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes hidden md:block w-1/4 md:p-8">
          <img src="~/assets/home3.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes hidden md:block w-1/4 md:p-8">
          <img src="~/assets/home4.jpg" alt="Virginia Park Community Home"/>
        </div>
      </div>
      <div v-scrollinto="" class="scroll-into-view flex flex-wrap text-white rich-text">
        <div class="w-full md:w-1/2 md:p-8 mb-8">
          <p><span class="font-bold">BLACK DETROITERS REBUILD</span> Virginia Park Community is a diverse coalition of neighbors,
businesses, activists and non-profits who believe that property ownership by Detroit’s Black
residents is the first step in rejuvenating our neighborhoods. Absentee owners, who are often
out-of-state investors, are responsible for continuing the degradation of our communities. These
speculators are not being held accountable by the City of Detroit.</p>
        </div>
        <div class="w-full md:w-1/2 md:p-8 mb-8">
          <p>
New York City developer Ron Castellano has an agreement with the Detroit Land Bank
Authority that gives him the right to own approximately 125 homes and 400 lots within the
Virginia Park Community called the Herman Kiefer project. We demand that these homes and
lots be sold to Detroiters.          </p>
        </div>
        <div class="about-homes block md:hidden w-1/2 pr-4">
          <img src="~/assets/home3.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes block md:hidden w-1/2 pl-4">
          <img src="~/assets/home4.jpg" alt="Virginia Park Community Home"/>
        </div>
      </div>
      <div v-scrollinto="" class="rich-text yellow--text p-8 w-full md:w-3/4 m-auto">
        <p class="text-2xl text-center">We don’t need outside saviors to build back better, we need collaborators that care about Black
people in Detroit and the capital to make it happen.</p>
      </div>
      <div class="flex flex-wrap pb-16">
        <div v-scrollinto="" class="md:block hidden w-3/5">
          <img class="w-full px-8 community-map" src="~/assets/communitymap.png" alt="Community">
          <div class="w-full caption">
            <caption class="w-full text-white mx-auto font-bold px-8 pb-8">Map of VPC as of 2021. Red indicates DLBA homes tied up in the HK deal. Blue indicates available DLBA properties</caption>
          </div>
        </div>
        <div v-scrollinto="" class="md:w-2/5">
          <h2 class="text-white text-5xl pt-5 pb-5">Community</h2>
          <img class="w-full md:hidden" src="~/assets/communitymap.png" alt="Community">
          <caption class="w-full md:hidden text-white font-bold pb-8">Map of VPC as of 2021. Red indicates DLBA homes tied up in the HK deal. Blue indicates available DLBA properties</caption>
          <div class="rich-text yellow--text">WELCOME TO THE VIRGINIA PARK COMMUNITY!</div>
          <p class="rich-text text-white">
            Stretching from Atkinson to the north, West Grand
            Boulevard to the south, John C. Lodge Service Drive to the east and Linwood to the West.
            Virginia Park Community is home to Henry Ford Health System, Thirkell Elementary and the
            Virginia Park Community Plaza, a community-led, mixed-use development. Plus four city-owned
            parks, including the historic Gordon Park at the corner of 12th (Rosa Parks Boulevard) and
            Clairmount. Enjoy the neighborhood streets lined with rows and rows of 100-year-old homes. 
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="background-white p-8">
    <h2 v-scrollinto="" class="w-full text-5xl pt-5 pb-5">Collaborators</h2>
    <div v-scrollinto="" class="flex flex-wrap justify-center items-center">
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/cdc.png" alt="CDC">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/mld.png" alt="Mona Lisa Develops">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/Cooperative Capital.png" alt="Cooperative Capital">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/bcvd.png" alt="Building Community Value"> 
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/d4.jpeg" alt="D4">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/flagstar.png" alt="Flagstar">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/futurecity.png" alt="Detroit Future City">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/justicecenter.jpeg" alt="Detroit Justice Center">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/Liberty Bank.png" alt="Liberty Bank">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/Opportunity Resource Fund.png" alt="Opportunity Resource Fund">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/SugarLawCenterLogo.jpeg" alt="Sugar Law Center">
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <img src="~/assets/logos/huntington.jpeg" alt="Huntington Bank">
      </div>
    </div>
  </div>
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

.about.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  padding 0 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  font-family: var(--sans-serif)
  .content
    margin-top 100px

.community-map, .caption
  max-width 600px;
  margin 0 auto;
.background-white
  background-color white;

+for_breakpoint(xs sm)
  .about.wrapper
    padding 0 30px;


</style>
