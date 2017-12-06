<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a class="change-city">广州</a>
    </div>
    <div class="nav-header">
      <h1>{{this.title}}</h1>
    </div>
    <div class="nav-wrap-right">
        <a>
          <span>
              <i></i>
            </span>
        </a>
    </div>
</header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .navbar
    display flex
    height: 50px
    color: #fff
    background: #e54847
    border-bottom: 1px solid #e54847
    .nav-wrap-left,
    .nav-wrap-right,
    .nav-header    
      flex 1
    .nav-header
      flex 4
      width 60%
      line-height 50px     
      h1
        height 100%
        font-weight 400
        font-size 18px
    .nav-wrap-left
      .change-city
        line-height 50px
        font-size 14px
        color #FFF
        font-size 15px
        line-height 50px
        border-radius 2px
        cursor pointer
        &:after
          content: ''
          display: inline-block
          width 0
          height 0
          margin-left 4px
          border-width 4px
          margin-bottom 5px
          border-color #fff transparent transparent
          border-style solid
          font-size 0
          vertical-align -6px
      
</style>
