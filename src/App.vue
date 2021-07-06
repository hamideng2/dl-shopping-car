<template>
  <div id="app">
<!--    3、注册tabbar后使用-->
    <router-view> </router-view>
    <maintabbar/>
  </div>
</template>



<script>
  // 1、导入tabbar
import maintabbar from "components/content/maintabbar/maintabbar";
export default {
  name: 'App',
  components: {
    // 2注册maintabbar
    maintabbar
  }


}
</script>



<style>

</style>
