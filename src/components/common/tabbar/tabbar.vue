<template>
  <div id="tab_bar">
  <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tab_bar {
    display: flex;
    height: 49px;
    /*tabbar高度一般都是49*/
    background:#f2f2f2;
    /*定位到最底部样式*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*阴影参数：X轴，Y轴，模糊度，颜色，.5是透明度*/
    box-shadow: 0 -2px 3px rgba(100,100,100,.2);
  }

</style>
