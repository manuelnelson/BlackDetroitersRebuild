<template>
  <div class="container">
    <img class="background-image" src="~/assets/MainSplash.jpg" />
    <div class="text-content flex fixed md:w-auto">
      <div class="w-full md:w-2/5 p-8">
        <div>
          <div class="logo">
            <img class="w-full" src="~/assets/logo.png" />
          </div>
          <div class="text-left pt-8 splash-text" v-if="isMobile">
            <p>
              Black Detroiters Rebuild: Virginia Park Community is a diverse coalition of neighbors, businesses, activists and non-profits who believe that property ownership by Detroit’s African American residents is the first step in rejuvenating our neighborhoods. Absentee owners - oftentimes out of state investors - are responsible for continuing degradation of our communities and have not been adequately held accountable by the City of Detroit. The Herman Kiefer project with Ron Castellano from New York City is a devastating example of this and a bad deal for Detroiters. We want to end his agreement with the Detroit Land Bank Authority that gives him the right to own approximately 125 homes and 400 lots within the Virginia Park Community. Instead, we demand that these homes and lots be sold to Detroiters with 80% of these properties being reserved for African-American residents.         </p>
            <p>
              We don’t need outside saviors to build back better, we need collaborators and capital that cares about Black people in Detroit.
            </p>
          </div>
          <span class="yellow--text uppercase mt-4 mb-4 block text-2xl text-left">Full website coming soon. Sign up &amp; stay updated!</span>
        </div>
        <form class="flex mb-8">
          <input class="w-3/4" placeholder="email" type="email" v-model="email" />
          <button class="ml-4" type="submit">submit</button>
        </form>
      </div> 
      <div v-if="!isMobile" class="w-3/5 p-8 text-left splash-text">
        <p>
          Black Detroiters Rebuild: Virginia Park Community is a diverse coalition of neighbors, businesses, activists and non-profits who believe that property ownership by Detroit’s African American residents is the first step in rejuvenating our neighborhoods. Absentee owners - oftentimes out of state investors - are responsible for continuing degradation of our communities and have not been adequately held accountable by the City of Detroit. The Herman Kiefer project with Ron Castellano from New York City is a devastating example of this and a bad deal for Detroiters. We want to end his agreement with the Detroit Land Bank Authority that gives him the right to own approximately 125 homes and 400 lots within the Virginia Park Community. Instead, we demand that these homes and lots be sold to Detroiters with 80% of these properties being reserved for African-American residents.         </p>
        <p>
          We don’t need outside saviors to build back better, we need collaborators and capital that cares about Black people in Detroit.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    const data = reactive({
      email: '',
      isMobile: false
    })
    const { title } = useMeta({ title: 'Home | Black Detroiters Rebuild' })
    const resize = () => {
      data.isMobile = window.innerWidth < 768;
    }
    if(process.browser) {
      window.addEventListener('resize', resize)
    }
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style>
@screen md { 
  .text-content {
    overflow-y: hidden;
    width: auto !important;
  }
}
</style>
<style lang="scss"> 
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  .logo {
    max-width: 340px;
  }
  p {
    font-size: 16px;
  }
  p + p {
    margin-top: 16px;
  }
  .background-image {
    object-fit: cover;
    object-position: bottom;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .text-content {
    background-color: rgba(0,0,0,0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    min-width: 65%;
    max-height: 90%;
    width: 90%;
    overflow-y: auto;
  }
}

.splash-text {
  overflow-y: auto;
}
form {
  input {
    color: black;
    padding: 8px;
    font-size: 18px;
    &::placeholder {
      color: #4d4d4d;
    }
  }
}
button {
  background-color: #4d4d4d;
  padding: 8px 16px;
}


</style>
