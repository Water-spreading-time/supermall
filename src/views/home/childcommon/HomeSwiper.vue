<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad"/>
      </a>
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
      isLoad:true
    }
  },
  methods:{
    swiperImgLoad(){
      if(this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = false
      }
    }
  }
}
</script>
<style lang='less' scoped>
</style>