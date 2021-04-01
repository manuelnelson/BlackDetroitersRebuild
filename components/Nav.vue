<template>
    <nav class="navigation fixed w-full p-8">
        <div class="flex justify-between items-center">
            <div class="logo">
                <nuxt-link to="/"><img alt="Black Detroiters Rebuild Logo" src="~/assets/logo.png" /></nuxt-link>
            </div>
            <div class="nav-menu flex justify-end text-4xl yellow--text">
                <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.about.path">About Us.</nuxt-link>        
                <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.problem.path">The Problems.</nuxt-link>        
                <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.solution.path">Solutions.</nuxt-link>        
                <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.rebuild.path">Rebuild.</nuxt-link>        
            </div>
            <nuxt-link class="btn btn-default pr-4 font-bold text-4xl h-full uppercase pl-4" :to="routes.support.path">Support</nuxt-link>        
        </div>
    </nav>    
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import {routes} from '../router';
export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    onMounted(() => {
        
    })
    const data = reactive({
    });

    return {
      ...toRefs(data), routes
    }
  },
})
</script>
<style lang="stylus">
    @import '~/assets/css/main';
        
    $logo-width = 250px;
    $spacing = 40px;
    $button-width = 200px;
    $bar-width = $logo-width + $spacing + $button-width;
    .navigation
        z-index 3;
        .nav-link
            transition color 0.2s ease-in-out;
            &:hover 
                color $white;
        .logo
            width: $logo-width;
        .nav-menu
            width "calc(100% - %s)" % $bar-width
            background-color: rgba(0,0,0,0.5);
            height: 64px;
        // top: 30px;

</style>