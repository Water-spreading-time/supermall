<template>
  <swiper v-if="banners.length" class="detail-swiper">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <img :src="item"/>
    </swiper-item>
  </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{Swiper,SwiperItem},
  data(){
    return {
      
    }
  },
}
</script>
<style lang='less' scoped>
.detail-swiper{
  text-align: center;
  height:300px;
}
</style>