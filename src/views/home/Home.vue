<template>
  <div id="home">
    <top-nav-bar></top-nav-bar>
    <child-nav :navList="navList" @cut="goodsCut" ref="childNav1" class="rel" v-show="isShowChildNav"></child-nav>
    <scroll ref="scroll" :probeType="3" :pullUpLoad="true"
            @scroll="roll"
            @pullingUp="loadMore"
            :data="goodsList">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend :recommentd="recommend"></recommend>
      <fashion></fashion>
      <child-nav :navList="navList" @cut="goodsCut" ref="childNav2" v-show="!isShowChildNav"></child-nav>
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

import {getHomeData,getHomeList} from 'network/home'

import {Bus} from 'bus'

import {BackTopMixin} from 'constant/mixin'

export default {
  name:'Home',
  components:{HomeSwiper,TopNavBar,recommend,fashion,ChildNav,Goods,Scroll},
  mixins:[BackTopMixin],
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
      isShowChildNav:false,
      childNavOffsetTop:0
    }
  },
  created(){
    this.getHomeData()
    this.getProList('pop')
    this.getProList('new')
    this.getProList('sell')
  },
  mounted(){
    const refresh = this.antiShake(this.$refs.scroll.refresh,50)
    Bus.$on('imgLoad',() => {
      refresh()
    })
  },
  activated(){
    console.log(this.posiY)
    this.$refs.scroll.scrollTo(0,this.posiY,0)
  },
  deactivated(){
    this.posiY = this.$refs.scroll.scroll.y
  },
  computed:{
    goodsList(){
      return this.goods[this.goodsIndex].list
    }
  },
  methods:{
    //防抖函数
    antiShake(func,dely){
      let timer = null
      return (...args) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },dely)
      }
    },
    //获取轮播图数据
    getHomeData(){
      getHomeData().then(datas => {
        this.banners = datas.banner.list
        this.recommend = datas.recommend.list
      })
    },
    //获取产品列表数据
    getProList(type){
      const page = this.goods[type].page + 1
      getHomeList(type,page).then(datas => {
        this.goods[type].list.push(...datas.list)
        this.goods[type].page += 1
        this.$refs.scroll.refresh()
        this.$refs.scroll.finishPullUp()
      })
    },
    //加载更多
    loadMore(){
      this.getProList(this.goodsIndex)
    },
    //轮播图加载完成
    swiperImgLoad(){
      this.childNavOffsetTop = this.$refs.childNav2.$el.offsetTop - 44
    },
    //产品分类切换
    goodsCut(e,index){
      this.$refs.childNav2.indexType = index
      this.$refs.childNav1.indexType = index
      this.goodsIndex = e
    },
    //监听滚动
    roll(pos){
      this.isShowBacktop = -pos.y > 1000
      this.isShowChildNav = -pos.y > this.childNavOffsetTop
    }
  }
}
</script>
<style lang='less' scoped>
#home{
  padding-top:44px;
  padding-bottom:144px;
}
</style>