<template>
  <div class="tabbar-item" @click="toggleTab">
    <div v-show="!isActive"><slot name="tab-icon"></slot></div>
    <div v-show="isActive"><slot name="tab-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
  export default {
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {

      }
    },
    methods:{
      toggleTab(){
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive(){
          return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} : {}
      }
    }
  }
</script>

<style lang="less" scoped>
.tabbar-item{
  flex:1;
  font-size:12px;
  img{
      width:30px;
      height:30px;
  }
}
</style>