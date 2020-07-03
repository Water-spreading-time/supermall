<template>
  <div class="flx fxe" id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  components:{TabBarItem}
}
</script>

<style lang="less" scoped>
#tabbar{
  height:49px;
  left:0;
  right:0;
  bottom:0;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 3px 1px rgba(100,100,100,.1);
  z-index: 9;
}
</style>