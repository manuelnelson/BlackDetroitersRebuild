<template>
  <div class="problem wrapper">
    <div class="content flex pt-6">
      <div class="left-content w-1/6 pr-8">
        <img src="~/assets/PowerToThePeople.png" class="w-full" alt="Power to the people">
      </div>
      <div class="right-content w-5/6 text-white rich-text">
        <h3 class="text-6xl">The Problems</h3>
        <div class="flex">
          <div class="w-3/5 pr-8">
            <ul>
              <li>Ron Castellano has no proven track record and made virtually no
              progress since his 2015 deal. (show photos) - especially “rendering
              house” with trash pile out back, demo end up, taylor fire damage.</li>
              <li>Our community continues to lose homes to arson, despite being
under the “24/7 security” - link to CRIO report</li>
              <li>Detroiters, with a vested interest in the community, have repeatedly
been denied the opportunity to purchase homes and lots, because
they were reserved for Ron Castellano.</li>
              <li>The leading way Americans have accumulated generational
wealth is through homeownership.</li>
              <li>Until the early 2000s, Detroit had some of the highest rates of Black
homeownership in the Country. After the Great Recession, the
percentage of African Americans who own their own homes
dropped in Michigan more than any other state, down to 40%.</li>
              <li>Detroit – at approximately 80% African American – is the Blackest
major city in the United States.</li>
              <li>For a decade or more, Detroit was the poorest big City in the
United States. Detroit now ranks second at 30.6% of residents living
below the poverty line.</li>
              <li>Detroit Land Bank Authority owns more than 90,000 parcels -
more land than all other cities’ land banks, combined.</li>
            </ul>
          </div>
          <div class="w-1/2 pl-8">
            <iframe src="https://www.google.com/maps/d/embed?mid=1G6etZfTIg6x5O3f-RSsznUBE15R0jVI5" width="640" height="480"></iframe>
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
  .i4ewOd-pzNkMb-haAclf.QUIbkc
    display none;

</style>
