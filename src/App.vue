<template>
  <div id="app">
    <!-- <div class="tabs">
      <ul>
        <router-link :to="{name:'Home'}" tag="li">
            <div><img src="/assets/logo.png" alt=""></div>
            <div>首页</div>
        </router-link>
        <router-link :to="{name:'Explorer'}" tag="li">
            <div><img src="/assets/logo.png" alt=""></div>
            <div>首页</div>
        </router-link>
        <router-link :to="{name:'Cart'}" tag="li">
            <div><img src="/assets/logo.png" alt=""></div>
            <div>首页</div>
        </router-link>
        <router-link :to="{name:'Me'}" tag="li">
            <div><img src="/assets/logo.png" alt=""></div>
            <div>首页</div>
        </router-link>
        <div class="content">
          <router-view></router-view>
        </div>
      </ul>
    </div> -->
    <tabs></tabs>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tabs from "./components/tabs.vue"
  import "./assets/less/site.less"
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
