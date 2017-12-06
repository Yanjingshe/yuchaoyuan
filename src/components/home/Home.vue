<template>
  <div id = "tab_cinema" class = "tab_hide">
    <ul class = "cinemalist">
        <li class="cinema-container" v-for="items in cinemas" :key="items.id">
              <router-link :to="'/show='+item.id" v-for="item in items" :key="item.id" class="child-view">
                  <div class="cinema-name text-ellipsis">{{item.nm}}</div>
                    <div class="price theme-color">
                      <span class="num">{{item.sellPrice}}</span>
                      <span>元起</span>
                  </div>
                    <div>
                      <p class="address">{{item.addr}}</p>
                    500m
                  </div>
                  <div class="tag-list">
                    <div>座</div>
                  </div>
              </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cinemas: []
    }
  },
  mounted: function () {
    // 请求电影院数据详情
    var that = this
    this.$http.get('/api/cinemas.json', {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      that.cinemas = res.data
      console.log(that.cinemas)
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  
    .cinema-container
      font-size 14px
      margin-left 16px
      color #666
      position relative
      line-height 1
      text-align left
      a
        text-decoration none
        display block
        margin-bottom 10px
        border-bottom 1px solid #E6E6E6
        padding 13px 0
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
        color #666
    .dis
      display inline-block
      flex 1
      top 47px
      right 12px
      color #999
      margin-top 8px
      padding-top 5px
      margin-right 5px
    .tag-list
      margin-top 10px
      display inline-block
      padding 3px
      border 1px solid #589DAF
      border-radius 4px
      margin-right 2px
      color #589DAF
</style>