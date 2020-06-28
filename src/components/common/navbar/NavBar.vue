<template>
  <div class="flx navbar fxe" :style="{background:bgcolor,color}">
    <slot></slot>
  </div>
</template>
<script>
import NavBarItem from './NavBarItem'

export default {
  props:{
    bgcolor:{
      type:String,
      default(){
        return '#ff8198'
      }
    },
    color:{
      type:String,
      default(){
        return '#fff'
      }
    }
  },
  components:{NavBarItem},
  data(){
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.navbar{
  height:44px;
  line-height: 44px;
  text-align: center;
  left:0;
  right:0;
  top:0;
  z-index: 999;
}
</style>