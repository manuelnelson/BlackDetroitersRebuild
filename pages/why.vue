<template>
  <div class="problem wrapper">
    <div class="content flex pt-6">
      <div class="left-content hidden md:block w-1/6 pr-8">
        <img src="~/assets/PowerToThePeople.png" class="w-full" alt="Power to the people">
      </div>
      <div class="right-content w-full md:w-5/6 text-white rich-text">
        <h3 class="text-6xl">Our Why</h3>
        <div class="flex flex-wrap">
          <div v-scrollinto="" class="scroll-into-view w-full md:w-3/5 pr-8">
            <ul >
              <li>The developer’s agreement with the Detroit Lank Bank Authority allows him to purchase
                homes for ONLY $500 each and lots for $300. While in contrast, public buyer price starts
                at $1,000 for homes and vacant lots must be purchased at market value.</li>
              <li>The developer has no proven track record and made virtually no progress
                since his 2015 deal.</li>
              <li>Detroiters, with a vested interest in the community, have repeatedly been
                denied the opportunity to purchase homes and lots, because they were
                reserved for the developer.</li>
              <li>Our community continues to lose homes to arson, despite being under
              “24/7 security.”</li>
              <li>Home ownership is the leading way to accumulate generational wealth.</li>
              <li>Detroit Land Bank Authority owns more than 90,000 parcels - more land than all
                other cities’ land banks, combined.</li>
              <li>With an 80% Black population, Detroit is the Blackest major city in the United
                  States.</li>
              <li>For more than a decade, Detroit was the poorest big city in the United States.
                Detroit now ranks second, with 30.6% of residents living below the poverty line.</li>
              <li>Until the early 2000s, Detroit, Michigan had some of the highest rates of Black
                    homeownership in the country. After the Great Recession, the percentage of
                    African Americans who own their homes in Michigan dropped down more than
                    any other state, to 40%.</li>
            </ul>
          </div>
          <div v-scrollinto="" class="scroll-into-view  w-full md:w-2/5 pl-8">
            <iframe src="https://www.google.com/maps/d/embed?mid=1G6etZfTIg6x5O3f-RSsznUBE15R0jVI5" width="100%" height="480"></iframe>
            <span class="yellow--text block text-center mt-4 p-4 text-3xl">WITH ALL THIS LAND &amp; OUR PEOPLE IN NEED OF ECONOMIC OPPORTUNITY, DETROIT IS WELL-POISED TO TRY A NEW APPROACH</span>
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

.problem.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  padding 0 80px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  background-color: var(--dark-blue);
  width: 100%;
  font-family: var(--sans-serif)
  h3
    border-bottom solid 2px var(--blue);
    margin-bottom 20px;
  ul
    li
      margin-bottom 20px
      list-style-type none !important;
      &::before 
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: var(--blue); /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        font-size 40px;
        line-height 24px;
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 32px; /* Also needed for space (tweak if needed) */
        margin-left: -32px; /* Also needed for space (tweak if needed) */
        top 4px;
        position relative
  .content
    margin-top 120px


+for_breakpoint(xs sm)
  .problem.wrapper
    padding 0 30px;


</style>
