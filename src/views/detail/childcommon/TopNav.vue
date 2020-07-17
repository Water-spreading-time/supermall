<template>
  <div>
    <nav-bar color="#333" bgcolor="#fff">
      <nav-bar-item>
        <div slot="left" @click="back" class="back">
          <img src="~assets/img/common/back.svg" alt="" class="back">
        </div>
        <div slot="center" class="parameter">
          <span v-for="(item,index) in navList" :key="index" 
          @click="toggleModule(index)" :class="{active:activeIndex == index}">{{item}}</span>
        </div>
      </nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import NavBarItem from 'components/common/navbar/NavBarItem'

export default {
  components:{NavBar,NavBarItem},
  props:{
    activeIndex:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  data(){
    return {
      navList:['商品','参数','评论','推荐']
    }
  },
  methods:{
    back(){
      this.$router.back()
    },
    toggleModule(index){
      this.$emit('jump',index)
    }
  }
}
</script>

<style lang='less' scoped>
.back{
  /deep/ img{
    width:25px;
  }
}
.parameter{
  /deep/ span{
    margin:0 5px;
  }
  .active{
    color:#ff8198;
  }
}
</style>