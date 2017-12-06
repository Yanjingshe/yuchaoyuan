<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selet: true
    }
  },
  methods: {
    loginClick () {
      this.selet = false
      console.log(this.selet)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
body
  margin 0
  padding 0
  font-family "Helvetica Neue",Helvetica,Arial,sans-serif
  #app
    text-align center
</style>
