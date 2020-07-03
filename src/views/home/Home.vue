<template>
  <div id="home">
    <top-nav-bar></top-nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommentd="recommend"></recommend>
    <fashion></fashion>
    <child-nav :navList="navList" @cut="goodsCut"></child-nav>
    <goods :goodsList="goodsList"></goods>
  </div>
</template>

<script>
import HomeSwiper from './childcommon/HomeSwiper'
import TopNavBar from './childcommon/TopNavBar'
import recommend from './childcommon/recommend'
import fashion from './childcommon/fashion'
import ChildNav from 'components/common/childnav/ChildNav'
import Goods from 'components/context/goods/Goods'

import {getHomeData,getHomeList} from 'network/home'

export default {
  components:{HomeSwiper,TopNavBar,recommend,fashion,ChildNav,Goods},
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      goodsIndex:'pop',
      navList:[
        {title:'流行',keys:'pop'},
        {title:'新款',keys:'new'},
        {title:'精选',keys:'sell'}
      ]
    }
  },
  created(){
    this.getHomeData()
    this.getProList('pop')
    this.getProList('new')
    this.getProList('sell')
  },
  computed:{
    goodsList(){
      return this.goods[this.goodsIndex].list
    }
  },
  methods:{
    getHomeData(){
      getHomeData().then(datas => {
        this.banners = datas.banner.list
        this.recommend = datas.recommend.list
      })
    },
    getProList(type){
      const page = this.goods[type].page
      getHomeList(type,1).then(datas => {
        this.goods[type].list.push(...datas.list)
        this.goods[type].page + 1
      })
    },
    goodsCut(e){
      this.goodsIndex = e
    }
  }
}
</script>
<style lang='less' scoped>
#home{
  padding-top:44px;
  padding-bottom:100px;
}
</style>