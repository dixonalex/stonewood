
<template>
	<li v-bind:class="{ 'active': activePage }"><a v-on:click="updateActive" href="#">{{ nav-title }}<span class="sub-title">{{ nav-sub-title }}</span></a></li>
</template>

<script>
export default {
  name: 'nav-li',
  props: ['nav-title','nav-sub-title'],
  methods: {
  	updateActive: () => { this.activePage[index] = ! this.activePage[index]; }
  },
  data () {
    return {
    	activePage: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>