<template>
  <div>
    detail--{{id}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:''
    }
  },
  created(){
    console.log(this.$route.params)
    this.id = this.$route.params.iid
  }
}
</script>
<style lang='less' scoped>
</style>