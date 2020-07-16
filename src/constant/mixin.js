import BackTop from 'components/context/backTop/BackTop'

export const BackTopMixin = {
  components:{BackTop},
  data(){
    return {
      isShowBacktop:false,
    }
  },
  methods:{
    //滚回顶部
    rollBackTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
  }
}