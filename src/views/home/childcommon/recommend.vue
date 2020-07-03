<template>
  <div class="recommend flx">
    <div v-for="item in recommentd" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommentd:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  padding:10px 0 20px 0;
  font-size:14px;
  text-align: center;
  border-bottom:8px solid #f2f2f2;
}
img{
  width:80px;
  height:80px;
  margin-bottom: 5px;
}
</style>