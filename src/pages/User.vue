<template>
    <div>
        <div id="header">
        <header class="head-top">
            <div class="go-back">
                <a href="javascript:;" onclick="window.history.go(-1)">
                    <i class="goback-icon"></i>
                </a>
            </div>
            <div class="title">
                <h3>个人</h3>   
            </div>
             <a href="javascript:;" @click="logout">注销</a> 
            
        </header>
        
    </div>

    <!--内容区域开始-->
    <div id="wrapper">
        <div id="scroller">
            <!-- 头像区域 -->
                <div class="personal-pho"> 
    
                    <div class="personal-img" v-if="!user">
                             
                        <div class="photo-my"></div>
                        <div class="camera">
                            <i class="camera-icon"></i>
                        </div>
                    </div>
                    <img :src="baseUrl + user.icon" alt=""  class="personal-img">  
                </div>
                <!-- 红包优惠券、积分 -->
                <div class="personal-integral"> 
                    
                    <div class="integral-tit">
                        <!-- <h2 v-if="">请登录</h2> -->
                        <h2>你好,游客</h2>
                        <p>世界很大，抬脚出去荡~</p>
                    </div>
                    <div class="intergral-con">
                        <div class="con-ticket">
                            <p><b>¥</b><strong>50</strong></p>
                            <p>红包优惠券</p>
                        </div>
                        <div class="con-credits">
                            <p>1000<span>分</span></p>
                            <p>积分</p>
                        </div>
                    </div>
                </div>
        
                <!-- 全部订单列表 -->
                <div class="personal-orderlist">
                    <div class="personal-orderlist-t clearfix">
                        <ul>
                            <li class="orderall">
                                <span></span>
                                <p>全部订单</p>
                            </li>
                            <li>
                                <span></span>
                                <p>代付款</p>
                            </li>
                            <li>
                                <span></span>
                                <p>未出行</p>
                            </li>
                            <li>
                                <span></span>
                                <p>待点评</p>
                            </li>
                        </ul>
                    </div>
                    <div class="personal-orderlist-b">
                        <ul>
                            <li>
                                <b></b>
                                <p>我的相册</p>
                                <span></span>
                            </li>
                            <li>
                                <b></b>
                                <p>我的行程</p>
                                <span></span>
                            </li>
                            <li>
                                <b></b>
                                <p>我的游记</p>
                                <span></span>
                            </li>
                            <li>
                                <b></b>
                                <p>我的财富</p>
                                <span></span>
                            </li>
                        </ul>
                    </div>
        
                </div>
        </div>
    </div>
    </div>
    
        
</template>

<script>
export default {
data(){
    return {
      user:{}
    }
  },
  beforeRouteEnter(to, from, next) {
    //异步条件
    axios({
      url: "/api/user"
    }).then(
      res => res.data.err === 0 ? next(_this=>_this.user=res.data.data) : next("/login")
    );  
  },
  methods:{  
    logout(){
      axios({
        url: "/api/logout",
        method:'delete'
      }).then(
        res => res.data.err === 0 ? this.$router.push('/home') : null
      )
      
    }
  }
}
</script>

