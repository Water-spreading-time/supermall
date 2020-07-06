<template>
  <div class="scroll">
    <BScroll ref="BScroll" :attr="attr" :func="func" @pullingUp="listenPullingUp" @pullingDown="listenPullingDown" @scroll="scroll">
      <slot></slot>
    </BScroll>
    <!-- <vue-better-scroll>
      <slot></slot>
    </vue-better-scroll> -->
  </div>
</template>

<script>
import BScroll from 'vue-bscroll'
import {VueBetterScroll} from 'vue2-better-scroll'

export default {
  name:"scroll",
  components:{
    BScroll,
    VueBetterScroll
  },
  data(){
    return {
      attr:{
        click:true,
        probeType:3,
        pullDownRefresh:{
          top:50
        }
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
      this.$emit('loadMore')
    },
    listenPullingDown(){
      console.log('下拉刷新')
      setTimeout(() => this.$refs.BScroll.afterRefresh(),1000)
    },
    scroll(pos){
      this.$emit('roll',pos)
    },
    backtop(){
      this.$refs.BScroll && this.$refs.BScroll.scrollTo(0,0,300)
    },
    refresh(){
      this.$refs.BScroll && this.$refs.BScroll.refresh()
    },
    afterUpload(){
      this.$refs.BScroll && this.$refs.BScroll.afterUpload(true)
    }
  }
}
</script>

<style scoped>
.scroll{
  height:calc(100vh - 93px);
}
</style>