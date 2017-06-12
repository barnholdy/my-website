<template>
  <div class="screen--full">
    <div class="container-fluid screen--full container--first">
      <div class="row screen--full">
        <div class="hidden-sm-down col-5 fullscreen__image ">
          <img src="../assets/hannesleitner.jpg" width="700" />
        </div>
        <div class="col-12 col-md-7 fullscreen__text">
          <div id="trigger"></div>
          <div id="timeline">
            <!--
              <my-timeline></my-timeline>
            -->
          </div>
          <div id="image" class="hidden-md-up">
            <div class="img__crop--round">
              <img src="../assets/hannesleitner.jpg" width="300" />
            </div>
          </div>
          <h1 id="title">Hi, I am Hannes Leitner</h1>
          <p id="teaser" class="lead">
            I do <span v-bind:style="codeStyle">Code</span> and <span v-bind:style="designStyle">Design</span>
          </p>
          <br />
        </div>
      </div>
    </div>
    <div class="container-fluid container--second">
      <div class="row text-center">
        <div class="col-12 col-md-3">
          <h3>Get in touch</h3>
        </div>
        <div class="col-12 col-md-1">
          <my-email text="send me a mail"><img src="../assets/mail_gray.png" height="40"></my-email>
        </div>
        <div class="col-12 col-md-1">
          <a href="https://www.xing.com/profile/Hannes_Leitner13" target="_blank">
            <img src="../assets/xing_gray.png" height="40" />
          </a>
        </div>
        <div class="col-12 col-md-1">
          <a href="https://twitter.com/hannes_leitner" target="_blank">
            <img src="../assets/twitter_gray.png" height="40" />
          </a>
        </div>
        <div class="col-12 col-md-1">
          <a href="https://github.com/barnholdy" target="_blank">
            <img src="../assets/github_gray.png" height="40" />
          </a>
        </div>
        <div class="col-12 col-md-1">
          <a href="https://www.researchgate.net/profile/Hannes_Leitner" target="_blank">
            <img src="../assets/resaechgate_gray.png" height="40" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ScrollMagic = require('ScrollMagic')
require('animation.gsap')
// require('debug.addIndicators')
const TweenMax = require('TweenMax')
import MyTimeline from '@/components/MyTimeline'
import MyEmail from '@/components/MyEmail'

export default {
  name: 'hello',
  components: {
    MyTimeline,
    MyEmail
  },
  data: function () {
    return {
      colors: [
        '#1ac7c2', '#28a3dc', '#21b0d5', '#25e893'
        // '#3c4653', '#3c4653', '#3c4653', '#3c4653'
      ]
    }
  },
  mounted: function () {
    var controller = new ScrollMagic.Controller()
    var tweenTitle = TweenMax.to('#title', 1, {bottom: 180, opacity: 0})
    var tweenTeaser = TweenMax.to('#teaser', 1, {bottom: 70})
    new ScrollMagic.Scene({
      triggerElement: '#trigger', duration: 100, offset: 30
    })
    .setTween(tweenTitle)
    // .addIndicators()
    .addTo(controller)
    new ScrollMagic.Scene({
      triggerElement: '#trigger', duration: 100, offset: 30
    })
    .setTween(tweenTeaser)
    // .addIndicators()
    .addTo(controller)
  },
  computed: {
    codeStyle: function () {
      return 'color: ' + this.colors[0]
    },
    designStyle: function () {
      return 'color: ' + this.colors[1]
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
  position: absolute;
  bottom: 0px;
  right: 0px;
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

#trigger,
#timeline,
#title,
#teaser{
  position: absolute;
}

#trigger{
  bottom: 50vh;
}

#timeline{
  bottom: 200px;
}

#title{
  bottom: 130px;
}

#teaser{
  bottom: 20px;
  height: 100px;
  line-height: 60px;
}

#image{
  position: absolute;
  left: 50%;
  bottom: 250px;
  margin-left: -25%;
}

.img__crop--round{
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.img__crop--round img{
  display: inline;
  margin: 0 -5px;
}

</style>
