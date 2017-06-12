<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import WebFont from 'webfontloader'
export default {
  name: 'app'
}

WebFont.load({
  google: {
    families: ['Quicksand:300,400,500,700']
  }
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3c4653;
  height: 100%;
}
</style>
