<template>
  <div class="details">
    <top-nav/>
    <scroll :probeType='3' class="contents" @scroll="roll" ref="scroll">
      <detail-swiper :banners="BannerList" ref="hSwiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-parma-info :paramInfo="paramInfo"></detail-parma-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <detail-recommend-info :recommendList="recommendList"></detail-recommend-info>
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
      recommendList:[]
    }
  },
  created(){
    this.id = this.$route.query.iid
    this.getdetails()
    this.getRecomend()
  },
  methods:{
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