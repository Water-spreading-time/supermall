<template>
  <div class="details">
    <top-nav @jump='jump' :activeIndex="activeIndex"/>
    <scroll :probeType='3' class="contents" @scroll="roll" ref="scroll">
      <detail-swiper :banners="BannerList" ref="base"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-parma-info ref="param" :paramInfo="paramInfo"></detail-parma-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommendList="recommendList"></detail-recommend-info>
    </scroll>
    <detail-nav-bar @addCart="addCart"/>
    <back-top @click.native="rollBackTop" v-show="isShowBacktop"/>
  </div>
</template>

<script>
import TopNav from './childcommon/TopNav'
import Scroll from 'components/context/scroll/Scroll'
import DetailSwiper from './childcommon/DetailSwiper'
import DetailBaseInfo from './childcommon/DetailBaseInfo'
import DetailShopInfo from './childcommon/DetailShopInfo'
import DetailGoodsInfo from './childcommon/DetailGoodsInfo'
import DetailParmaInfo from './childcommon/DetailParmaInfo'
import DetailCommentInfo from './childcommon/DetailCommentInfo'
import DetailRecommendInfo from './childcommon/DetailRecommendInfo'
import DetailNavBar from './childcommon/DetailNavBar'

import {GetDetail,getRecommend,Info,Shops,GoodsParam} from 'network/detail'

import {BackTopMixin} from 'constant/mixin'

export default {
  name:'Detail',
  mixins:[BackTopMixin],
  components:{
    TopNav,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParmaInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailNavBar
  },
  data(){
    return {
      id:'',
      BannerList:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendList:[],
      themeTops:[],
      activeIndex:0
    }
  },
  updated(){
    this.$nextTick(() => {
      this._getOffsetTops()
    })
  },
  created(){
    this.id = this.$route.query.iid
    this.getdetails()
    this.getRecomend()
  },
  methods:{
    _getOffsetTops() {
      this.themeTops = []
      this.themeTops.push(this.$refs.base.$el.offsetTop)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },
    _listenScrollTheme(position) {
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        if (position >= iPos && position < this.themeTops[i+1]) {
          if (this.activeIndex !== i) {
            this.activeIndex = i;
          }
          break;
        }
      }
    },
    addToCart() {
      const obj = {}
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      this.$store.commit('addCart', obj)
    },
    //商品详情信息
    getdetails(){
      GetDetail(this.id).then(res => {
        const data = res.result
        //轮播图
        this.BannerList = data.itemInfo.topImages
        // 2.3.获取商品信息
        this.goods = new Info(data.itemInfo, data.columns, data.shopInfo.services);
        //店铺信息
        this.shop = new Shops(data.shopInfo)
        //商品信息
        this.detailInfo = data.detailInfo
        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    //推荐
    getRecomend(){
      getRecommend().then(res => {
        this.recommendList = res.list
      })
    },
    roll(pos){
      this.isShowBacktop = -pos.y > 1000
      this._listenScrollTheme(-pos.y)
    },
    jump(index){
      this.activeIndex = index
      this.$refs.scroll.scrollTo(0,-this.themeTops[index],300)
    },
    addCart(){
      console.log('加入购物车失败...')
    }
  }
}
</script>

<style lang='less' scoped>
.details{
  position: relative;
  z-index: 10;
  background: #fff;
  padding-top:44px;
  /deep/ .scroll{
    height:calc(100vh - 44px);
    margin-top: 44px;
  }
  .contents{
    div{
      background: #fff;
    }
  }
}
</style>