<template>
  <div id="app">
<!--    3、注册tabbar后使用-->
    <router-view> </router-view>
    <tabbar>
      <tabbaritem path="/home" activecolor="#05b2b1">
        <img slot="item_img" src="assets/img/tabbar/底部首页.png">
        <img slot="item_img_active" src="assets/img/tabbar/底部首页_active.png">
        <div slot="item_text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activecolor="#05b2b1">
        <img slot="item_img" src="assets/img/tabbar/底部分类.png">
        <img slot="item_img_active" src="assets/img/tabbar/底部分类_active.png">
        <div slot="item_text">分类</div>
      </tabbaritem>
      <tabbaritem path="/shoppingcar" activecolor="#05b2b1">
        <img slot="item_img" src="assets/img/tabbar/底部购物车.png">
        <img slot="item_img_active" src="assets/img/tabbar/底部购物车_active.png">
        <div slot="item_text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activecolor="#05b2b1">
        <img slot="item_img" src="assets/img/tabbar/底部我的.png">
        <img slot="item_img_active" src="assets/img/tabbar/底部我的_active.png">
        <div slot="item_text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>



<script>
  // 1、导入tabbar
import tabbar from "components/common/tabbar/tabbar";
import tabbaritem from "components/common/tabbar/tabbaritem";

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
