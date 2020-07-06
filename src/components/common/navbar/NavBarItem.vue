<template>
  <div class="flx">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.left,.right{
  width:60px;
}
.center{
  flex:1;
}
</style>