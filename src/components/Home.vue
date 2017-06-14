<template>
  <div class="screen--full">
    <div id="container--first" class="container-fluid screen--full">
      <div class="row screen--full">
        <div id="fullscreen__image" class="col hidden-sm-down col-5">
          <img src="../assets/hannesleitner.jpg" />
        </div>
        <div id="fullscreen__text" class="col col-12 col-md-7">
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
          <h2 id="teaser" class="lead">
            I do <span v-bind:style="codeStyle">Code</span> and <span v-bind:style="designStyle">Design</span>
          </h2>
          <br />
        </div>
      </div>
    </div>
    <div class="container-fluid" id="container--second">
      <div class="row text-center">
        <div class="col col-12 col-md-3 col__heading">
          <h3 class="align-middle">Get in touch</h3>
        </div>
        <div class="col col-6 col-md-1 col__link">
          <my-email text="send me a mail" classes="mail img"></my-email>
        </div>
        <div class="col col-6 col-md-1 col__link">
          <a href="https://www.xing.com/profile/Hannes_Leitner13" target="_blank" class="xing img">
          </a>
        </div>
        <div class="col col-6 col-md-1 col__link">
          <a href="https://twitter.com/hannes_leitner" target="_blank" class="twitter img">
          </a>
        </div>
        <div class="col col-6 col-md-1 col__link">
          <a href="https://github.com/barnholdy" target="_blank" class="github img">
          </a>
        </div>
        <div class="col col-6 col-md-1 col__link">
          <a href="https://www.researchgate.net/profile/Hannes_Leitner" target="_blank" class="researchgate img">
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
  name: 'home',
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

<style lang="sass" scoped>

$bg-color-first: #fbfcfe
$bg-color-second: #ffffff
$border-color: #ddd
$font-color: #3c4653

.screen--full
  height: 100%
  color: $font-color

  #container--first
    background-color: $bg-color-first
    border-bottom: solid 1px $border-color

    #fullscreen__image
      img
        position: absolute
        bottom: 0rem
        width: 150%
        max-width: 50rem

    #fullscreen__text

      #trigger
        position: absolute
        bottom: 50vh

      #timeline
        position: absolute
        bottom: 12.5rem

      #title
        position: absolute
        bottom: 8.125rem
        margin-bottom: 1.25rem
        font-size: 2.07rem
        font-weight: 300

      #teaser
        position: absolute
        bottom: 1.25rem
        height: 6rem
        font-size: 3.3rem
        font-weight: 500

      #image
        position: absolute
        left: 50%
        bottom: 15rem
        margin-left: -25%

        .img__crop--round
          width: 12.5rem
          height: 12.5rem
          position: relative
          overflow: hidden
          border-radius: 50%

          img
            display: inline
            margin: 0 -0.5rem

  #container--second
    background-color: $bg-color-second
    padding: 1rem
    $radius: 3rem

    .col
      margin-top: 1rem
      margin-bottom: 1rem
      height: $radius
      line-height: $radius

    .col__heading
      h3
        font-size: 1.9rem
        font-weight: 500
        line-height: 1.8rem
        vertical-align: middle
        display: inline-block

    .col__link
      .img
          display: block
          height: $radius
          width: $radius
          background-size: $radius
          background-repeat: no-repeat

      .mail
          background-image: url('../assets/mail.png')

      .mail:hover
          background-image: url('../assets/mail_hover.png')

      .xing
          background-image: url('../assets/xing.png')

      .xing:hover
          background-image: url('../assets/xing_hover.png')

      .twitter
          background-image: url('../assets/twitter.png')

      .twitter:hover
          background-image: url('../assets/twitter_hover.png')

      .github
          background-image: url('../assets/github.png')

      .github:hover
          background-image: url('../assets/github_hover.png')

      .researchgate
          background-image: url('../assets/researchgate.png')

      .researchgate:hover
          background-image: url('../assets/researchgate_hover.png')
</style>
