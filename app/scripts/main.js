const Vue = require('vue');
const App = require('./app.vue');
const foo = require('./foo');

foo.speak();

new Vue({
  el: 'body',
  components: {
    app: App
  }
})