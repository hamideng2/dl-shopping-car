<template>
  <div class="tab_bar_item" @click="itemclick" >
    <div v-if="!isactive"><slot name="item_img"></slot></div>
    <div v-else><slot name="item_img_active"></slot></div>
<!--    <div :activestyle="{ active:isactive }" ><slot name="item_text"></slot></div>-->
    <div :style="activestyle" ><slot name="item_text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "tabbaritem",
        props:{
          //定义路径返回值
          path:String,
          //定义个默认的激活颜色值
          activecolor:
          {
            type:String,
            default:'#ff0000'
          }
        },
      computed:
        {
          isactive()
          {
            //$route.path当前的路由为活跃值,先获取当前是不是活跃状态
            return this.$route.path.indexOf(this.path) !== -1
          },
          activestyle()
          {
            //如果$route.path获取当前是活跃值，就赋值颜色activecolor，不是true，返回{}
            return this.isactive? { color:this.activecolor }:{}
          }
        },
        methods:{
          itemclick()
          {//要是头部左边返回按钮可以点，则用push
            this.$router.replace(this.path)
          }
      }

    }
</script>

<style scoped>
  .tab_bar_item
  {/*flex:1代表平均分配*/
    flex: 1;
    text-align: center;
    vertical-align: middle;
    padding-bottom: 3px;
  }
  .tab_bar_item img
  {
    width: 26px;
    height: 26px;
    margin-top: 2px;

  }
</style>
