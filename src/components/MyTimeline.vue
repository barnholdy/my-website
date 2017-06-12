<template>
  <div>
    <svg width="550" height="400">
      <path
        v-for="(layer, i) in layers0"
        v-bind:d="area(layer)"

        v-bind:fill="getFill(i)"
        fill-opacity="0.9"
      ></path>
    </svg>
  </div>
</template>

<script>
import Vue from 'vue'
import * as d3 from 'd3'
import * as TWEEN from 'tween.js'
import _ from 'lodash'

export default {
  name: 'my-timeline',
  data: function () {
    return {
      n: 2, // number of layers
      m: 200, // number of samples per layer
      k: 10, // number of bumps per layer
      layers0: null,
      layers1: null,
      layers: null,
      area: null,
      colors: [
        '#1ac7c2', '#28a3dc', '#21b0d5', '#25e893'
      ]
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  mounted: function () {
    window.addEventListener('resize', this.onResize)
    this.init()
    this.onResize()
  },
  methods: {
    init: function () {
      var stack = d3.stack().keys(d3.range(this.n)).offset(d3.stackOffsetWiggle)
      this.layers0 = stack(d3.transpose(d3.range(this.n).map(() => this.bumps(this.m, this.k))))
      this.layers1 = stack(d3.transpose(d3.range(this.n).map(() => this.bumps(this.m, this.k))))
      this.layers = this.layers0.concat(this.layers1)
      console.log(this.layers0)
    },
    update: function () {
      // var x = d3.scaleLinear()
      //   .domain([0, this.m - 1])
      //   .range([0, this.width])
      // var y = d3.scaleLinear()
      //   .domain([d3.min(this.layers, this.stackMin), d3.max(this.layers, this.stackMax)])
      //   .range([this.height, 0])
      var x = d3.scaleLinear()
        .domain([0, this.m - 1])
        .range([0, this.width])
      var y = d3.scaleLinear()
        .domain([d3.min(this.layers, this.stackMin), d3.max(this.layers, this.stackMax)])
        .range([this.height, 0])
      this.area = d3.area()
        .x((d, i) => x(i))
        .y0((d) => y(d[0]))
        .y1((d) => y(d[1]))
    },
    onResize: function () {
      if (this.$el) {
        this.width = this.$el.offsetWidth
        this.height = this.$el.offsetHeight
        this.update()
        this.transition()
      }
    },
    getFill: function (i) {
      // var z = d3.interpolateCool
      // return z(Math.random())
      return this.colors[i]
    },
    transition: function () {
      var workingArray1 = _.flattenDeep(this.layers0)
      var workingArray2 = _.flattenDeep(this.layers1)
      this.layers1 = _.cloneDeep(this.layers0)
      var that = this
      var tween = new TWEEN.Tween(workingArray1)
        .to(workingArray2, 10000)
        .onUpdate(function () {
          let count = 0
          for (let i = 0; i < that.layers0.length; i++) {
            for (let j = 0; j < that.layers0[i].length; j++) {
              Vue.set(that.layers0[i][j], 0, this[count++])
              Vue.set(that.layers0[i][j], 1, this[count++])
            }
          }
        })
        .onComplete(function () {
          // that.transition()
        })
      tween
        .easing(TWEEN.Easing.Quadratic.InOut)
        // .yoyo()
        // .repeat(Infinity)
        .start()
      requestAnimationFrame(animate)
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
    },
    bumps: function (n, m) {
      var a = []
      var i
      for (i = 0; i < n; ++i) a[i] = 0
      for (i = 0; i < m; ++i) this.bump(a, n)
      return a
    },
    bump: function (a, n) {
      var x = 1 / (0.1 + Math.random())
      var y = 2 * Math.random() - 0.5
      var z = 10 / (0.1 + Math.random())
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z
        a[i] += x * Math.exp(-w * w)
      }
    },
    stackMin: function (layer) {
      return d3.min(layer, (d) => d[0])
    },
    stackMax: function (layer) {
      return d3.max(layer, (d) => d[1])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
