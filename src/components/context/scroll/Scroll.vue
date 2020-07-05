<template>
  <div class="scroll">
    <BScroll ref="BScroll" :attr="attr" :func="func" @pullingUp="listenPullingUp" @pullingDown="listenPullingDown" @scroll="scroll">
      <slot></slot>
    </BScroll>
  </div>
</template>

<script>
import BScroll from 'vue-bscroll'

export default {
  components:{BScroll},
  data(){
    return {
      attr:{
        click:true,
        probeType:3,
      },
      func: {
        // 监听滚动
        listenScroll: true,
        // 监听下拉刷新
        listenPullingDown: true,
        // 监听上拉加载
        listenPullingUp: true
      }
    }
  },
  methods:{
    listenPullingUp(){
      console.log('上啦加载...')
    },
    listenPullingDown(){
      console.log('下拉刷新')
    },
    scroll(pos){
      this.$emit('roll',pos)
    },
    backtop(){
      this.$refs.BScroll.scrollTo(0,0,300)
    }
  }
}
</script>

<style scoped>
.scroll{
  height:calc(100vh - 93px);
}
</style>