<template>
  <div class="rebuild wrapper md:pl-8 md:pr-8 pl-4 pr-4">
    <div class="content flex pt-6 w-full">
      <div class="right-content md:w-4/5 mx-auto text-white rich-text">
        <div class="flex">
          <div class="w-full pr-8">
            <h2 class="text-6xl">Rebuild</h2> 
            <p class="yellow--text text-4xl">These homes won’t rebuild themselves;
                we need YOU to build back better. </p>
              <p class="text-underline">Please complete the short forms below if you are interested in purchasing a home or a vacant lot in the Virginia Park Community. We will follow up with next steps shortly.</p>
          </div>
        </div>
        <div class="flex justify-evenly form-buttons">
          <div class="w-2/5 lg:w-1/4 mb-8 mt-8">
            <button class="p-3 md:p-6 w-full shadow-lg rounded-lg" @click="toggleHouseForm">
              <i class="material-icons yellow--text">house</i>
              <span class="text-2xl yellow--text font-bold block">Buy A House</span>
            </button>
          </div>
          <div class="w-2/5 lg:w-1/4 mb-8 mt-8"> 
            <button class="p-3 md:p-6 w-full shadow-lg rounded-lg" @click="toggleLotForm">
              <i class="material-icons yellow--text">local_florist</i>
              <span class="text-2xl yellow--text font-bold block">Buy A Lot</span>
            </button>
          </div>
        </div>
        <form id="houseForm" v-show="showHouseForm" class="form-wrapper form-container mt-8 mb-16" method="POST" data-netlify="true" action="/success/" name="buyhouse" lazy-validation>
            <h3 class="text-4xl">Buy A House</h3>
            <input type="hidden" name="form-name" value="buyhouse"/>
            <div class="flex flex-wrap">
              <div class="input-field w-full md:w-1/2 md:pr-4" >
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" ref="focusElementRef" v-model="ownAHome.name" name="name" required />
                <label :class="{'active': isActive(ownAHome.name)}" for="name">Name</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="email" v-model="ownAHome.email" name="email" required />
                <label :class="{'active': isActive(ownAHome.email)}" for="email">E-mail</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" v-model="ownAHome.phone" name="phone" required />
                <label :class="{'active': isActive(ownAHome.phone)}" for="phone">Phone</label>
              </div>
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Are you a Detroit Resident</span>
                <label class="container-radio mr-4" for="resident">
                    Yes
                    <input id="resident" value="Yes" v-model="ownAHome.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="resident">
                    No
                    <input id="resident" value="No" v-model="ownAHome.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                  <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                  <textarea placeholder="Do you have a connection to the Virginia Park Community? If so, please describe." class="materialize-textarea" v-model="ownAHome.connection" name="connection"></textarea>
              </div>   
              <div class="w-full md:w-1/2 md:pr-4">
                <select-component :is-multi="true" name="lookingFor"  label="What are you looking for?" :items="lookForItems" :field.sync="ownAHome.lookingFor"></select-component>              
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="Have you ever owned a home? Please describe." class="materialize-textarea" v-model="ownAHome.ownedAHome" name="ownedAHome"></textarea>
              </div>               
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="Have you ever renovated a property? Please describe." class="materialize-textarea" v-model="ownAHome.renovatedAProperty" name="renovatedAProperty"></textarea>
              </div>     
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Do you have funding to complete your project? </span>
                <label class="container-radio mr-4" for="funding">
                    Yes
                    <input id="funding" value="Yes" v-model="ownAHome.funding" type="radio" name="funding"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="funding">
                    No
                    <input id="funding" value="No" v-model="ownAHome.funding" type="radio" name="funding"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="What kind of support do you need from the BDR community? " class="materialize-textarea" v-model="ownAHome.support" name="support"></textarea>
              </div>  
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="How did you learn about Black Detroiters Rebuild: Virginia Park Community?" class="materialize-textarea" v-model="ownAHome.learnAbout" name="learnAbout"></textarea>
              </div>               
              <div class="w-full">
                <input type="submit" @click.prevent="submitHouse" class="btn btn-default" value="Send" />
              </div>
            </div>
        </form>
        <form id="lotForm" v-show="showLotForm" class="form-wrapper form-container mt-8 mb-16" method="POST" data-netlify="true" action="/success/" name="buylot" lazy-validation>
            <h3 class="text-4xl">Buy A Lot</h3>
            <input type="hidden" name="form-name" value="buylot"/>
            <div class="flex flex-wrap">
              <div class="input-field w-full md:w-1/2 md:pr-4" >
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" ref="focusElementRef" v-model="ownALot.name" name="name" required />
                <label :class="{'active': isActive(ownALot.name)}" for="name">Name</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="email" v-model="ownALot.email" name="email" required />
                <label :class="{'active': isActive(ownALot.email)}" for="email">E-mail</label>
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                <input type="text" v-model="ownALot.phone" name="phone" required />
                <label :class="{'active': isActive(ownALot.phone)}" for="phone">Phone</label>
              </div>
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Are you a Detroit Resident</span>
                <label class="container-radio mr-4" for="resident">
                    Yes
                    <input id="resident" value="Yes" v-model="ownALot.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="resident">
                    No
                    <input id="resident" value="No" v-model="ownALot.resident" type="radio" name="resident"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                  <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
                  <textarea placeholder="Do you have a connection to the Virginia Park Community? If so, please describe." class="materialize-textarea" v-model="ownALot.connection" name="connection"></textarea>
              </div>   
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="Have you ever purchased a vacant lot before? Please describe.." class="materialize-textarea" v-model="ownALot.ownedALot" name="ownedAHome"></textarea>
              </div>               
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="What interests you in vacant lots?" class="materialize-textarea" v-model="ownALot.interestsYou" name="interestsYou"></textarea>
              </div>     
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="What do you plan to do with the lot? " class="materialize-textarea" v-model="ownALot.planToDo" name="planToDo"></textarea>
              </div>  
              <div class="flex flex-wrap w-full md:w-1/2 md:pr-4">
                <span class="w-full block">Are you interested in purchasing a home? </span>
                <label class="container-radio mr-4" for="purchaseAHome">
                    Yes
                    <input id="purchaseAHome" value="Yes" v-model="ownALot.purchaseAHome" type="radio" name="purchaseAHome"/>
                    <span class="checkmark"></span>
                </label>  
                <label class="container-radio" for="funding">
                    No
                    <input id="purchaseAHome" value="No" v-model="ownALot.purchaseAHome" type="radio" name="purchaseAHome"/>
                    <span class="checkmark"></span>
                </label>  
              </div>
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="What kind of support do you need from the BDR community?" class="materialize-textarea" v-model="ownALot.support" name="support"></textarea>
              </div>               
              <div class="input-field w-full md:w-1/2 md:pr-4">
                <textarea placeholder="How did you learn about Black Detroiters Rebuild: Virginia Park Community?" class="materialize-textarea" v-model="ownALot.learnAbout" name="learnAbout"></textarea>
              </div>               
              <div class="w-full">
                <input type="submit" @click.prevent="submitLot" class="btn btn-default" value="Send" />
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, reactive, toRefs, useMeta, useRouter } from '@nuxtjs/composition-api'
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
      showHouseForm: false,
      showLotForm: false,
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
      ownAHome: {
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
      },
      ownALot: {
        name: '',
        email: '',
        phone: '',
        resident: false,
        connection: '',
        ownedALot: '',
        interestsYou: '',
        planToDo: '',
        purchaseAHome: false,
        support: '',
        learnAbout: ''
      },
    })
    const { title } = useMeta({ title: 'Rebuild | Black Detroiters Rebuild' })
    const toggleHouseForm = async () => {
      data.showLotForm = false;
      data.showHouseForm = !data.showHouseForm;
      await nextTick();
      if(document.getElementById('houseForm'))
        document.getElementById('houseForm').scrollIntoView({behavior:'smooth'});
    }
    const toggleLotForm = async () => {
      data.showHouseForm = false;
      data.showLotForm = !data.showLotForm;
      await nextTick();
      if(document.getElementById('lotForm'))
        document.getElementById('lotForm').scrollIntoView({behavior:'smooth'});
    }
    const submitHouse = async () => {
      let myForm = document.getElementById('houseForm') as HTMLFormElement;
      let formData = new FormData(myForm);
      
      await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString()
      })
      router.push(routes.success.path);
    }
    const submitLot = async () => {
      let myForm = document.getElementById('lotForm') as HTMLFormElement;
      let formData = new FormData(myForm);
      
      await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString()
      })
      router.push(routes.success.path);
    }
    const isActive = (field: string) => {
      return field && field.length > 0;
    }
    return {
      ...toRefs(data), isActive, toggleHouseForm, toggleLotForm, submitLot, submitHouse
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
      font-size 12.5rem
      transition color 0.3s ease-in-out;  

+for_breakpoint(xs sm)
  .rebuild.wrapper 
    .form-buttons
      i
        font-size 10.5rem
</style>
