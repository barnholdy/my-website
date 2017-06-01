<template>
  <div class="screen--full">
    <div class="container-fluid screen--full">
      <div class="row screen--full">
        <div class="col-5 fullscreen__image">
          <img src="../assets/hannesleitner.jpg" width="700" />
        </div>
        <div class="col-7 fullscreen__text">
          <h1>Hi, I am Hannes Leitner</h1>
          <h1>I do <span v-bind:style="codeStyle">Code</span> and <span  v-bind:style="designStyle">Design</span></h1>
          <!--
          <h1>
            <vue-typer
            :text='["Hi. I am ....", "I do Code and Design."]'
            :pre-type-delay='1000'
            :type-delay='110'
            :repeat='0'
            @completed='onComplete()'>
            </vue-typer>
          </h1>
        -->
        </div>
      </div>
    </div>
    <div class="container-fluid screen--full">
      <div class="row">
        <div class="col">
          <my-timeline></my-timeline>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <p>I like to <span v-bind:style="exerciseStyle">exercise</span> (Today I did {{ steps.toLocaleString() }} steps).</p>
        </div>
        <div class="col-3">
          <p>I love the <span v-bind:style="feelingStyle">feeling</span> of the warming sun (The weather were I live is {{ weather }} now).</p>
        </div>
        <div class="col-3">
        </div>
        <div class="col-3">
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h3>Get in touch with me</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <my-email text="send me a mail"><img src="../assets/mail.png" width="50"></my-email>
        </div>
        <div class="col-3">
          <a href="https://www.xing.com/profile/Hannes_Leitner13" target="_blank">
            <img src="../assets/xing.svg" width="50" />
          </a>
        </div>
        <div class="col-3">
          <a href="https://twitter.com/hannes_leitner" target="_blank">
            <img src="../assets/twitter.png" width="50" />
          </a>
        </div>
        <div class="col-3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { VueTyper } from 'vue-typer'
import MyTimeline from '@/components/MyTimeline'
import MyEmail from '@/components/MyEmail'

export default {
  name: 'hello',
  components: {
    VueTyper,
    MyTimeline,
    MyEmail
  },
  data: function () {
    return {
      showRest: true,
      colors: [
        '#1ac7c2', '#28a3dc', '#21b0d5', '#25e893'
      ]
    }
  },
  created: function () {
    this.loadSteps()
    this.loadWeather()
    this.start()
  },
  computed: {
    ...mapState([
      'steps', 'weather'
    ]),
    codeStyle: function () {
      return 'color: ' + this.colors[0]
    },
    designStyle: function () {
      return 'color: ' + this.colors[1]
    },
    exerciseStyle: function () {
      return 'color: ' + this.colors[2]
    },
    feelingStyle: function () {
      return 'color: ' + this.colors[3]
    }
  },
  methods: {
    ...mapActions([
      'loadSteps', 'loadWeather'
    ]),
    start: function () {

    },
    onComplete: function () {
      this.showRest = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.screen--full {
  height: 100%;
  background-color: #fbfcfe;
}

.fullscreen__image img {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fullscreen__text {
  margin-top: 200px;
}


</style>
