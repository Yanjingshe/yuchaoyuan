<template>
    <div>
        <header class="navbar navbar-login">
            <a class="react" href=""><i class="text-icon"></i></a>
            <h1 class="nav-header">猫眼电影</h1>
        </header>
        <div id="login">
             <div class="tab-login">
                <a ref="left" class="tab-login-item" :class="this.onData?'active':null" @click="changeDataOne">美团账号登录</a>
                <a ref="right" class="tab-login-item" :class="!this.onData?'active':null" @click="changeDataTwo">手机验证登陆</a>
                <div class="slide" :class="this.onData?'active-left':'active-right'"></div>
            </div>
           <div v-if="onData">
                <form class="username" action="">
                    <input class="input-u uu " type="text" placeholder="账户名/手机号/Email">
                </form>
                <form class="password" action="">
                    <input class="input-p" type="password" placeholder="请输入您的密码">                
                </form>
           </div>
           <div v-else>
                <form class="username userform" action="">
                    <input class="input-u phoneNum" type="text" placeholder="请输入手机号">
                    <button class="input-btn">获取验证码</button>
                </form>
                <form class="password userpass" action="">
                    <input class="input-p pp" type="password" placeholder="请输入短信验证码">                
                </form>
           </div>
        </div>
        <div class="btn-wrapper">
            <button type="submit" class="btn btn-larger btn-block disabled mj_login login-btn">登录</button>
        </div>
        <div class="subline">
            <a class="regitser tab-subline-item" href="#">立即注册</a>
            <a class="lookfor tab-subline-item" href="#">找回密码</a>
        </div>
        <footer>
            <div class="copyright">
                <span class="copyright">© 猫眼电影 客服电话：
                    <a href="tel:4006705335">400-670-5335</a>
                </span>
            </div>
        </footer>
    </div>
</template>
<script>
// import $ from '$'

export default {
  data () {
    return {
      onData: true
    }
  },
  methods: {
    changeDataOne () {
      this.onData = true
    },
    changeDataTwo () {
      this.onData = false
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
    $redColor = #e54847
    $DfColor = #df2d2d
    $FontSize = 14px
body
    background-color #f8f8f8
    .navbar
        display flex
        flex 1        
        height: 50px
        color: #fff
        background: $redColor
        border-bottom: 1px solid $redColor
    #login
        background-color #fff
    .navbar-login
        margin 0    
        font-size 18px
        font-weight lighter
        text-align center
        line-height 50px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
    .nav-header
      flex 4
      width 60%
      line-height 50px  
    .react
      display block
      height 23px
      width 23px
      padding 15px
      line-height 20px      
      text-decoration none      
    .text-icon
        width 23px
        height 23px
        display inline-block        
        vertical-align middle
        font-size 40px
        color #fff
        position relative        
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
        &:after
            content ''
            display block
            position absolute
            top 9px
            left 2px
            height 0
            width 23px
            border-top 2px solid #fff
.tab-login
      display flex
      width 100%
      height 36px
      line-height @height
      font-size $FontSize
      border-bottom 4px solid rgba(7,17,27,0.1)
    .tab-login-item
      flex 1
      text-align center
      text-decoration none
    .active
        color $DfColor
    & > a
      display block
      color rgb(77, 85, 93)
    .slide
        position absolute
        top 84px
        width 48%
        height 4px
        bottom -4px
        border-bottom 4px solid $redColor
    .active-right
        left 50%
    .active-left
        left 2%
.username,
.password
    text-align left
    padding 14px 10px 
    margin-left 2%
    padding-left 0
    border-bottom 1px solid #d6d6d6
    overflow hidden
    font-weight 400
    .phoneNum
        width 68%
    .uu
        width 100%
    .input-p
        width 100%
    .input-u,
    .input-p
        display block
        border 0
        height 30px
        margin -8px 0
        text-indent 5px
        line-height 1
        font-size 15px
        border-radius 3px
        padding 0
        display inline-block
    .input-btn
        right 0
        height 30px
        line-height @height
        font-size $FontSize
        text-align center
        padding 0 16px
        border 0
        color #999
        background #dcdcdc
        cursor pointer
        vertical-align: middle 
        border-radius 3px
.userform
    text-align left
    padding 7px 10px  
.userpass
    padding 14px 10px    
    .pp
        background #eee
.btn-wrapper
    margin 14px 10px
    .btn-larger
        width 100%
        height 47px
        line-height @height
        font-size 20px
        text-align center
        padding 0 16px
        border 0
        color #ffffff
        background-color #df2d2d
        box-sizing border-box
        cursor pointer
        vertical-align: middle
.subline
    background #f8f8f8
    display flex
    width 100%
    height 36px
    line-height 36px
    font-size $FontSize
    color $DfColor
    .tab-subline-item
        @extend .tab-login-item  
        color $DfColor
    .regitser
      text-align left
      margin-left 10px
    .lookfor
        text-align right 
        margin-right 10px
.copyright
    font-size $FontSize
    text-align center
    line-height 1
    & > a
        color $DfColor
        text-decoration none
        display inline-block
</style>
