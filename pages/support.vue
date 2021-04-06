<template>
  <div class="rebuild wrapper md:pl-8 md:pr-8 pl-4 pr-4">
    <div class="content flex pt-6 w-full">
      <div class="right-content md:w-4/5 mx-auto text-white rich-text">
        <div class="flex">
          <div class="w-full pr-8">
            <h2 class="text-6xl">Support</h2>
            <p class="yellow--text text-2xl">Lend your talents to the cause. Complete the form below and let us know how you can help to support Black Detroiters Rebuild.</p>
          </div>
        </div>
        <form class="form-wrapper form-container mt-8 mb-16" id="supportForm" method="POST" data-netlify="true" action="/success" name="support" lazy-validation>
            <div class="flex flex-wrap">
              <div class="input-field w-full md:w-1/2 md:pr-4" >
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" ref="focusElementRef" v-model="support.name" name="name" required />
                <label :class="{'active': isActive(support.name)}" for="name">Name</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="email" v-model="support.email" name="email" required />
                <label :class="{'active': isActive(support.email)}" for="email">E-mail</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" v-model="support.phone" name="phone" required />
                <label :class="{'active': isActive(support.phone)}" for="phone">Phone</label>
              </div>
              <div class="w-full md:w-1/2 md:pr-4">
                <select-component :is-multi="true"  label="In which areas do you have expertise (select all that apply) " :items="supportItems" :field.sync="support.support"></select-component>              
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4" v-show="showConstruction">
                <input type="text" v-model="support.constructionType" name="constructionType" />
                <label :class="{'active': isActive(support.constructionType)}" for="constructionType">Construction Type</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4" v-show="showOther">
                <input type="text" v-model="support.other" name="other" />
                <label :class="{'active': isActive(support.other)}" for="other">Other</label>
              </div>
              <div class="w-full">
                <input type="submit" @click.prevent="submit" class="btn btn-default" value="Submit" />
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,  onMounted, reactive, toRefs, useMeta,  useRouter } from '@nuxtjs/composition-api'
import SelectComponent from './../components/Select.vue';
import { ISelectOption } from '~/store/entities/form-entity';
import { routes } from '~/router';

export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {SelectComponent},
  head: {},
  setup() {
    const router = useRouter();

    onMounted(() => {
    })
    const data = reactive({
      defaultVals: {},
      supportItems: [
        {
          text: 'Construction (please specify)',
          value: 'Construction'
        },
        {
          text: 'Real Estate Development',
          value: 'Real Estate Development'
        },
        {
          text: 'Community Development',
          value: 'Community Development'
        },
        {
          text: 'Community Engagement',
          value: 'Community Engagement'
        },
        {
          text: 'Architecture & Design',
          value: 'Architecture & Design'
        },
        {
          text: 'Landscaping',
          value: 'Landscaping'
        },
        {
          text: 'Greenspace Design',
          value: 'Greenspace Design'
        },
        {
          text: 'Agriculture & Urban Farming',
          value: 'Agriculture & Urban Farming'
        },
        {
          text: 'Funding',
          value: 'Funding'
        },
        {
          text: 'Other (please specify)',
          value: 'Other'
        },
      ] as ISelectOption[],
      support: {
        name: '',
        email: '',
        phone: '',
        support: '' as string | string[],
        other: '',
        constructionType: '',
      },
    })
    const { title } = useMeta({ title: 'Support | Black Detroiters Rebuild' })
    const showConstruction = computed(() => {
      return data.support.support && data.support.support.indexOf('Construction') > -1;
    })
    const showOther = computed(() => {
      return data.support.support && data.support.support.indexOf('Other') > -1;
    })
    const isActive = (field: string) => {
      return field && field.length > 0;
    }
    const submit = () => {
      let myForm = document.getElementById('supportForm') as HTMLFormElement;
      let formData = new FormData(myForm)
      fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
      })
      router.push(routes.success.path);
    }
    return {
      ...toRefs(data), isActive, showOther, showConstruction, submit
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
.rebuild.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  background-color: var(--dark-blue);
  width: 100%;
  font-family: var(--sans-serif)
  h2
    border-bottom solid 2px var(--blue);
    margin-bottom 20px;
  .content
    margin-top 120px
  .form-buttons
    text-align center;
    button
      &:hover, &.active
        border solid 1px white
        i
          color white;
    i
      font-size 200px
      transition color 0.3s ease-in-out;  

</style>
