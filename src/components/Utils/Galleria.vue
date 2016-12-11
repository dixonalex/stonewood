<template>
<div>
  <div class="galleria">
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {

  name: 'Galleria',

  props: {
    imgData: {
      type: Array,
      required: function () {
        return [this.ImgObj]
      }
    }
  },

  mounted () {
    Galleria.loadTheme('static/libs/galleria/themes/scroll/galleria-classicmod/galleria.classicmod.js')
    Galleria.run('.galleria',
    {
      dataSource: this.imgData
    })
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.galleria{ width: 1000px; height: 500px; margin: 0 auto; }
</style>