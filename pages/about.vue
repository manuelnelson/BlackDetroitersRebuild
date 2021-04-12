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
            residents is the first step in rejuvenating our neighborhoods. Absentee owners, who often have no meaningful connection to the community, are responsible for continuing the degradation of our neighborhoods. These
            speculators are not being held accountable by the City of Detroit.</p>
        </div>
        <div class="w-full md:w-1/2 md:p-8 mb-8">
          <p>
A New York City developer has an agreement with the Detroit Land Bank
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
      <div v-scrollinto="" class="rich-text yellow--text p-8 mb-8 w-full md:w-3/4 m-auto">
        <p class="text-4xl text-center">We don’t need outside saviors to build back better, we need collaborators that care about Black
people in Detroit and the capital to make it happen.</p>
      </div>
      <div class="flex flex-wrap pb-16">
        <div v-scrollinto="" class="md:block hidden w-2/5">
          <img class="w-full px-8 community-map" src="~/assets/communitymap.png" alt="Community">
          <div class="w-full caption text-center">
            <span class="w-full text-white mx-auto font-bold px-8 pb-8">Map of VPC as of 2021. Red indicates DLBA homes tied up in the HK deal. Blue indicates available DLBA properties to structures</span>
          </div>
        </div>
        <div v-scrollinto="" class="md:w-3/5">
          <h2 class="text-white text-5xl pt-5">Community</h2>
          <img class="w-full md:hidden" src="~/assets/communitymap.png" alt="Community">
          <div class="w-full caption text-center">
            <span class="w-full md:hidden block text-white font-bold px-8 pb-8">
              Map of VPC as of 2021. Red indicates DLBA homes tied up in the HK deal. Blue indicates available DLBA properties
            </span>
          </div>
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
    <div v-scrollinto="" class="flex flex-wrap justify-start items-center">
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.centraldetroitchristian.org/" target="_blank">
          <img src="~/assets/logos/cdc.png" alt="CDC">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.cooperativecap.com/" target="_blank">
          <img src="~/assets/logos/Cooperative Capital.png" alt="Cooperative Capital">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.bcvdetroit.org/" target="_blank">
          <img src="~/assets/logos/bcvd.png" alt="Building Community Value"> 
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="http://www.monalisadevelopment.com" target="_blank">
          <img src="~/assets/logos/mld.png" alt="Mona Lisa Develops">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-5">
        <a href="http://360detroitinc.org/" target="_blank">
          <img src="~/assets/logos/360detroit.png" alt="360 Detroit"> 
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.metrodetroitd4.org/" target="_blank">
          <img src="~/assets/logos/d4.jpeg" alt="D4">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.flagstar.com/detroit---one-detroit-center-flagstar-bank-michigan-800.html" target="_blank">
          <img src="~/assets/logos/flagstar.png" alt="Flagstar">
        </a>
      </div>
      <!-- <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://detroitfuturecity.com/" target="_blank">
          <img src="~/assets/logos/futurecity.png" alt="Detroit Future City">
        </a>
      </div> -->
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://karasidevelopment.com/" target="_blank">
          <img src="~/assets/logos/karasi.jpg" alt="Karasi Development">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.detroitjustice.org/" target="_blank">
          <img src="~/assets/logos/justicecenter.jpg" alt="Detroit Justice Center">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.libertybank.net/community/detroit.cfm" target="_blank">
          <img src="~/assets/logos/Liberty Bank.png" alt="Liberty Bank">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://oppfund.org/" target="_blank">
          <img src="~/assets/logos/Opportunity Resource Fund.png" alt="Opportunity Resource Fund">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.sugarlaw.org/" target="_blank">
          <img src="~/assets/logos/SugarLawCenterLogo.jpeg" alt="Sugar Law Center">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.huntington.com/Detroit-DHM" target="_blank">
          <img src="~/assets/logos/huntington.png" alt="Huntington Bank">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://12thstreetcdc.org/" target="_blank">
          <img src="~/assets/logos/12th.jpg" alt="12th Street CDC">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.anigaccess.com" target="_blank">
          <img src="~/assets/logos/anig.png" alt="Ani G">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://www.facebook.com/FOPlenty" target="_blank">
          <img src="~/assets/logos/Fields Of.jpg" alt="Fields of Plenty">
        </a>
      </div>
      <div class="w-1/3 md:w-1/6 p-3">
        <a href="https://nationalbusinessleague.org/" target="_blank">
          <img src="~/assets/logos/nbl.png" alt="National Business League">
        </a>
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
  span
    color white !important;

.background-white
  background-color white;

+for_breakpoint(xs sm)
  .about.wrapper
    padding 0 30px;


</style>
