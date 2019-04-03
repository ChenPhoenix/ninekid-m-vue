<template>
    <div class="newsListBox">
        <div  class="newsC">
            <header class="header-box">
                <div class="menu-box">
                    <img @click="goback"  class="menu-img"  :src="'./static/img/news/goback.png'" alt="菜单">
                </div>
                <p class="head-title">新闻</p>
                <div class="head-twocode">
                    <img :src="'./static/img/commons/twocodeBlack.png'" alt="二维码">
                </div>
            </header>
            <!--<footer class="footer-box">-->
            <!--<div class="footer-list" v-for="(item,index) in footerTitle" :key="index">-->
            <!--<router-link :to="item.linkUrl">{{item.title}}</router-link>-->
            <!--</div>-->
            <!--</footer>-->
        </div>
        <div class="new-box-img">
            <img src="http://www.ninekids.net/sites/default/files/sites/default/files/u1/bg-new-2.jpg" alt="新闻">
        </div>
        <section class="list-sec-box" v-html="context">

        </section>
    </div>
</template>

<script>
    export default {
        name: "news-list",
        data:function () {
            return{
                context:"",
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },

        },
        mounted(){


            //
            var that=this;
            // console.log(that.$route.query.list);
            // that.axios.get('/test/data/code/token/info')
            that.axios.get(process.env.API_HOST+'data/code/token/info')
            // this.axios.get('/data/code/token/info')
                .then((res) =>{
                    // console.log(res);
                    // token=res.data;
                    that.axios({
                        method:'post',
                        // url:'/test/index/Nine_Kids/details',
                        url:process.env.API_HOST+'index/Nine_Kids/details',
                        // url:process.env.API_HOST+'index/security_code/index',
                        headers:{
                            'authorization':res.data,
                        },
                        data:that.qs.stringify({
                            id:that.$route.query.list
                        })
                    }).then(function(res,reject){
                        // console.log(res.data)
                        that.context=res.data.body_value;
                    })
                }).catch(function (error) {
            });
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" src="../../static/navcss.scss"></style>
<style type="text/css">
    .newsListBox{
        background: url("../../static/img/news/news-bg.png");
        background-size:100%;
        background-repeat: repeat;
    }
    .newsListBox .new-box-img{
        width:600px;
        height:254px;
        margin:auto;
        padding:40px 0;
    }
    .newsListBox .new-box-img img{
        width:100%;
    }
    .list-sec-box{
        padding:0 80px;
        overflow: hidden;

    }
    .list-sec-box img{
        width: 100%!important;
        height: auto!important;
    }
    .list-sec-box p{
        color:#777;
        text-indent: 2em;
        line-height: 1.6;
    }


</style>