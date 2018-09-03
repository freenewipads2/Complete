<template>
<div class="game-wrapper">
GAME!
</div>
</template>
<script>
export default {
  name: 'game',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
methods: {
  test(val){
    return "dumma dig! " + val
  }
}
}
</script>
