<template>
  <div class="index-wrapper flex-center">
  <div class="start-text">
  Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
  </div>
  <div class="start-button" v-on:click="play()">
  Play game
  </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'

  export default {
    name: 'index',
    data() {
      return {

        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      test(val) {
        return "dumma dig! " + val
      },
      play(){
        window.location = "/#/play";
      }
    },

    mounted: function () {
  this.$nextTick(function () {

var sound = new Howl({
  src: ['http://niviso.com/test.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});


  })
}
  }
</script>
