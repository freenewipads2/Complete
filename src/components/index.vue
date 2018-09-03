<template>
<div class="index-wrapper">
asdsad {{test("hej")}}
</div>
</template>
<script>
export default {
  name: 'index',
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
