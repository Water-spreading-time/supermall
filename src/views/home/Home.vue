<template>
  <div id="home">
    <top-nav-bar></top-nav-bar>
    <scroll ref="scroll" @roll="roll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommentd="recommend"></recommend>
      <fashion></fashion>
      <child-nav :navList="navList" @cut="goodsCut" ref="childNav"></child-nav>
      <goods :goodsList="goodsList"></goods>
    </scroll>
    <back-top @click.native="rollBackTop" v-show="isShowBacktop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childcommon/HomeSwiper'
import TopNavBar from './childcommon/TopNavBar'
import recommend from './childcommon/recommend'
import fashion from './childcommon/fashion'
import ChildNav from 'components/common/childnav/ChildNav'
import Goods from 'components/context/goods/Goods'
import Scroll from 'components/context/scroll/Scroll'
import BackTop from 'components/context/backTop/BackTop'

import {getHomeData,getHomeList} from 'network/home'

export default {
  components:{HomeSwiper,TopNavBar,recommend,fashion,ChildNav,Goods,Scroll,BackTop},
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
      ],
      isShowBacktop:false
    }
  },
  created(){
    this.getHomeData()
    this.getProList('pop')
    this.getProList('new')
    this.getProList('sell')
  },
  mounted(){
    console.log(this.$refs.childNav.$el.offsetTop)
  },
  computed:{
    goodsList(){
      return this.goods[this.goodsIndex].list
    }
  },
  methods:{
    //获取轮播图数据
    getHomeData(){
      getHomeData().then(datas => {
        this.banners = datas.banner.list
        this.recommend = datas.recommend.list
      })
    },
    //获取产品列表数据
    getProList(type){
      const page = this.goods[type].page
      getHomeList(type,1).then(datas => {
        this.goods[type].list.push(...datas.list)
        this.goods[type].page + 1
      })
    },
    goodsCut(e){
      this.goodsIndex = e
    },
    //滚回顶部
    rollBackTop(){
      this.$refs.scroll.backtop()
    },
    //监听滚动
    roll(pos){
      this.isShowBacktop = -pos.y > 1000
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