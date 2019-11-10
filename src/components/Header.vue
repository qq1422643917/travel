<template>
  <!--头部搜索开始-->
	<div id="header">
		<span class="go-back">
			<a href="javascript:;" onclick="window.history.go(-1)">
				<i class="goback-icon"></i>
			</a>
		</span>
		
		<div class="search-main">
			<div class="search-wrapper">
				<div class="start">
					<span>北京</span>
				</div>
				<div class="search-box">
          <input type="text" placeholder=" 目的地/关键字 ">
					<!-- 目的地/关键字 -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
#header {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 1.17333333rem;
  position: fixed;
  line-height: 1.17333333rem;
  display: table;
  padding-right: 0.61333333rem;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#header .go-back {
  display: table-cell;
  width: 1.09333333rem;
  height: 1.17333333rem;
  text-align: center;
}
#header .go-back .goback-icon {
  width: 1.09333333rem;
  height: 1.17333333rem;
  line-height: 1.17333333rem;
}
#header .go-back .goback-icon:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0.24rem;
  height: 0.44rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -1.38666667rem -0.44rem;
}
#header .search-main {
  display: table-cell;
  vertical-align: middle;
  color: #fff;
}
#header .search-main .search-wrapper {
  display: table;
  border-radius: 0.5rem;
  width: 100%;
  height: 0.64rem;
  font-size: 0.37333333rem;
  line-height: normal;
  border: 1px solid #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#header .search-main .search-wrapper .start {
  display: table-cell;
  width: 1.94666667rem;
  padding: 0.13333333rem;
  text-align: center;
  border-right: 1px solid #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
#header .search-main .search-wrapper .start span {
  margin-left: 0.18666667rem;
}
#header .search-main .search-wrapper .start span:before {
  content: "";
  display: inline-block;
  vertical-align: -0.06666667rem;
  width: 0.33333333rem;
  height: 0.44rem;
  position: absolute;
  left: 0.2rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -8.30666667rem -3.49333333rem;
}
#header .search-main .search-wrapper .search-box {
  display: table-cell;
  padding-left: 0.89333333rem;
  position: relative;
  white-space: nowrap;
}
#header .search-main .search-wrapper .search-box:before {
  content: "";
  display: inline-block;
  vertical-align: -0.06666667rem;
  width: 0.44rem;
  height: 0.42666667rem;
  position: absolute;
  left: 0.2rem;
  top: 0.16rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -5.17333333rem -2.44rem;
}
#header .search-main .search-wrapper .search-box input{
  background:rgba(0, 0, 0, 0);
  color:#fff
}
</style>