<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/context/maintabbar/MainTabBar'

export default {
  components:{MainTabBar}
}
</script>

<style lang="less">
@import './assets/css/base.css';
</style>
