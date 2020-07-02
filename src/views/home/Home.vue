<template>
  <div id="home">
    <top-nav-bar></top-nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommentd="recommend"></recommend>
    <fashion></fashion>
  </div>
</template>

<script>
import HomeSwiper from './childcommon/HomeSwiper'
import TopNavBar from './childcommon/TopNavBar'
import recommend from './childcommon/recommend'
import fashion from './childcommon/fashion'

import {getHomeData,getHomeList} from 'network/home'

export default {
  components:{HomeSwiper,TopNavBar,recommend,fashion},
  data(){
    return {
      banners:[],
      recommend:[]
    }
  },
  created(){
    this.getHomeData()
    this.getProList()
  },
  methods:{
    getHomeData(){
      getHomeData().then(datas => {
        this.banners = datas.data.data.banner.list
        this.recommend = datas.data.data.recommend.list
      })
    },
    getProList(){
      getHomeList().then(datas => {
        console.log(datas)
      })
    }
  }
}
</script>
<style lang='less' scoped>
#home{
  padding-top:44px;
}
</style>