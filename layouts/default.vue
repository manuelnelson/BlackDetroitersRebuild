<template>
  <div @click="closeAll">
    <Nav/>
    <Nuxt />
  </div>
</template>

<style lang="stylus">

html 
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

body 
  background-color: var(--blue);

*,
*::before,
*::after 
  box-sizing: border-box;
  margin: 0;


</style>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import { globalStore } from '~/store';
import Nav from '../components/Nav.vue'
export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {Nav},
  head: {},
  setup() {
    const closeAll = () => {
      globalStore.state.menuIsOpen = false;
    }

    return { closeAll
    }
  },
})
</script>