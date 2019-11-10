<template>
    <!--nav开始-->
		<nav class="tourism-entry">
			<div class="tourism-entry-wrapper">
				 <router-link
            to="/column"
            >
					<em></em>
					出境游
				 </router-link>
				<a href="#">
					<em class="tourism-item2"></em>
					国内游
				</a>
				<a href="#">
					<em class="tourism-item3"></em>
					周边游
				</a>
				<a href="#">
					<em class="tourism-item4"></em>
					当地游
				</a>
			</div>
		</nav>
		<!--nav结束-->
</template>

<script>
export default {
    name:'Nav',
    props:['sales','dataName']
}
</script>

<style>
.tourism-entry {
  width: 10rem;
  margin: 0 auto;
  padding: 0.33333333rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.tourism-entry .tourism-entry-wrapper {
  padding: 0 0.33333333rem;
}
.tourism-entry a {
  float: left;
  width: 2.33333333rem;
  text-align: center;
  color: #666;
  font-size: 0.32rem;
  font-weight: 500;
}
.tourism-entry a em {
  display: block;
  margin: 0 auto;
  width: 1.33333333rem;
  height: 1.33333333rem;
  vertical-align: middle;
  border-radius: 50%;
  margin-bottom: 0.2rem;
  background: #4ca8f5;
  position: relative;
}
.tourism-entry a em:before {
  content: "";
  display: block;
  width: 1rem;
  height: 0.68rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -0.38666667rem -4.29333333rem;
}
.tourism-entry a em.tourism-item2 {
  background-color: #ff9f26;
}
.tourism-entry a em.tourism-item2:before {
  width: 0.74666667rem;
  height: 0.78666667rem;
  background-position: -1.92rem -4.24rem;
}
.tourism-entry a em.tourism-item3 {
  background-color: #f75232;
}
.tourism-entry a em.tourism-item3:before {
  width: 0.85333333rem;
  height: 0.68rem;
  background-position: -3.26666667rem -4.29333333rem;
}
.tourism-entry a em.tourism-item4 {
  background-color: #96ea3c;
}
.tourism-entry a em.tourism-item4:before {
  width: 0.89333333rem;
  height: 0.70666667rem;
  background-position: -4.65333333rem -4.28rem;
}
</style>