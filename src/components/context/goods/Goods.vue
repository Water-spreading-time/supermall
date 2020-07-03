<template>
  <div class="goodsList flx">
    <goods-item v-for="(item,index) in goodsList" :key="item.ptpC + index" :goods="item"></goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'

export default {
  components:{GoodsItem},
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.goodsList{
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>