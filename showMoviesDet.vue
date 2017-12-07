<template>
<div class="introduce-box">
    <header class="navbar navbar-login">
            <a class="react" href=""><i class="text-icon "></i></a>
            <h1 class="nav-header">{{MovieDetailModel.nm}}</h1>
            <div class="nav-wrap-right"></div>
        </header>
    <div class="movie">
      <img class="movie-background" :src="MovieDetailModel.img" alt=""></img>
      <div class="movie-filter"></div>
        <div class="movie-contain clearfix">
          <div class="movie-img">
            <img class="imgs" :src="MovieDetailModel.img" alt="">
              </div>
          <div class="filter-right">
            <div class="movie-name">{{MovieDetailModel.nm}}</div>
            <!-- <div class="movie-ename">Coco***api没提供</div> -->
            <div v-if="MovieDetailModel.wish && !MovieDetailModel.sc && !MovieDetailModel.showSnum" class="released-score">{{MovieDetailModel.wish}}人想看</div>            
            <div v-else-if="MovieDetailModel.wish && MovieDetailModel.sc && MovieDetailModel.showSnum" class="released-score">{{MovieDetailModel.sc}}分<span class="add-people">({{MovieDetailModel.snum}}人评分)</span></div>
            <div v-else class="noscore">暂无评分</div>            
            <div class="movie-category">{{MovieDetailModel.cat}}</div>
            <div class="movie-content-row">{{MovieDetailModel.src}}/{{MovieDetailModel.dur}}分钟</div>
            <div class="movie-content-row">{{MovieDetailModel.rt}}</div>
          </div>
        </div>
    </div>
    
  <div class="pay-introduce">
    <a class="nowpay">立即购票</a>
    <div ref="show">
      <div class="introduce hidden" ref="introduce">{{dra.replace(/<.*?>/ig,"")}}</div>
      <div class="hidden-btn-down" ref="icon"></div>
    </div>
  </div>
  <div class="celebrities">
    <div class="movie-people">
      <ul class="movie-people-ul class-box">
        <li v-for="(item, index) in MovieDetailModel.photos" :key="index">
          <img src="//p1.meituan.net/movie/081de56c88edd707512c45f00df7f26852426.jpg@130w_180h.webp" alt="">
          <h4>{{star[index]}}</h4>
          <!-- <p>职位/主演角色**api没提供</p> -->
        </li>
      </ul>
    </div>
    <div class="all-people">全体演职人员</div>
  </div>
  <div class="movie-comment">
    <div class="clearfix">短评</div>
    <div class="list-view-item" v-for="item in CommentResponseModel.hcmts" :key="item.id">
      <p class="talk-time">{{item.time}}</p>
      <div class="talk-content">{{item.content}}</div>
      <div class="talk-footer">
        <div class="userimg">
          <img :src="item.avatarurl" alt="">
        </div>
        <span class="username">{{item.nick}}</span>
        <span class="reponst">回复&nbsp;{{item.reply}}</span>
        <span class="good">赞&nbsp;{{item.approve}}</span>
      </div>
    </div>
  </div>
  <div class="footer">
    <p class="one">友情链接:&nbsp;<a href="#">猫眼专业版</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">美团网</a></p>
    <p class="two">@&nbsp;猫眼电影&nbsp;客服电话:&nbsp;<a href="#">1010-5335</a></p>
    <p class="three">
      <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=zmshIwhCuLeaTAslNJ7CXereLeFDWaabnLWkp5JKGXLkckSkJcO7!-139023563">京ICP备 16022489号-1</a>
      <a href="http://www.beian.gov.cn/portal/index">京公安网备11010502030881号</a>
    </p>
    <p class="four">北京猫眼文化传媒有限公司</p>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      MovieDetailModel: [],
      CommentResponseModel: [],
      dra: '',
      star: '',
      turnoff: false
    }
  },
  created () {
    let path = this.$route.path
    let num = path.match(/\d/g).join('')
    let api = '/api/movie/' + num + '.json'
    var _this = this
    this.$http.get(api, {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      _this.MovieDetailModel = res.data.MovieDetailModel
      _this.CommentResponseModel = res.data.CommentResponseModel
      _this.dra = _this.MovieDetailModel.dra
      _this.star = _this.MovieDetailModel.star.split(' ')
      console.log(_this.MovieDetailModel)
    }, function (error) {
      console.log(error)
    })
  },
  mounted () {
    let show = this.$refs.show
    let introduce = this.$refs.introduce
    let icon = this.$refs.icon
    show.onclick = function () {
      this.turnoff = !this.turnoff
      this.turnoff ? introduce.setAttribute('class', 'introduce') : introduce.setAttribute('class', 'introduce hidden')
      this.turnoff ? icon.setAttribute('class', 'hidden-btn-up') : icon.setAttribute('class', 'hidden-btn-down')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background #f4f4f4
  .navbar
    display flex
    flex 1
    height: 50px
    color: #fff
    background: #e54847
    border-bottom: 1px solid #e54847
    z-index: 2
    position relative
    .react
      display block
      height 23px
      width 23px
      padding 15px
      line-height 20px
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
        border-left @border-bottom
        transform scaleY(.8) rotateZ(45deg)
    .nav-wrap-right
      flex 1
    .nav-header
      font-size 18px
      flex 4
      width 60%
      line-height 50px 
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
.movie
  color #fff
  line-height 1
  overflow hidden
  .movie-background
    background #aaa
    top -70px
    left 0
    right 0
    bottom 0
    width 100%
    height 300px
    z-index 0
    position absolute
    filter blur(.6rem)
    background-size cover
    background-image gray
    background-repeat no-repeat
    background-position-y 40%
  .movie-filter
    top -70px
    left 0
    right 0
    bottom 0
    width 100%
    height 300px
    position absolute
    background-color #40454d
    opacity .55
  .movie-contain
    position absolute
    width 345px
    height 150px
    z-index 1
    margin 13px 15px
    .movie-img
      float left
      width 107px
      height 150px
      filter blur(0)
      border solid 1px #f0f2f3
      background #c1c1c1
      .imgs
        width 107px
        height 150px
        vertical-align top
    .filter-right
      position absolute
      width 220px
      left 125px
      text-align left
      .movie-name
        font-size 17px
        line-height 1.2
        margin-top 6px
        margin-bottom 5px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .movie-category
        font-size 12px
        margin-bottom 6px
        margin-top 8px
        opacity .7
      .movie-content-row
        font-size 12px
        opacity .7
        margin-bottom 6px
      .released-score
        font-size 16px
        color #ffc600
        margin 10px 0
        .add-people
          color #fff
          font-size 9px
          opacity: .7
          margin-top 6px
          margin-bottom 8px
      .noscore
        font-size 14px
        line-height 1
        color rgba(255,255,255,.7)
.pay-introduce
  position relative
  border-top 1px solid #e5e5e5
  border-bottom 1px solid #e5e5e5
  padding 15px 15px 0 15px
  top 180px
  margin-bottom 10px
  background #fff
  .nowpay
    display block
    font-size 16px
    padding 10px
    cursor pointer
    text-align center
    border-radius 4px
    line-height 1
    background #e54847
    color #fff
  .introduce
    font-size 15px
    margin-top 8px
    line-height 22px
    text-align left
    text-overflow ellipsis
    overflow hidden
    color #555
  .hidden
    max-height 64px
  .hidden-btn-down
    color #aaa
    text-align center
    height 22px
    position relative
    &:after
      content ''
      display block
      position absolute
      width 10px
      height 10px
      transform rotate(-45deg)
      border-bottom 2px solid gray
      border-left 2px solid gray
      left 50%
      top 0
  .hidden-btn-up
    color #aaa
    text-align center
    height 22px
    position relative
    &:after
      content ''
      display block
      position absolute
      width 10px
      height 10px
      transform rotate(-45deg)
      border-top 2px solid gray
      border-right 2px solid gray
      left 50%
      top 10px
.celebrities
  color #fff
  margin 10px 0
  position relative
  top 180px
  .movie-people::-webkit-scrollbar
    display none
  .movie-people
    border-top 1px solid #e5e5e5
    border-bottom 1px solid #e5e5e5
    padding 15px 0 10px 15px
    background #fff
    overflow-x scroll
    .movie-people-ul
      width 1000%
      list-style none
      & > li
        float left
        &> img
          display inline-block
          width 65px
          height 90px
          margin 2px
          background gray
          word-break normal
        &> h4
          width 65px
          font-size 11px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          color black
        &> p
          width 65px
          font-size 11px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          text-align center
          color #999
  .all-people
    border-top 1px solid #e5e5e5
    padding 10px
    background #fff
    color #666
    margin 0
    font-weight lighter
.movie-comment
  position relative
  background #fff
  top 180px
  border-top 1px solid #e5e5e5
  border-bottom 1px solid #e5e5e5
  .clearfix
    height 40px
    line-height 40px
    text-align left
    color #666
    font-weight 700
    padding 6px 15px
    border-bottom 1px solid #e5e5e5
  .list-view-item
    text-align left
    margin-left 15px
    padding 8px 13px 20px 3px
    border-bottom solid #e5e5e5 1px
    .talk-time
      color #999
      font-size 15px
      margin-right 50px
    .talk-content
      margin 5px 0
      color #333
      font-size 14px
      line-height 1.5
      text-align justify
      word-wrap break-word
      padding 0 !important
    .talk-footer
      display block
      text-align left
      padding 10px 12px 10px 0px
      .userimg
        float left
        width 29px
        border-radius 50%
        display inline-block
        &> img
          width 35px
          height 35px
          border-radius 50%
          background #6c6c6c
      .username
        display inline-block
        padding-top 6px
        padding-left 15px
        max-width 150px
        color #999
        font-size 13px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
      .good
        color #999
        margin 0 5px
        line-height 15px
        display inline-block
        float right
        padding-top 5px
      .reponst
        color #999
        margin 0 5px
        line-height 15px
        display inline-block
        float right
        padding-top 5px
.footer
  position relative
  top 180px
  a 
    text-decoration none
    display inline-block
  .one
    margin 30px 0 14px
    text-align center
    &> a
      color #e54847
  .two
    text-align center
    margin-bottom 14px
    &> a
      color #e54847
  .three
    text-align center
    margin-bottom 14px
    &> a
      font-size: 10px
      color #9e9e9e
  .four
    text-align center
    font-size: 10px
    color #9e9e9e
    margin-bottom 14px
</style>

