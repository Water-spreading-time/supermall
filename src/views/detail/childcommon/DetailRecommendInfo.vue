<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <!-- <grid-view> -->
      <goods :goodsList="recommendList"></goods>
    <!-- </grid-view> -->
  </div>
</template>

<script>
import Goods from 'components/context/goods/Goods'

	export default {
		name: "DetailRecommendInfo",
    components: {
      Goods
    },
    props: {
		  recommendList: {
		    type: Array
      }
    },
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
