<template>
  <div class="solution wrapper">
    <div class="content w-full pt-6">
      <div class="flex w-full">
        <div class="left-content w-1/5 pr-8"> &nbsp;
        </div>
        <div class="right-content w-4/5 text-white">
          <h2 class="text-6xl">The Solution.</h2>
        </div>
      </div>
      <div class="solution-container">
        <div class="flex mb-8 mt-8">
          <div class="w-1/5 pr-8 text-right flex items-center justify-end ">
            <i class="material-icons yellow--text big-icon">location_city</i>
          </div>
          <div class="w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">Get the land</h3>
            <p class="rich-text text-white">Detroit Land Bank Authority low-cost ownership program for African American
                Detroiters that transfers land from City and Land Bank ownership to Detroit
                residents and aligns with longstanding demographics of an over 80% Black city.
                There will be homeowner and small-scale community development opportunities.</p>
          </div>
        </div>
        <div class="flex mb-8">
          <div class="w-1/5 pr-8 text-right flex items-center justify-end big-icon">
            <i class="material-icons yellow--text big-icon">construction</i>
          </div>
          <div class="w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">GET THE SKILLS</h3>
            <p class="rich-text text-white">Partner with existing organizations to provide training focused on financial literacy,
              real estate and community development and skilled trades training for those who
              want to learn or refine real estate development and construction skills.</p>
          </div>
        </div>
        <div class="flex mb-8">
          <div class="w-1/5 pr-8 text-right flex items-center justify-end big-icon">
            <i class="icomoon icon-handshake-o yellow--text"></i>
          </div>
          <div class="w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">GET THE RESOURCES</h3>
            <p class="rich-text text-white">Develop strategic partnerships with banks, credit unions, community development
              financing institutions (CDFIs) and cooperative funding models. Provide economic
              opportunities to Black-owned businesses who will be given preference when
              bidding on jobs.</p>
          </div>
        </div>
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
    const { title } = useMeta({ title: 'Problem | Black Detroiters Rebuild' })

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
.solution.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  padding 0 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: left;
  background-color: var(--dark-blue);
  width: 100%;
  font-family: var(--sans-serif)
  .rich-text
    max-width 80ch
  h2
    border-bottom solid 2px var(--blue);
    margin-bottom 20px;
  h3
    font-family var(--sans-serif)
  .content
    margin-top 120px
  .big-icon
    font-size 120px;
    line-height 1;
    margin-right 14px;
    
</style>
