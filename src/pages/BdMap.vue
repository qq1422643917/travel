<template>
  <div>
      
      <div id="allmap" style="height:500px;margin-top:60px"></div>
    起点:<input type="text" v-model="start" style="border:1px solid #000;margin-top:.5rem;width:3rem" >
    终点:<input type="text" v-model="end" style="border:1px solid #000;margin:.5rem .3rem;width:3rem">

      <input type="button" value="搜索路线" @click="search"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
          start:'北京 天安门',
          end:'上海 人民广场'  
        }
    },
    methods:{
        search(){
            //创建路线实例
             var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true},policy: 'BMAP_DRIVING_POLICY_AVOID_HIGHWAY'});

            this.map.clearOverlays(); //清除覆盖物
			driving.search(this.start,this.end);//检索路线
        }
    },
    mounted(){   
    // 百度地图API功能
	  this.map = new BMap.Map("allmap");    // 创建Map实例
    this.point = new BMap.Point(121.4979538030,31.3847636119)
    this.map.centerAndZoom(this.point, 14);  // 初始化地图,设置中心点坐标和地图级别
    this.marker = new BMap.Marker(this.point);  // 创建标注
    this.map.addOverlay(this.marker);// 将标注添加到地图中
    this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }                           
}
</script>

<style>

</style>