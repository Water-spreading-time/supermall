<template>
  <div class="details">
    <top-nav></top-nav>
    <scroll>
      <detail-swiper :banners="BannerList" ref="hSwiper"></detail-swiper>
    </scroll>
  </div>
</template>
<script>
import TopNav from './childcommon/TopNav'
import Scroll from 'components/context/scroll/Scroll'
import DetailSwiper from './childcommon/DetailSwiper'

import {GetDetail,getRecommend,Info} from 'network/detail'

export default {
  name:'Detail',
  components:{
    TopNav,
    Scroll,
    DetailSwiper
  },
  data(){
    return {
      id:'',
      BannerList:[],
      goods:null
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
      })
    },
    //评论
    getRecomend(){
      getRecommend().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang='less' scoped>
.details{
  position: relative;
  z-index: 10;
  background: #fff;
  min-height:1000px;
  /deep/ .scroll{
    height:calc(100vh - 44px);
    margin-top: 44px;
  }
}
</style>