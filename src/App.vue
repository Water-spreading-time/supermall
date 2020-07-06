<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/context/maintabbar/MainTabBar'

  export default {
    components:{MainTabBar}
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
