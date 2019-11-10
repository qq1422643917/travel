<template>
  <div id="app">
    <Loading v-if="$root.bLoading"></Loading>
    <Header v-if="$root.bNav"></Header>
    <transition
     enter-active-class = "animated bounceInLeft"
    >
    <router-view></router-view>
   
   
         <!-- <keep-alive>
        <router-view style="position:absolute"></router-view>
        </keep-alive> -->
    </transition>
    <Footer v-if="$root.bFoot"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading'

export default {
  name: 'app',
  components: {
    Header,Footer,Loading
  },
   watch:{
    $route:{
      handler(nextRoute,prevRoute){//属性检测,路由观测
        // console.log(nextRoute.path)
        let path = nextRoute.path;
        if(/home|follow|detail|map/.test(path)){
          this.$root.bNav=true;
          this.$root.bFoot=true;
        }
        if(/user|column/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        if(/login|reg/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=false;
        }
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>
 