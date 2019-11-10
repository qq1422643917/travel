<template>
    <!--特卖汇开始-->
		<article class="sale clearfix">
			<nav><span>出境游</span></nav>
			
			<div class="item" 
				v-for="item of sales"
				:key='item._id'
			>
				<router-link 
					:to="'/detail/'+item._id+'?dataName='+dataName">
					<div class="img-wrapper"><img :src="baseUrl + item.img" alt="" /></div>
          
					<div class="item-main">
						<h3>
							{{item.title}}
						</h3>
						<div class="item-des">
							<span class="person">{{item.num}}</span>
							<span class="sale-price">
								<i>¥</i>
								<strong>
									{{item.price}}
								</strong>
								<em>起</em>
							</span>
						</div>
					</div>
				</router-link>
				
					
				
			</div>
			
		</article>
		<!--特卖汇结束-->
</template>

<script>
export default {
	name:'Sales',
  props:['sales','dataName']
}
</script>

<style>
.sale {
  padding: 0 0.32rem 0.24rem;
  width: 10rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.sale nav {
  color: #4ca8f5;
  height: 0.42666667rem;
  line-height: 0.42666667rem;
  margin-bottom: 0.21333333rem;
}
.sale nav span {
  font-size: 0.42666667rem;
  float: left;
}
.sale nav:before {
  content: '';
  display: block;
  float: left;
  width: 0.64rem;
  height: 0.42666667rem;
  margin-right: 0.13333333rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -6.30666667rem -3.54666667rem;
}
.sale nav:after {
  content: '';
  display: block;
  float: left;
  width: 2.85333333rem;
  height: 0.42666667rem;
  background: url(../assets/images/img/travel-look0401_01.png) no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  margin-left: 0.13333333rem;
}
.sale .item {
  float: left;
  width: 4.56rem;
  height: auto;
  margin-bottom: 0.21333333rem;
  overflow: hidden;
  border: 1px solid #ccc;
}
.sale .item:nth-child(2n+1) {
  float: right;
}
.sale .item img {
  display: block;
  width: 100%;
}
.sale .item .item-main {
  margin-bottom: 0.2rem;
  padding: 0.21333333rem;
  width: 4.56rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.sale .item .item-main h3 {
  font-size: 0.37333333rem;
  height: 0.93333333rem;
  line-height: 0.46666667rem;
  color: #333;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.sale .item .item-des {
  padding: 0.32rem 0 0.18666667rem;
}
.sale .item .item-des .person {
  float: left;
  color: #888;
  font-size: 0.32rem;
}
.sale .item .item-des .sale-price {
  float: right;
  color: #f90;
}
.sale .item .item-des .sale-price i {
  font-size: 0.24rem;
  vertical-align: 0.10666667rem;
}
.sale .item .item-des .sale-price strong {
  font-size: 0.37333333rem;
}
.sale .item .item-des .sale-price em {
  font-size: 0.24rem;
  color: #999;
}
</style>