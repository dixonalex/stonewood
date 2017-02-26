<template>
  <div id="app">
    <bounce-loader id="spinner" :loading="loading" :color="color"></bounce-loader>
    <navbar v-show="!loading"></navbar>
    <transition name="fade"
      v-on:before-leave="beforeLeave"
      v-on:after-enter="afterEnter"
    >
      <router-view v-show="!loading"></router-view>
    </transition>
    <stonewood-footer v-cloak v-show="!loading"></stonewood-footer>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import Navbar from './components/Navbar'
import StonewoodFooter from './components/StonewoodFooter'
export default {
  name: 'app',
  data () {
    return {
      color: 'red',
      loading: true
    }
  },
  mounted () {
    this.loading = false
  },
  components: {
    Navbar,
    StonewoodFooter,
    BounceLoader
  },
  methods: {
    beforeLeave: function () {
      this.loading = true
    },
    afterEnter: function () {
      this.loading = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Droid Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
/* Transtion styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0 1s
}
/*Center spinner*/
#spinner {
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  top: 45%;
  width: 100px; /* Need a specific value to work */
}
</style>
