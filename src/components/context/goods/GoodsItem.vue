<template>
  <div class="goodsItem" @click="jumpDetail">
    <!-- <a :href="goods.link"> -->
      <img v-lazy="goods.image || goods.show.img" alt="" @load="imgLoad">
      <div class="goodsInfo">
        <p class="title">{{goods.title}}</p>
        <p><span class="price">{{goods.price}}</span><span class="collect">{{goods.cfav}}</span></p>
      </div>
    <!-- </a> -->
  </div>
</template>
<script>
import {Bus} from 'bus'

export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  methods:{
    imgLoad(){
      Bus.$emit('imgLoad')
    },
    jumpDetail(){
      this.$router.push({path:`/detail`,query:{iid:this.goods.iid}})
    }
  }
}
</script>
<style scoped>
.goodsItem{
  width:47%;
  margin-top: 10px;
  text-align: center;
  font-size:12px;
  color:#666;
  position: relative;
  padding-bottom:40px;
}
.goodsItem img{
  border-radius: 5px;
}
.goodsInfo{
  position: absolute;
  bottom:0;
  left:0;
  right:0; 
}
.title{
  font-size:14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom:3px;
}
.price{
  color:red;
  margin-right: 20px;
}
.collect{
  position: relative;
}
.collect::before {
  content:"";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>