<template>
  <div>
    <div>
      <maoyan-header :title="title"></maoyan-header>
      <div class="tab">
        <router-link to="/" class="tab-item"><div :class="this.onSelet?'active':null" @click="changeDataOne">影片</div></router-link>
        <router-link to="/home" class="tab-item"><div :class="!this.onSelet?'active':null" @click="changeDataTwo">影院</div></router-link>
        <div class="ddd"></div>
      </div>
    </div>
      <router-link to="/user/login" >
        <div id="icon-mine" >
          <span class="nav-btn">
            <img class="text-icon" src="https://ms0.meituan.com/touch/img/account/login/icon_login_user@2x.png" alt="">
          我的
          </span>
        </div>
      </router-link> 
      <router-view/>
  </div>
</template>
<script>
import $ from '$'
import MaoyanHeader from './MaoyanHeader'
export default {
  data () {
    return {
      title: '猫眼电影',
      onSelet: true
    }
  },
  methods: {
    changeDataOne () {
      this.onSelet = true
    },
    changeDataTwo () {
      this.onSelet = false
    }
  },
  components: {
    MaoyanHeader
  }
}
$(function () {
  $('.tab-item').eq(1).click(function () {
    $('.ddd').animate({left: '50%'}, 300)
  })
  $('.tab-item').eq(0).click(function () {
    $('.ddd').animate({left: '2%'}, 300)
  })
})
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .tab
      display flex
      width 100%
      height 36px
      line-height 36px
      font-size 14px
      border-bottom 4px solid rgba(7,17,27,0.1)
    .tab-item
      flex 1
      text-align center
      text-decoration none
      .active
        color #df2d2d
    .ddd
      position absolute
      top 84px
      left 2%
      width 48%
      height 4px
      bottom -4px
      border-bottom 4px solid #e54847
    & > a
      display block
      color rgb(77, 85, 93)
    #icon-mine
      position fixed
      bottom 40px
      right 5px
      border-radius 50%
      width 40px
      height 40px
      text-align center
      border 1px solid #ececec
      background rgba(255,255,255,.95)
      box-shadow 0 0 6px 0 rgba(0,0,0,.25)
      z-index 100
      margin 0 12px 5px
      padding 7px
      font-weight 300
    .nav-btn
      color #e54847
      display inline-block
      font-size 8px
      line-height 1
      .text-icon
        width 26px
        height 25px
        font-size 20px
        
</style>

