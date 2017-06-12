<template>
  <div class="screen--full">
    <div class="container-fluid screen--full container--first">
      <div class="row screen--full">
        <div class="col-5 fullscreen__image">
          <img src="../assets/hannesleitner.jpg" width="700" />
        </div>
        <div class="col-7 fullscreen__text">
          <h1 id="test">Hi, I am Hannes Leitner</h1>
          <p id="teaser" class="lead">I do <span v-bind:style="codeStyle">Code</span> and <span  v-bind:style="designStyle">Design</span></p>
          <!--
          <p class="display-4">I also like to <span v-bind:style="exerciseStyle">exercise</span> and <span v-bind:style="feelingStyle">outside in the sun</span></p>
          -->
          <br />
          <my-timeline></my-timeline>
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
    <div class="container-fluid container--second">

      <!--
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
      -->

      <div class="row text-center">
        <div class="col-12 col-md-2">
          <h3>Get in touch</h3>
        </div>
        <div class="col-12 col-md-2">
          <my-email text="send me a mail"><img src="../assets/mail_gray.png" height="50"></my-email>
        </div>
        <div class="col-12 col-md-2">
          <a href="https://www.xing.com/profile/Hannes_Leitner13" target="_blank">
            <img src="../assets/xing_gray.png" height="50" />
          </a>
        </div>
        <div class="col-12 col-md-2">
          <a href="https://twitter.com/hannes_leitner" target="_blank">
            <img src="../assets/twitter_gray.png" height="50" />
          </a>
        </div>
        <div class="col-12 col-md-2">
          <a href="https://github.com/barnholdy" target="_blank">
            <img src="../assets/github_gray.png" height="50" />
          </a>
        </div>
        <div class="col-12 col-md-2">
          <a href="https://www.researchgate.net/profile/Hannes_Leitner" target="_blank">
            <img src="../assets/resaechgate_gray.png" height="50" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { VueTyper } from 'vue-typer'
import ScrollMagic from 'scrollmagic'
import MyTimeline from '@/components/MyTimeline'
import MyEmail from '@/components/MyEmail'

// init controller
var controller = new ScrollMagic.Controller()

// create a scene
var scene = new ScrollMagic.Scene({
  duration: 100,    // the scene should last for a scroll distance of 100px
  offset: 50        // start this scene after scrolling for 50px
})
scene.setPin('#test') // pins the element for the the scene's duration
scene.addTo(controller) // assign the scene to the controller

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
        // '#3c4653', '#3c4653', '#3c4653', '#3c4653'
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

.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

.screen--full {
  height: 100%;
}

.container--first {
  background-color: #fbfcfe;
  border-bottom: solid 1px #ddd;
}

.container--second {
  background-color: #ffffff;
  padding: 20px;
}

.container--second .col-12 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.fullscreen__image img {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fullscreen__text {
  margin-top: 200px;
}

h1{
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 2.2rem;
}

.lead{
  font-weight: 500;
  font-size: 3.3rem;
}

h3 {
  line-height: 50px;
  font-weight: 500;
}

</style>
