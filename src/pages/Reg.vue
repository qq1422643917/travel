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
					<h3><router-link to="/reg">注册</router-link></h3>
				</div>
				<div class="logintip">
					<router-link to="/login">登录</router-link>
				</div>
			</header>
		</div>

		<!--内容区域开始-->
		<div id="wrapper">
			<div id="scroller">
				<!-- 表单 -->
				<form action="">
					<div class="register-bar clearfix">
						<ul>
							<li class="inp">
								<i class="login-name">登录名</i><input id="username" type="tel" placeholder="常用手机号码" v-model="username">
							</li>
							<li class="inp pw">
								<i class="login-pw">密码</i>
								<input id="password" type="password" placeholder="登录密码" v-model="password">
							</li>
              <li v-if="errMess">{{errMess}}</li>
						</ul>
            <h1 id="hh" @click="selectIcon"></h1>
            <input type="file" id="icon" style="display:block;margin-top:0.2rem">
						<div class="login-btn">
							<button class="submit" type="button" @click="reg">注册</button>
						</div>

					</div>

				</form>

			</div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
    return {
      username:'',
      password:'',
      errMess:''
    }
  },
  /* mounted(){
    this.$root.bNav=false;
    this.$root.bFoot=false;
  }, */
  
  methods:{
    selectIcon(){
      let input = document.getElementById('icon');
      input.click()
    },
    reg(){

      let formData = new FormData();
      formData.append('username',this.username)
      formData.append('password',this.password)
      let input = document.getElementById('icon')
      formData.append('icon',input.files[0])
      
      axios({
        url:'/api/reg',
        method:'post',
        data: formData
      }).then(
        res=>res.data.err===0?this.$router.push('/login'):this.errMess=res.data.msg
      )
    },
     mounted(){
    // 显示隐藏密码
    $(".change").click(function(){
      var that = $(this),
        input = that.closest(".pw").find("input");
      if(that.attr("data-show")==1){
        //prop此方法可以获取或者设置匹配元素的属性值。
        
          /*
          * prop 和 attr 简单区别一下：
          * 对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
          * 对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。 
          * 
          * 自定义属性 data-show 为 1时候  密码 是密文
          * 自定义属性 data-show 为 2时候  密码 是明文
        */
        input.prop("type", "text");
        that.attr("data-show","2");
      }else{
        input.prop("type", "password");
        that.attr("data-show","1");
      }
    });
  }
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
  background-position: -0.73333333rem -0.45333333rem;
}
#header .head-top .title {
  flex: 2;
  justify-content: center;
  font-size: 0.42666667rem;
  color: #000;
  text-align: center;
}
#header .head-top .title h3 {
  font-weight: 500;
}
#header .head-top .logintip {
  font-size: 0.4rem;
  text-align: center;
}
#header .head-top .logintip a {
  color: #000;
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
#wrapper .register-bar {
  width: 10rem;
  margin: 0 auto;
  padding: 1rem 0.64rem 0;
  color: #666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#wrapper .register-bar li {
  width: 100%;
  height: 1.06666667rem;
  line-height: 1.06666667rem;
  border-bottom: 1px solid #ccc;
}
#wrapper .register-bar li i {
  float: left;
  width: 2.13333333rem;
  font-size: 0.37333333rem;
  color: #666;
}
#wrapper .register-bar li span {
  font-size: 0.37333333rem;
  text-indent: 2em;
}
#wrapper .register-bar li input {
  float: left;
  width: 4.8rem;
  height: 1.06666667rem;
  font-size: 0.37333333rem;
  border: none;
  background: none;
  color: #000;
}
#wrapper .register-bar li a {
  float: right;
  width: 0.73333333rem;
  margin: 0 auto;
  text-align: center;
  display: none;
}
#wrapper .register-bar li a:before {
  content: '';
  display: inline-block;
  width: 0.29333333rem;
  height: 0.29333333rem;
  background: url(../assets/images/icon/sprites.png) no-repeat;
  background-size: 10rem auto;
  background-position: -3.06666667rem -0.52rem;
}
#wrapper .register-bar li .change:before {
  width: 0.41333333rem;
  height: 0.22666667rem;
  background-position: -3.76rem -0.56rem;
}
#wrapper .register-bar li .text-id {
  width: 4rem;
}
#wrapper .register-bar li .btn-id {
  width: 2.53333333rem;
  height: 0.73333333rem;
  line-height: 0.73333333rem;
  margin-top: 0.16rem;
  background-color: #ccc;
  color: #333;
  font-size: 0.37333333rem;
  border-radius: 0.06666667rem;
}
#wrapper .register-bar .pw .clear {
  float: left;
}
#wrapper .register-bar .login-btn {
  padding-top: 0.8rem;
}
#wrapper .register-bar .login-btn .submit {
  width: 100%;
  height: 1.06666667rem;
  line-height: 1.06666667rem;
  text-align: center;
  color: #fff;
  font-size: 0.42666667rem;
  border-radius: 0.13333333rem;
  background-color: #f7c612;
}
#wrapper .register-bar .login-qes {
  width: 100%;
  padding-top: 0.46666667rem;
}
#wrapper .register-bar .login-qes a {
  font-size: 0.32rem;
  color: #999;
  float: left;
}
#wrapper .register-bar .login-qes a:last-child {
  float: right;
}

</style>>

