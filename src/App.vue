<template>
  <div id="app" class="fade-in">
    <img v-if="ok" src="./assets/logo.png" width="80%">
    <router-view/>
  </div>

</template>

<script>

export default {
  name: 'App',
    data () {
    return {
      ok: true
    }
    }
}
</script>

<style>
@import './styles/global.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
