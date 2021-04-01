<template>
  <div class="rebuild wrapper md:pl-8 md:pr-8 pl-4 pr-4">
    <div class="content flex pt-6">
      <div class="right-content md:w-4/5 text-white rich-text">
        <div class="flex">
          <div class="w-full pr-8">
            <h3 class="text-6xl">Rebuild!</h3>
            <p class="yellow--text text-4xl">These homes won’t rebuild themselves;
                we need YOU to build back better.</p>
          </div>
        </div>
        <form class="form-wrapper form-container mt-8" method="POST" data-netlify="true" action="/success" name="buyhouse" lazy-validation>
            <h3 class="text-4xl">Buy A House</h3>
            <div class="flex flex-wrap">
              <div class="input-field w-full md:w-1/2 md:pr-4" >
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" ref="focusElementRef" v-model="contact.name" name="name" required />
                <label :class="{'active': isActive(contact.name)}" for="name">Name</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="email" v-model="contact.email" name="email" required />
                <label :class="{'active': isActive(contact.email)}" for="email">E-mail</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" v-model="contact.phone" name="phone" required />
                <label :class="{'active': isActive(contact.phone)}" for="phone">Phone</label>
              </div>
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Are you a Detroit Resident</span>
                <label class="container-radio mr-4" for="resident">
                    Yes
                    <input id="resident" value="Yes" v-model="contact.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="resident">
                    No
                    <input id="resident" value="No" v-model="contact.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                  <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                  <textarea placeholder="Do you have a connection to the Virginia Park Community? If so, please describe." class="materialize-textarea" v-model="contact.connection" name="connection"></textarea>
              </div>   
              <div class="w-full md:w-1/2 md:pr-4">
                <select-component :is-multi="true"  label="What are you looking for?" :items="lookForItems" :field.sync="contact.lookingFor"></select-component>              
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="Have you ever owned a home? Please describe." class="materialize-textarea" v-model="contact.ownedAHome" name="ownedAHome"></textarea>
              </div>               
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="Have you ever renovated a property? Please describe." class="materialize-textarea" v-model="contact.renovatedAProperty" name="renovatedAProperty"></textarea>
              </div>     
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Do you have funding to complete your project? </span>
                <label class="container-radio mr-4" for="funding">
                    Yes
                    <input id="funding" value="Yes" v-model="contact.funding" type="radio" name="funding"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="funding">
                    No
                    <input id="funding" value="No" v-model="contact.funding" type="radio" name="funding"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="What kind of support do you need from the BDR community? " class="materialize-textarea" v-model="contact.support" name="support"></textarea>
              </div>  
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="How did you learn about Black Detroiters Rebuild: Virginia Park Community?" class="materialize-textarea" v-model="contact.learnAbout" name="learnAbout"></textarea>
              </div>               
              <div class="w-full">
                <button type="submit" class="btn btn-default">Submit</button>
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import axios from 'axios';
import SelectComponent from './../components/Select.vue';
import { FieldType, FormEntity, FormField, ISelectOption, ValidationType } from '~/store/entities/form-entity';
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: '/.netlify/functions'
})
export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {SelectComponent},
  head: {},
  setup() {
    onMounted(() => {
    })
    const data = reactive({
      defaultVals: {},
      lookForItems: [
        {
          text: 'Renovated',
          value: 'Renovated'
        },
        {
          text: 'Needs Renovation',
          value: 'Needs Renovation'
        },
        {
          text: 'Single Family',
          value: 'Single Family'
        },
        {
          text: 'Two Family',
          value: 'Two Family'
        },
      ] as ISelectOption[],
      contact: {
        name: '',
        email: '',
        phone: '',
        resident: false,
        connection: '',
        lookingFor: '',
        ownedAHome: '',
        renovatedAProperty: '',
        funding: false,
        support: '',
        vacantLot: false,
        learnAbout: ''

      }
    })
    const { title } = useMeta({ title: 'Rebuild | Black Detroiters Rebuild' })

    const isActive = (field: string) => {
      return field && field.length > 0;
    }
    return {
      ...toRefs(data), isActive
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
  width: 100%;
  font-family: var(--sans-serif)
  .content
    margin-top 120px
  

</style>
