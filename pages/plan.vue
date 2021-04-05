<template>
  <div class="solution wrapper">
    <div class="content w-full pt-6">
      <div class="flex w-full">
        <div class="left-content hidden md:block md:w-1/5 pr-8"> &nbsp;
        </div>
        <div class="right-content w-full md:w-4/5 text-white">
          <h2 class="text-6xl">Our Plan.</h2>
          <p class="text-2xl">Three Points to Get Our Power Back</p>
        </div>
      </div>
      <div class="solution-container">
        <div v-scrollinto="" class="scroll-into-view flex flex-wrap mb-8 mt-8">
          <div class="w-full md:w-1/5 pr-8 flex items-center justify-center md:justify-end ">
            <i class="material-icons yellow--text big-icon">local_florist</i>
          </div>
          <div class="w-full mt-5 md:w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">Get the land</h3>
            <p class="rich-text text-white">Create a low-cost ownership program for Detroiters that transfers
land from the Detroit Land Bank Authority to Detroit residents. Provide homeowner and
small-scale community development opportunities.</p>
          </div>
        </div>
        <div v-scrollinto="" class="scroll-into-view flex flex-wrap mb-8">
          <div class="w-full md:w-1/5 pr-8 flex items-center justify-center md:justify-end ">
            <i class="material-icons yellow--text big-icon">construction</i>
          </div>
          <div class="w-full mt-5 md:w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">GET THE SKILLS</h3>
            <p class="rich-text text-white">Partner with existing organizations for financial literacy, real
estate, community development, and skilled trades training for those who want to
develop or refine home ownership skills.</p>
          </div>
        </div>
        <div v-scrollinto="" class="scroll-into-view flex flex-wrap mb-8">
          <div class="w-full pb:4 md:w-1/5 pr-8 flex items-center justify-center md:justify-end big-icon ">
            <i class="icomoon icon-handshake-o yellow--text"></i>
          </div>
          <div class="w-full mt-5 md:w-4/5">
            <h3 class="font-bold yellow--text uppercase text-3xl">GET THE RESOURCES</h3>
            <p class="rich-text text-white">Develop strategic partnerships with banks, credit unions, and
community development financing institutions (CDFIs). Educate folks on creating a
cooperative funding model that creates communal wealth and resources. Prioritize
economic opportunities with Black-owned businesses for bidding on jobs.</p>
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
@import '~/assets/css/main';

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
    font-size 7.5rem;
    .icon-handshake-o
      font-size 6rem;
    line-height 1;
    
+for_breakpoint(xs sm)
  .solution.wrapper
    padding 0 30px;


</style>
