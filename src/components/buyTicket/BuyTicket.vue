<template>
  <div id="tab_cinema" class="tab_hide">
    <header class="navbar navbar-login">
          <a class="react" href=""><i class="text-icon "></i></a>
          <h1 class="nav-header">正义联盟</h1>
          <div class="nav-wrap-right"></div>
    </header>
    <ul class = "cinemalist">
        <li class="cinema-container">
          <a href="">
            <div class="cinema-name text-ellipsis">飞扬影城(天河城店)</div>
            <div class="price theme-color">
              <span class="num">39</span>
              <span>元起</span>
            </div>
            <div>
              <p class="address">天河区天河路208号天河城广场4楼</p>
            </div>
              <div class="dis">500m</div>
            <div class="tag-list">
              <div>座</div>
            </div>
          </a>          
        </li>
        <li class="cinema-container">
          <a href="">
            <div class="cinema-name text-ellipsis">飞扬影城(天河城店)</div>
            <div class="price theme-color">
              <span class="num">39</span>
              <span>元起</span>
            </div>
            <div>
              <p class="address">天河区天河路208号天河城广场4楼</p>
            </div>
              <div class="dis">500m</div>
            <div class="tag-list">
              <div>座</div>
            </div>
          </a>          
        </li>
        <li class="cinema-container">
          <a href="">
            <div class="cinema-name text-ellipsis">飞扬影城(天河城店)</div>
            <div class="price theme-color">
              <span class="num">39</span>
              <span>元起</span>
            </div>
            <div>
              <p class="address">天河区天河路208号天河城广场4楼</p>
            </div>
              <div class="dis">500m</div>
            <div class="tag-list">
              <div>座</div>
            </div>
          </a>          
        </li>
        <li class="cinema-container">
          <a href="">
            <div class="cinema-name text-ellipsis">飞扬影城(天河城店)</div>
            <div class="price theme-color">
              <span class="num">39</span>
              <span>元起</span>
            </div>
            <div>
              <p class="address">天河区天河路208号天河城广场4楼</p>
            </div>
              <div class="dis">500m</div>
            <div class="tag-list">
              <div>座</div>
            </div>
          </a>          
        </li>
        
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    }
  },
  data () {
    return {
      cinemas: []
    }
  },
  mounted () {
    console.log(this.movie)
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
    flex 1
    .react
      text-decoration none
      display block
      height 23px
      width 23px
      line-height 20px
      padding 15px
    .text-icon
      width 23px
      height 23px
      display inline-block        
      vertical-align middle
      position relative
      font-size 40px
      color #fff
      &:before
        content ''
        display block
        position absolute
        left 4px
        top 0
        width 18px
        height 18px
        border-bottom 2px solid #fff
        border-left 2px solid #fff
        transform scaleY(.8) rotateZ(45deg)
  .nav-wrap-right
    flex 1
  .nav-header
    font-size 18px
    flex 4
    width 60%
    line-height 50px 
  .cinema-container
    font-size 14px
    padding 13px 0
    margin-left 16px
    color #666
    position relative
    line-height 1
    border-bottom 1px solid #E6E6E6
    text-align left 
    a
      text-decoration none
    .cinema-name
      display inline-block     
      max-width 285px             
      font-size 16px
      color #000
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
    .price
      display inline-block
      margin-left 10px
      font-size 11px
      line-height 15px
      color #e54847
      .num 
        font-size 17px
    .address
      width 300px
      margin-top 8px
      padding-top 5px
      margin-right 5px
      display inline-block
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
    .dis
      position absolute
      top 47px
      right 12px
      color #999
  .tag-list
    margin-top 10px
    display inline-block
    padding 3px
    border 1px solid #589DAF
    border-radius 4px
    margin-right 2px
    color #589DAF
</style>