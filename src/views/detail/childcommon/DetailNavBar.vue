<template>
  <div class="bottomNav fxe flx">
    <div class="flx left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="flx right">
      <div class="addCart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style lang='less' scoped>
.bottomNav{
  height:49px;
  z-index: 1000;
  background: #fff;
  text-align: center;
  width:100%;
  .flx{
    align-items: center;
  }
  .left{
    font-size:14px;
    color:#666;
    background: #f2f2f2;
    .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 5px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
      background-size: 22px;
    }

    .service {
      background-position:0 -53px;
    }

    .shop {
      background-position:0 -98px;
    }
  }
  .right{
    color:#999;
    line-height: 49px;
    .addCart{
      background: orange;
    }
    .buy{
      background: seagreen;
      color:#fff;
    }
  }
}
</style>