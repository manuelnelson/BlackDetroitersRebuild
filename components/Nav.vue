<template>
    <header>
        <nav class="navigation fixed w-full p-8">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <nuxt-link to="/"><img alt="Black Detroiters Rebuild Logo" src="~/assets/logo.png" /></nuxt-link>
                </div>
                <div class="nav-menu justify-end flex items-center text-4xl yellow--text">
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.about.path">About.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.problem.path">Why.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.solution.path">Our Plan.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.rebuild.path">Rebuild.</nuxt-link>        
                </div>
                <nuxt-link class="support-link hidden md:inline-flex items-center btn btn-default pr-4 font-bold text-4xl uppercase pl-4" :to="routes.support.path">Support</nuxt-link>        
                <button title="menu" class="nav__menu text-color" @click.stop="openMenu"><i class="material-icons">menu</i></button>
            </div>
        </nav>    
        <section :class="{'open':menuIsOpen}" class="menu fixed h-full top-0 right-0 w-full md:w-1/2 lg:w-1/3 z-depth-4">
            <button title="menu" class="fixed top-0 right-0 p-3 btn-large btn-secondary" @click.stop="closeMenu"><i class="material-icons">close</i></button>
            <div class="menu__links m-10 p-10">
                <ul class=" text-center font-bold flex flex-col no-style text-4xl">  
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.about.path">About.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.problem.path">Why.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.solution.path">Our Plan.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4" :to="routes.rebuild.path">Rebuild.</nuxt-link>        
                    <nuxt-link class="pr-4 nav-link font-bold pl-4 text--yellow" :to="routes.support.path">Support.</nuxt-link>        
                </ul>
            </div>
        </section>
    </header>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import {routes} from '../router';
import {globalStore} from '../store'
export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    onMounted(() => {
        
    })
    const data = reactive({
    });
    const menuIsOpen = computed(() => {
      return globalStore.state.menuIsOpen
    })
    //methods
    //this method prevents the menu from closing when clicked inside.
    const doNothing = () => {

    }
    const openMenu = () => {
      globalStore.state.menuIsOpen = true;
    }
    const closeMenu = () => {
      globalStore.state.menuIsOpen = false;
    }


    return {
      ...toRefs(data), routes, openMenu, closeMenu, menuIsOpen
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
    .nav 
        &__menu 
            outline none;
            border none;        
            color white;  
            cursor pointer
            display none;
            i.material-icons 
                font-size px-to-rem(44px)
    .navigation
        z-index 3;
        .nav-link
            transition color 0.2s ease-in-out;
            display inline-block;
            line-height 1.1
            &:hover 
                color $white;
        .logo
            width: $logo-width;
        .nav-menu
            width "calc(100% - %s)" % $bar-width
            background-color: rgba(0,0,0,0.5);
            height: 64px;
        .support-link
            height 64px;
        +for_breakpoint(xs sm mid md)  
            $logo-width = 200px;
            $spacing = 30px;
            $button-width = 180px;
            $bar-width = $logo-width + $spacing + $button-width;
            .logo
                width: $logo-width;
            .nav-menu
                width "calc(100% - %s)" % $bar-width
            .nav-menu, .support-link
                font-size 1.8rem
        +for_breakpoint(xs sm mid) 
            .nav
                &__menu
                    display block;
            .nav-menu, .support-link
                display none

  .menu 
    background-color var(--primary) 
    z-index 81
    will-change: transform;
    transition: transform 200ms linear;
    transform: translateX(100%);
    a
      font-weight bold
      color white !important
      margin-right px-to-rem(20px);
      display inline-block
      font-size 3rem
      i.materical-icons 
        font-size 30px !important;
      &.router-link-exact-active 
        color var(--yellow);  
    a,button 
      color white !important
    &.open
      transform: translateX(0%);

</style>