<style scoped>
    #header {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 1.17333333rem;
  position: absolute;
  line-height: 1.17333333rem;
  background-color: #1448ae;
}
#header .head-top {
  display: flex;
}
#header .head-top div {
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
#header .head-top .go-back {
  display: flex;
  flex: 1;
  height: 1.17333333rem;
  padding-left: 0.50666667rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#header .head-top .go-back .goback-icon {
  width: 1.09333333rem;
  height: 1.17333333rem;
  line-height: 1.17333333rem;
}
#header .head-top .go-back .goback-icon:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0.24rem;
  height: 0.44rem;
  background: url("../assets/images/icon/sprites.png") no-repeat;
  background-size: 10rem auto;
  background-position: -1.38666667rem -0.44rem;
}
#header .head-top .title {
  display: flex;
  flex: 2;
  justify-content: center;
  font-size: 0.42666667rem;
  color: #fff;
  text-align: center;
}
#header  a {
  color: #fff;
  margin-right: 0.2rem;
}
#wrapper {
  left: 0;
  right: 0;
  z-index: 1;
  width: 10rem;
  top: 1.17333333rem;
  overflow: auto;
  bottom: 1.30666667rem;
  position: absolute;
  margin: 0 auto;
  /* 头像区域 */
  /* 红包礼券、积分 */
  /* 全部订单列表 */
}
#wrapper #scroller {
  z-index: 1;
  padding: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
}
#wrapper .personal-pho {
  width: 100%;
  height: 1.62666667rem;
  background-color: #1448ae;
  position: relative;
}
#wrapper .personal-pho .personal-img {
  width: 2.21333333rem;
  height: 2.21333333rem;
  position: absolute;
  border-radius: 50%;
  top: 0.42666667rem;
  left: 50%;
  margin-left: -1.2rem;
  border: 0.09333333rem solid #ffffff;
  background-color: #ccc;
}
#wrapper .personal-pho .personal-img .photo-my {
  width: 1.34666667rem;
  height: 1.34666667rem;
  position: absolute;
  top: 0.42666667rem;
  right: 0.42666667rem;
  background: url("../assets/images/icon/sprites.png") no-repeat;
  background-size: 10rem auto;
  background-position: -6.81333333rem -10.62666667rem;
}
#wrapper .personal-pho .personal-img .camera {
  width: 0.97333333rem;
  height: 0.97333333rem;
  border-radius: 50%;
  background-color: #f2a410;
  position: absolute;
  top: 1.37333333rem;
  right: -0.14666667rem;
  z-index: 3;
}
#wrapper .personal-pho .personal-img .camera .camera-icon {
  width: 0.68rem;
  height: 0.52rem;
  position: absolute;
  top: 0.22666667rem;
  right: 0.14666667rem;
  background: url("../assets/images/icon/sprites.png") no-repeat;
  background-size: 10rem auto;
  background-position: -4.13333333rem -8.26666667rem;
}
#wrapper .personal-integral {
  width: 100%;
  height: 3.92rem;
  border-bottom: 0.02666667rem solid #cad7da;
  text-align: center;
  padding-top: 1.49333333rem;
}
#wrapper .personal-integral .integral-tit {
  width: 100%;
  height: 1.8rem;
}
#wrapper .personal-integral .integral-tit h2 {
  color: #888d94;
  font-size: 0.50666667rem;
  height: 0.64rem;
}
#wrapper .personal-integral .integral-tit p {
  color: #a9aaad;
  font-size: 0.37333333rem;
}
#wrapper .personal-integral .intergral-con {
  width: 100%;
}
#wrapper .personal-integral .intergral-con .con-ticket {
  float: left;
  width: 50%;
  border-right: 0.04rem dashed #cad7da;
  box-sizing: border-box;
  height: 1.78666667rem;
}
#wrapper .personal-integral .intergral-con .con-ticket p:nth-child(1) {
  color: #676c73;
  position: relative;
}
#wrapper .personal-integral .intergral-con .con-ticket p:nth-child(1) b {
  font-size: 0.48rem;
  font-weight: normal;
  position: absolute;
  top: 0.10666667rem;
  left: 1.73333333rem;
}
#wrapper .personal-integral .intergral-con .con-ticket p:nth-child(1) strong {
  font-size: 0.85333333rem;
  font-weight: normal;
}
#wrapper .personal-integral .intergral-con .con-ticket p:nth-child(2) {
  color: #979da4;
  font-size: 0.37333333rem;
}
#wrapper .personal-integral .intergral-con .con-credits {
  float: left;
  width: 50%;
}
#wrapper .personal-integral .intergral-con .con-credits p:nth-child(1) {
  color: #676c73;
  font-size: 0.85333333rem;
}
#wrapper .personal-integral .intergral-con .con-credits p:nth-child(1) span {
  font-size: 0.37333333rem;
}
#wrapper .personal-integral .intergral-con .con-credits p:nth-child(2) {
  color: #979da4;
  font-size: 0.37333333rem;
}
#wrapper .personal-orderlist {
  width: 100%;
  height: 9.6rem;
  background-color: #fff;
}
#wrapper .personal-orderlist .personal-orderlist-t li {
  float: left;
  width: 2.5rem;
  height: 2.82666667rem;
  text-align: center;
  color: #676c73;
  font-size: 0.37333333rem;
}
#wrapper .personal-orderlist .personal-orderlist-t li span {
  width: 0.88rem;
  height: 1.12rem;
  display: inline-block;
  margin-top: 0.56rem;
  background: url("../assets/images/icon/sprites.png") no-repeat;
  background-size: 10rem auto;
  background-position: -0.57333333rem -9.42666667rem;
}
#wrapper .personal-orderlist .personal-orderlist-t li:nth-child(2) span {
  background-position: -2.09333333rem -9.42666667rem;
}
#wrapper .personal-orderlist .personal-orderlist-t li:nth-child(3) span {
  width: 1.01333333rem;
  background-position: -3.56rem -9.42666667rem;
}
#wrapper .personal-orderlist .personal-orderlist-t li:nth-child(4) span {
  width: 0.96rem;
  background-position: -5.10666667rem -9.42666667rem;
}
#wrapper .personal-orderlist .personal-orderlist-b li {
  height: 1.69333333rem;
  width: 100%;
  padding: 0 0.96rem 0 0.82666667rem;
  line-height: 1.69333333rem;
  color: #676c73;
  font-size: 0.42666667rem;
  position: relative;
}
#wrapper .personal-orderlist .personal-orderlist-b li b {
  width: 0.84rem;
  height: 0.84rem;
  float: left;
  margin-top: 0.4rem;
  margin-right: 0.26666667rem;
  background: url("../assets/images/icon/sprites.png") no-repeat;
  background-size: 10rem auto;
  background-position: -0.57333333rem -11.13333333rem;
}
#wrapper .personal-orderlist .personal-orderlist-b li p {
  float: left;
}
#wrapper .personal-orderlist .personal-orderlist-b li span {
  float: left;
  width: 0.41333333rem;
  height: 0.70666667rem;
  background: url("../assets/images/icon/arrow_03.png") center no-repeat;
  z-index: 1;
  margin-left: 4.96rem;
  margin-top: 0.50666667rem;
  background-size: contain;
}
#wrapper .personal-orderlist .personal-orderlist-b li:nth-child(2) b {
  background-position: -2.09333333rem -11.13333333rem;
}
#wrapper .personal-orderlist .personal-orderlist-b li:nth-child(3) b {
  background-position: -3.61333333rem -11.13333333rem;
}
#wrapper .personal-orderlist .personal-orderlist-b li:nth-child(4) b {
  background-position: -5.13333333rem -11.13333333rem;
}
</style>