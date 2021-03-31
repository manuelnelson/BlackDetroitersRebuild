<template>
  <div class="rebuild wrapper">
    <div class="content flex pt-6">
      <div class="right-content w-4/5 text-white rich-text">
        <div class="flex">
          <div class="w-full pr-8">
            <h3 class="text-6xl">Rebuild!</h3>
            <p class="yellow--text text-4xl">These homes won’t rebuild themselves;
                we need YOU to build back better.</p>
          </div>
        </div>
        <form class="form-wrapper mt-8" method="POST" data-netlify="true" action="/success" name="buyhouse" lazy-validation>
            <h3 class="text-4xl">Buy A House</h3>
            <div class="flex flex-wrap">
              <div class="input-field md:w-1/2 md:pr-4" >
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" ref="focusElementRef" v-model="contact.name" name="name" required />
                <label :class="{'active': isActive(contact.name)}" for="name">Name</label>
              </div>
              <div class="input-field md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="email" v-model="contact.email" name="email" required />
                <label :class="{'active': isActive(contact.email)}" for="email">E-mail</label>
              </div>
              <div class="input-field md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" v-model="contact.phone" name="phone" required />
                <label :class="{'active': isActive(contact.phone)}" for="phone">Phone</label>
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
import { FieldType, FormEntity, FormField, ValidationType } from '~/store/entities/form-entity';
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: '/.netlify/functions'
})
export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {},
  head: {},
  setup() {
    onMounted(() => {
    })
    const data = reactive({
      defaultVals: {},
      contact: {
        name: '',
        email: '',
        phone: ''
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
  padding 0 80px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  font-family: var(--sans-serif)
  .content
    margin-top 120px

</style>
