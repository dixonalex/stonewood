<template>
<div class="container">
  <div id="top"></div>
  <section class="gallery">
    <div class="row col-md-4">
      <ul>
        <a class="close" @click="collapseImage"></a>
        <li v-for="item in imgObjs">
          <a @click="expandImage(item)">
          <img :src="item.Src"/>
          </a>
        </li>
        <div v-show="false" v-for="item in imgObjs" class="port">
          <div class="row">
            <div class="description">
              <h1>{{item.Title}}</h1>
              <p>{{item.Description}}</p>
            </div>
            <img :src="item.Src" />
          </div>
        </div>
      </ul>
    </div>
    <div class="col-md-8">
      <img :src="ActiveImage.Src"/>
    </div>
  </section>
</div>
</template>

<script>
export default {

  name: 'Gallery',

  props: {
    imgObjs: {
      type: Array,
      required: function () {
        return [this.ImgObj]
      }
    }
  },

  methods: {
    expandImage: function (imgObj) {
      imgObj.Display = true
      console.log(this.ItemOpen)
    },
    collapseImage: function () {
      this.imgObjs.map(function (e) {
        e.Display = false
        return e
      })
      this.ItemOpen = false
    }
  },

  computed: {
    ActiveImage: function () {
      this.ImgObj = this.imgObjs.find(function (e) {
        return e.Display === true
      })
      return this.ImgObj
    }
  },

  data () {
    return {
      ImgObj: {
        Src: '',
        Title: '',
        Description: '',
        Display: false
      },
      ItemOpen: false,
      ItemOpenClass: 'item_open'
    }
  }
}
</script>

<style lang="sass" scoped>
.gallery
  div
    img
      width: 100%
      padding: 1%
    ul
      list-style: none
      overflow: hidden
      overflow-y: scroll
      height: 410px
      li
        img
          width: 100%
          cursor: pointer
          padding: 1%
          margin-left: 10%
</style>