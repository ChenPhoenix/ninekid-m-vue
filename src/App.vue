<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<transition  name="slide-right"></transition>-->
    <!--<transition name="slide-right" mode="out-in">-->
      <router-view v-if="isRouterAlive"></router-view>
    <!--</transition>-->

    <commons v-show="$route.meta.showCommons"></commons>
  </div>
</template>

<script>
  import commons from './components/commons'
export default {
  name: 'App',
    components:{commons},
    provide () {
        return {
            reload: this.reload
        }
    },
    data () {
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload () {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true
            })
        }
    }
}
</script>
<!--<style lang="scss" rel="stylesheet/scss" src="../static/navcss.scss"></style>-->
<style scoped="" type="text/css" lang="scss">
 #app{
   width:750px;
   margin:118px auto 0;
 }
</style>
