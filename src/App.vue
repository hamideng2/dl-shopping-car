<template>
  <div id="app">
<!--    3、注册tabbar后使用-->
    <router-view> </router-view>
    <tabbar>
      <tabbaritem path="/home" activecolor="blue">
        <img slot="item_img" src="./assets/img/tabbar/底部首页.png">
        <img slot="item_img_active" src="./assets/img/tabbar/底部首页_active.png">
        <div slot="item_text">首页</div>
      </tabbaritem>
      <tabbaritem path="/profile" activecolor="blue">
        <img slot="item_img" src="./assets/img/tabbar/底部我的.png">
        <img slot="item_img_active" src="./assets/img/tabbar/底部我的_active.png">
        <div slot="item_text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>



<script>
  // 1、导入tabbar
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";

export default {
  name: 'App',
  components: {
    // 2注册tabbar
    tabbar,
    tabbaritem
  }


}
</script>



<style>

</style>
