<template>
  <div class="flx childnav">
    <div v-for="(item,index) in navList" :key="item.keys" @click="cut(item.keys,index)">
      <span :style="indexType == index ? colorAndBg : ''">{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    navList:{
      type:Array,
      default(){
        return []
      }
    },
    color:{
      type:String,
      default(){
        return '#ff8198'
      }
    }
  },
  data(){
    return {
      indexType:0
    }
  },
  methods:{
    cut(keys,index){
      this.indexType = index
      this.$emit('cut',keys)
    }
  },
  computed:{
    colorAndBg(){
      return {color:this.color,borderBottom:'3px solid' + this.color}
    }
  }
}
</script>
<style lang='less' scoped>
.childnav{
  position: sticky;
  top:44px;
  text-align: center;
  height:40px;
  line-height: 40px;
  background: #fff;
  z-index: 9;
}
.childnav span{
  padding:8px 10px;
}
</style>