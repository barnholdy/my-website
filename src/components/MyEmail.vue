<template>
    <a :href="getMailTo" :alt="text" :class="classes"><slot /></a>
</template>

<script>
export default {
  name: 'my-email',
  props: ['text', 'src', 'classes'],
  computed: {
    getMailTo: function () {
      var ghcjmxf = ['h', 'a', 'n', 'n', 'e', 's', '.', 'l', 'e', 'i', 't', 'n', 'e', 'r', '@', 'm', 'e', '.', 'c', 'o', 'm']
      var dzgabbm = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      var lsrhqrp = []
      for (let i = 0; i < dzgabbm.length; i++) {
        lsrhqrp[dzgabbm[i]] = ghcjmxf[i]
      }
      var result = ''
      for (let i = 0; i < lsrhqrp.length; i++) {
        result += lsrhqrp[i]
      }
      return 'mailto:' + result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
