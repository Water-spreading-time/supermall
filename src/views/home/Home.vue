<template>
  <div id="home">
    <top-nav-bar></top-nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from './childcommon/HomeSwiper'
import TopNavBar from './childcommon/TopNavBar'

import {getHomeData} from 'network/home'

export default {
  components:{HomeSwiper,TopNavBar},
  data(){
    return {
      banners:[]
    }
  },
  created(){
    getHomeData().then(datas => this.banners = datas.data.data.banner.list)
  }
}
</script>
<style lang='less' scoped>
#home{
  padding-top:44px;
}
</style>