<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.png" slot="tab-icon">
        <img src="~assets/img/tabbar/home1.png" slot="tab-icon-active">
        <div slot="tab-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img src="~assets/img/tabbar/cate.png" slot="tab-icon">
        <img src="~assets/img/tabbar/cate1.png" slot="tab-icon-active">
        <div slot="tab-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/cart.png" slot="tab-icon">
        <img src="~assets/img/tabbar/cart1.png" slot="tab-icon-active">
        <div slot="tab-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/people.png" slot="tab-icon">
        <img src="~assets/img/tabbar/people1.png" slot="tab-icon-active">
        <div slot="tab-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  data(){
    return {
    }
  },
  components:{TabBar,TabBarItem}
}
</script>

<style lang='less' scoped>
</style>