
<template>
  <!-- <div class="home box"> -->
  <div class="home box">
    <Banner></Banner>
    <Nav></Nav>
    <Sales :sales='sales' dataName='home'></Sales>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Nav from '../pages/Nav.vue'
import Sales from '../pages/Sales.vue'

import axios from 'axios'

export default {
  data(){
    return{
      sales:[

      ], 
    }
  },
  components:{
    Sales,Banner,Nav
  },
  mounted(){
    axios({
      url:'/api/home',
      params:{_pages:1,_limit:6} 
    }).then(
      res => this.sales = res.data.data
    )
    // axios({
    //   url:'/douban/v2/movie/top250',
    //   params:{start:1,count:1}
    // }).then(
    //   res => this.douban = res.data
    // )
  }
}
</script>


<style>
 /* .home__box{
   background: gray
 }
 .home__box--search{
   background: gray
 }
 .home__box--input{
   background: green
 } */
</style>

