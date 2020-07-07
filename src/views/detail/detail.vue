<template>
  <div class="details">
    <top-nav></top-nav>
    <scroll>
      <router-view/>
    </scroll>
  </div>
</template>
<script>
import TopNav from './childcommon/TopNav'
import Scroll from 'components/context/scroll/Scroll'

export default {
  components:{
    TopNav,
    Scroll
  },
  data(){
    return {
      id:''
    }
  },
  activated(){
    this.id = this.$route.query.iid
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