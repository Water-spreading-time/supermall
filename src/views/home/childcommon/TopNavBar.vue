<template>
  <div>
    <nav-bar>
      <nav-bar-item>
        <div slot="center">购物街</div>
      </nav-bar-item>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import NavBarItem from 'components/common/navbar/NavBarItem'

export default {
  components:{NavBar,NavBarItem},
  data(){
    return {
    }
  }
}
</script>
<style lang='less' scoped>
</style>