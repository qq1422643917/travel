<template>
    <div id="wrapper">
		<div id="scroller">
			<!-- banner开始 -->
            <div class="i-banner clearfix">
                <ul>
                    <li><a href="#"><img src="../assets/images/img/travel-banner04.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../assets/images/img/travel-banner01.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../assets/images/img/travel-banner02.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../assets/images/img/travel-banner03.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../assets/images/img/travel-banner04.jpg" alt=""></a></li>
                    <li><a href="#"><img src="../assets/images/img/travel-banner01.jpg" alt=""></a></li>
                </ul>
                <ul>
                    <li class="on"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
		</div>
    </div>
		<!-- banner结束 -->
</template>

<script>
import scrollPic from '../assets/js/lunbo'
export default {
    name:'banner',
    
    mounted(){
        //banner 调用
        scrollPic();
    }
}
    
</script>

<style>
 #wrapper .i-banner {
  width: 10rem;
  overflow: hidden;
  transform: translateZ(0);
  position: relative;
  margin: 0 auto;
}
#wrapper .i-banner ul:first-child {
  width: 600%;
  overflow: hidden;
  transform: translateX(-16.6667%);
  -webkit-transform: translateX(-16.6667%);
}
#wrapper .i-banner ul:first-child li {
  width: 16.6667%;
  float: left;
}
#wrapper .i-banner ul:first-child li img {
  width: 100%;
  height: 6.02666667rem;
  display: block;
}
#wrapper .i-banner ul:last-child {
  width: 2rem;
  height: 0.26666667rem;
  position: absolute;
  right: 0.13333333rem;
  bottom: 0.26666667rem;
}
#wrapper .i-banner ul:last-child li {
  width: 0.19333333rem;
  height: 0.19333333rem;
  margin-left: 0.13333333rem;
  border-radius: 50%;
  border: 1px solid #0099cc;
  float: left;
}
#wrapper .i-banner ul:last-child li:first-child {
  margin-left: 0;
}
#wrapper .i-banner ul:last-child .on {
  background: #0099cc;
}
</style>