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
					<h3>登录</h3>
				</div>
				
			</header>
		</div>
    <!--内容区域开始-->
		<div id="wrapper">
			<div id="scroller">
				<!--主要内容开始-->
				<section class="main">
					<div class="history-list">
						<div class="history-time">
							今天
						</div>
						<div class="history-item">
							<i class="his-icon"></i>
							<div class="his-content">
								 <router-link
                    to="/column"
                    v-for="item of msg"
                    :key='item._id' 
                 >
									<div class="his-wrapper clearfix">
										<div class="his-tit">
											<h3>
                          {{item.title}}
                      </h3>
											<span class="sale-price">
                        <i>¥</i>
                        <strong>
                            {{item.price}}
                        </strong>
                        <em>起</em>
                      </span>
									  	</div>
                      <div class="his-img">
                          <img :src="baseUrl + item.img" alt=""/>                          
                      </div>
									</div>
								 </router-link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return{
        msg:[ ]
      }
    },
    // beforeRouteEnter(to, from, next) {
    // //异步条件
    // axios({
    // url: "/api/user"
    // }).then(
    // res => res.data.err === 0 ? next(_this=>_this.user=res.data.data) : next("/login")
    // );  
    // },
    mounted(){
  
    axios({
      url:'/api/column',
    }).then(
      res => this.msg = res.data.data
    )
  }
}
</script>

<style  scoped>
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
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -1.38666667rem -0.45333333rem;
}
#header .head-top .title {
  flex: 2;
  justify-content: center;
  font-size: 0.42666667rem;
  color: #fff;
  text-align: center;
}
#header .head-top .title h3 {
  font-weight: 500;
}
#header .head-top .register {
  font-size: 0.37333333rem;
  color: #fff;
  text-align: center;
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
}
#wrapper #scroller {
  z-index: 1;
  padding: 0;
  position: absolute;
}
#wrapper .main {
  width: 10rem;
  padding: 0.2rem 0.32rem 0.32rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#wrapper .main .history-list .history-time {
  font-size: 0.37333333rem;
  color: #666;
  margin-bottom: 0.13333333rem;
}
#wrapper .main .history-list .history-item:last-child .his-content {
  border-left: none;
}
#wrapper .main .history-list .history-item .his-icon {
  position: relative;
  z-index: 2;
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #1ab2db;
  border-radius: 100%;
  text-align: center;
}
#wrapper .main .history-list .history-item .his-icon:before {
  content: '';
  display: inline-block;
  width: 0.32rem;
  height: 0.36rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -9.2rem -3.52rem;
  margin-top: 0.13333333rem;
}
#wrapper .main .history-list .history-item .his-content {
  position: relative;
  top: 0;
  left: 0.30666667rem;
  border-left: 1px solid #ccc;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper {
  position: relative;
  top: -0.66666667rem;
  width: 8.33333333rem;
  background-color: #f4f4f4;
  margin-left: 0.66666667rem;
  padding: 0.34666667rem 0.21333333rem;
  border-radius: 0.13333333rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper:before {
  position: absolute;
  left: -0.4rem;
  top: 0.26666667rem;
  content: '';
  font-size: 0;
  line-height: 0;
  border: 0.16rem solid transparent;
  border-right: 0.32rem solid #f4f4f4;
  width: 0;
  height: 0;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-tit {
  float: left;
  width: 5.73333333rem;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-tit h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.4rem;
  color: #666;
  margin-bottom: 0.13333333rem;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-tit .sale-price {
  color: #f90;
  font-size: 0.4rem;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-tit .sale-price em {
  font-size: 0.26666667rem;
  color: #999;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-img {
  float: right;
  width: 1.77333333rem;
  height: 1.46666667rem;
}
#wrapper .main .history-list .history-item .his-content .his-wrapper .his-img img {
  display: block;
  width: 100%;
  border-radius: 0.10666667rem;
}
</style>