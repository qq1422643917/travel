<template>
    <div id="wrapper" v-if='detail._id'>
        <ul class="tour-list">
            <a href="#">
                <li class="item-container">
                    <div class="tour-img">
                        <img :src="baseUrl + detail.img" alt="" />
                        <i></i>
                    </div>
                    <div class="tour-content">
                        <h3>{{detail.title}}</h3>
                        <div class="tour-icon">
                            <span>无购物</span>
                            <span>无自费 </span>
                            <span class="icon-com">爸妈放心游</span>
                        </div>
                        <div class="tour-info clearfix">
                            <dl>
                                <dt>北京出发</dt>
                                <dd>5星古北之光温泉酒店住宿</dd>
                            </dl>
                        </div>
                        <span class="tour-schedule">
                            班期： 每周四、五、六、日
                        </span>
                        <div class="tour-des">
                            <span class="price">
                                <em>￥</em>
                                <strong>{{detail.price}}</strong>
                                起
                            </span>
                            <span class="tral">
                                <i>热门</i>
                                {{detail.num}}
                            </span>
                            <span class="comment">
                                <i>69</i>
                                条评论
                            </span>
                            <span class="grade">
                                <strong>5</strong>
                                分
                            </span>
                        </div>
                        
                    </div>
                </li>
            </a>
        </ul>				
    </div>
 
</template>

<script>
import axios from '../plugins/axios'

export default {
     props:['id'], ///props 替代路由传递参数
     data(){
      return{
        detail:{}
      }
    },
    mounted(){

      this.$root.bLoading=true

      axios({
        url:'/api/'+this.$route.query.dataName+'/'+this.id
      }).then(
        res=>{
            // console.log(res.data)
          this.$root.bLoading=false,
          this.detail=res.data.data
        }
      )
    }
}
</script>

<style scoped>
    .tour-list{margin-top:2rem}
    .tour-img{width:8rem} 
    .tour-img img{width:8rem;margin-left:1rem}
    .tour-content{margin:.4rem .8rem}
    .tral{color:red}
    .price{color:magenta}
</style>