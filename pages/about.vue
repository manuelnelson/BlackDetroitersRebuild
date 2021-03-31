<template>
<div>
  <div class="about wrapper">
    <div class="content">
      <div class="about-homes flex mt-8">
        <div class="about-homes w-1/4 p-8">
          <img src="~/assets/home1.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes w-1/4 p-8">
          <img src="~/assets/home2.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes w-1/4 p-8">
          <img src="~/assets/home3.jpg" alt="Virginia Park Community Home"/>
        </div>
        <div class="about-homes w-1/4 p-8">
          <img src="~/assets/home4.jpg" alt="Virginia Park Community Home"/>
        </div>
      </div>
      <div class="flex text-white rich-text">
        <div class="w-1/2 p-8">
          <p>BLACK DETROITERS REBUILD: Virginia Park Community is a diverse 
            coalition of neighbors, businesses, activists and non-profits who 
            believe that property ownership by Detroit’s African American 
            residents is the first step in rejuvenating our neighborhoods. Absentee 
            owners - oftentimes out of state investors - are responsible for 
            continuing degradation of our communities and have not been 
            adequately held accountable by the City of Detroit.</p>
        </div>
        <div class="w-1/2 p-8">
          <p>
            The Herman Kiefer project with Ron Castellano from New York City is 
            a devastating example of this and a bad deal for Detroiters. We want 
            to end his agreement with the Detroit Land Bank Authority that gives 
            him the right to own approximately 125 homes and 400 lots within 
            the Virginia Park Community. Instead, we demand that these homes 
            and lots be sold to Detroiters with 80% of these properties being 
            reserved for African-American residents.
          </p>
        </div>
      </div>
      <div class="rich-text yellow--text p-8 w-3/4 m-auto">
        <p class="text-2xl text-center">WE DON’T NEED OUTSIDE SAVIORS TO BUILD BACK BETTER,
          WE NEED COLLABORATORS AND CAPITAL THAT CARES ABOUT BLACK PEOPLE IN DETROIT.</p>
      </div>
      <div class="flex">
        <div class="w-2/3">
          <img class="w-full p-8" src="~/assets/community.png" alt="Community">
        </div>
        <div class="w-1/3">
          <h2 class="text-white text-5xl pt-5 pb-5">Community</h2>
          <div class="rich-text yellow--text">WELCOME TO THE VIRGINIA PARK COMMUNITY!</div>
          <p class="rich-text text-white">
            Stretching from Atkinson to the north, West Grand 
            Boulevard to the south, John C. Lodge Service Drive to 
            the east and Linwood to the West. Virginia Park 
            Community is home to Henry Ford Health System, the 
            Virginia Park Community Plaza, a community-led 
            mixed-used development, 4 city-owned parks, including 
            the historic Gordon Park at the corner of 12th (Rosa 
            Parks Blvd.) and Clairmount, Thirkell Elementary and 
            rows and rows of streets lined with 100-year old homes. 
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-center items-center background-white p-8">
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/cdc.png" alt="CDC">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/mld.png" alt="Mona Lisa Develops">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/Cooperative Capital.png" alt="Cooperative Capital">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/bcvd.png" alt="Building Community Value"> 
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/d4.jpeg" alt="D4">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/flagstar.png" alt="Flagstar">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/futurecity.png" alt="Detroit Future City">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/justicecenter.jpeg" alt="Detroit Justice Center">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/Liberty Bank.png" alt="Liberty Bank">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/Opportunity Resource Fund.png" alt="Opportunity Resource Fund">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/SugarLawCenterLogo.jpeg" alt="Sugar Law Center">
    </div>
    <div class="w-1/6 p-3">
      <img src="~/assets/logos/huntington.jpeg" alt="Huntington Bank">
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

// .background-white
//   background-color white;

</style>
