<template>
    <div class="bottom">
         <!--底部开始-->
        
        <div id="footer">
            <router-link
            to="/home"
            class="home"
            active-class='home_active'
            >
              <span></span>
                <p>首页</p>
            </router-link>

            <router-link
            to="/map"
            class="destination"
            active-class='destination_active'
            >
              <span></span>
                <p>目的地</p>
            </router-link>
         
            <router-link
            to="/column"
            class="history"
            active-class='history_active'
            >
              <span></span>
                <p>浏览历史</p>
            </router-link>
         
            <router-link
            to="/user"
            class="my"
            active-class='my_active'
            >
             <span></span>
              <p>个人</p> 
            </router-link>
            
        </div>
        <!--返回头部开始-->
	    
    </div>
   
    
</template>

<script>
export default {
    name:'Footer',
    mounted(){
       
    }
}
</script>

<style>

#footer {
  margin-top:1.30666667rem;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 0;
  width: 100%;
  height: 1.30666667rem;
  background-color: #ededed;
  position: fixed;
  border-top: 1px solid #e0e0e0;
  display: flex;
}
#footer a {
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  display: block;
  color: #999;
}
#footer a span {
  display: block;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0.13333333rem auto 0.04rem;
}
#footer a.active {
  color: #1448ae;
}

#footer .home span {
  width: 0.72rem;
  height:  0.64rem;
  background-image: url(../assets/images/icon/footer_0322_05.png);
}
#footer .home_active span {
  width: 0.72rem;
  height:  0.64rem;
  background-image: url(../assets/images/icon/footer_0322_01.png);
}

#footer .destination span {
  width: 0.64rem;
  height:  0.65333333rem;
  background-image: url(../assets/images/icon/footer_0322_06.png);
}
#footer .destination_active span {
  width: 0.64rem;
  height:  0.65333333rem;
  background-image: url(../assets/images/icon/footer_0322_02.png);
}

#footer .history span {
  width: 0.70666667rem;
  height: 0.66666667rem;
  background-image: url(../assets/images/icon/footer_0322_07.png);
}
#footer .history_active span {
  width: 0.70666667rem;
  height: 0.66666667rem;
  background-image: url(../assets/images/icon/footer_0322_03.png);
}
#footer .my span {
  width: 0.66666667rem;
  height: 0.65333333rem;
  background-image: url(../assets/images/icon/footer_0322_08.png);
}
#footer .my_active span {
  width: 0.66666667rem;
  height: 0.65333333rem;
  background-image: url(../assets/images/icon/footer_0322_04.png);
}

#footer p {
  font-size: 0.30666667rem;
}

</style>