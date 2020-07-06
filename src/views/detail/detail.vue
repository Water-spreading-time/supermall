<template>
  <div class="details">
    <top-nav></top-nav>
  </div>
</template>
<script>
import TopNav from './childcommon/TopNav'

export default {
  components:{
    TopNav
  },
  data(){
    return {
      id:''
    }
  },
  created(){
    this.id = this.$route.params.iid
  }
}
</script>
<style lang='less' scoped>
.details{
  position: relative;
  z-index: 10;
  background: #fff;
  min-height:1000px;
}
</style>