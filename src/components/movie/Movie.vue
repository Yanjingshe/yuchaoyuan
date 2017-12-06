<template>
 <div id = "tab_movie" ref="tabMovie">
    <ul class="movielist" >
      <li class="item" v-for="(item, index) in movies" :key="item.id">
        <router-link :to="'/movie='+item.id">
          <div class="movie-cover">
            <img class="lazy" :src="item.img">
          </div>
          <div class="movie-content ">
            <div class="flexRow flex-item flex-middle text-ellipsis">
              <span class="movie-name">{{item.nm}}</span>
              <span v-if="!item['3d'] && item.imax " class="movie-v2d v2d"></span>            
              <span v-else class="movie-v3d" :class="item['3d'] ? 'v3d' : null"></span>
              <span class="movie-version version" :class="item.imax ? 'imax' : null"></span>
              <div class="movie-rating" >
                <span v-if="item.sc && !item.preSale" class="score">{{item.sc}}</span>
                <span v-else-if="!item.sc && item.preSale" class="wish">{{item.wish}}</span>
                <span v-else class="noscore">暂无评分</span>              
              </div>
            </div>
            <p>{{item.cat}}</p>
            <p>主演:{{item.star}}</p>        
            <p class="movie-show">{{item.showInfo}}</p>
          </div>
        </router-link>
        <router-link to="/cinema/movie" 
                    v-if="item.preSale == 0" 
                    class="movie-btn background-color-red"
                    :movie="item.id"
                    >购票</router-link>
          <router-link to="/cinema/movie" v-else class="movie-btn background-color-blue">预售</router-link>      
        </li>
      </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      movies: [],
      data: [],
      busy: false,
      count: 1
    }
  },
  methods: {
    loadMore: function () {
      console.log(this.count)
      setTimeout(() => {
        this.busy = true
        for (let i = 0, j = 10; i < j; i++) {
          this.data.push({name: this.count++})
        }
        this.busy = false
      }, 1000)
    }
  },
  created: function () {
    // 请求电影数据详情
    var that = this
    this.$http.get('/api/movie/list.json?type=hot&offset=0&limit=1000', {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      that.movies = res.data.movies
      console.log(that.movies)
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .movielist
    padding 0 14px
    background-color #fff
    .item
      display inline-block
      width 100%
      padding 14px 0
      border-bottom 1px solid #E6E6E6
      position relative
      box-sizing border-box
      a
        color #666
        text-decoration none
        .movie-cover
          width 64px
          height 90px
          display block
          float left
          position relative
          background-size 35%
          img
            display block
            width 100%
            vertical-align middle
        .movie-content
          margin 4px 0 0 74px
          position relative
          p
            text-align left 
            margin-right 60px
            margin-top 6px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 13px
            vertical-align baseline
          .movie-show
            color #999
          .flex-item
            display flex
            flex 1
            overflow hidden
            align-items center
            .movie-name
              color #222
              display inline-block
              font-size 15px
              line-height 1.5!important
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .movie-v3d,
            .movie-v2d
              flex 0 1 auto
              margin-left 4px              
            .movie-version
              flex 1 0 auto
            .movie-v3d,
            .movie-v2d,
            .movie-version
              line-height 1.2
              text-align left
              font-size 8px
            .v3d::before
              content: '3D'
              border-top-left-radius 4px
              border-bottom-left-radius 4px
              background-color #8BB7CE
              color #fff
            .v2d::before
              content: '2D'
              border-top-left-radius 4px
              border-bottom-left-radius 4px
              background-color #8BB7CE
              color #fff
              padding: 1px 3px 2px;
            .imax::after
              content 'IMAX'
              border-left 0
              border-top-right-radius 4px
              border-bottom-right-radius 4px
              color: #8BB7CE              
            .v3d::before,           
            .imax::after
              border 1px solid #8BB7CE            
              padding 1px 3px 1px
              display inline-block
              vertical-align middle
            .movie-rating
              font-size 14px
              color #FFB400              
              .score,
              .wish,
                font-size 16px
                line-height 1
              .score:after
                content '分'
                font-size 10px
              .wish:after
                content '想看'
                font-size 10px
              .noscore
                font-size 14px
                line-height 1
                color #999
    .movie-btn
      position absolute
      right 0
      bottom 13px
      padding 8px 11px
      font-size 12px
      border-radius 3px
      display inline-block
      color #fff!important
    .background-color-red
      background #e54847
    .background-color-blue
      background #52B0EB
</style>
