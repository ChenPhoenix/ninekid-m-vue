<template>
    <div  :class="[headActive]">
        <header class="header-box">
            <div class="menu-box">
                <img @click="menuHandle" class="menu-img"  :src="titleLeftImg" alt="菜单">
                <ul class="menu-list" :class="{menuActive:isMenuActive ,menuMouse:isMenuMouse}">
                    <li @click="menuHandle">
                        <img class="list-img" :src="'./static/img/commons/menu1.png'" alt="首页">
                        <p class="list-dec"><router-link :to="{path:'home',query:{nav:'首页'}}" >首页</router-link></p>
                    </li>
                    <li @click="menuHandle">
                        <img class="list-img" :src="'./static/img/commons/menu2.png'" alt="租车">
                        <p class="list-dec"><a href="http://m.ninekids.net/">租车</a></p>
                    </li>
                    <li @click="menuHandle">
                        <img class="list-img" :src="'./static/img/commons/menu3.png'" alt="新闻">
                        <p class="list-dec"><router-link :to="{path:'news',query:{nav:'新闻'}}">新闻</router-link></p>
                    </li>
                    <li @click="menuHandle">
                        <img class="list-img" :src="'./static/img/commons/menu4.png'" alt="关于">
                        <p class="list-dec"><router-link :to="{path:'about',query:{nav:'关于'}}">关于</router-link></p>
                    </li>
                    <li @click="menuHandle">
                        <img class="list-img" :src="'./static/img/commons/menu5.png'" alt="合作">
                        <p class="list-dec"><router-link :to="{path:'cooperation',query:{nav:'合作'}}">合作</router-link></p>
                    </li>
                </ul>
            </div>
            <p class="head-title">{{title}}</p>
            <div class="head-twocode">
                <img :src="titleRightImg" alt="二维码">
            </div>
        </header>
        <!--<footer class="footer-box">-->
            <!--<div class="footer-list" v-for="(item,index) in footerTitle" :key="index">-->
                <!--<router-link :to="item.linkUrl">{{item.title}}</router-link>-->
            <!--</div>-->
        <!--</footer>-->
    </div>
</template>

<script>
    export default {
        name: "commons",
        data:function () {
            return{
                title:this.$route.query.nav||'首页',
                headActive:'homeC',//头部切换不同颜色的类名
                footerTitle:[
                    {title:'关于',linkUrl:'about'},
                    {title:'新闻',linkUrl:'news'},
                    {title:'合作',linkUrl:'cooperation'},
                ],
                titleLeftImg:'./static/img/commons/menuBlack.png',
                titleRightImg:'./static/img/commons/twocodeBlack.png',
                isMenuActive:false,//菜单列表出现或者隐藏
                isMenuMouse:false,
            }
        },
        methods:{
            //菜单列表出现或者隐藏
            menuHandle(){
                this.isMenuActive=!this.isMenuActive;
            },
        },
        //复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                var that=this;
                if(to.query!=={}){
                    that.title=to.query.nav;
                }
                if(to.query.name==='home'){
                    that.title='首页';
                }
                var className=to.name;
                switch (className) {
                    case 'home':
                        that.headActive='homeC';
                        that.titleLeftImg='./static/img/commons/menuBlack.png';
                        that.titleRightImg='./static/img/commons/twocodeBlack.png';
                        break;
                    case 'news':
                        that.headActive='newsC';
                        that.titleLeftImg='./static/img/commons/menuBlack.png';
                        that.titleRightImg='./static/img/commons/twocodeBlack.png';
                        break;
                    case 'about':
                        that.headActive='aboutC';
                        that.titleLeftImg='./static/img/commons/menuWhite.png';
                        that.titleRightImg='./static/img/commons/twocodeWhite.png';
                        break;
                    case 'cooperation':
                        that.headActive='cooperC';
                        that.titleLeftImg='./static/img/commons/menuWhite.png';
                        that.titleRightImg='./static/img/commons/twocodeWhite.png';
                        break;
                }
            }
        },
        mounted(){
            //页面刷新时头部配置
            var that=this;
            var className=that.$route.name;
            switch (className) {
                case 'home':
                    that.headActive='homeC';
                    that.titleLeftImg='./static/img/commons/menuBlack.png';
                    that.titleRightImg='./static/img/commons/twocodeBlack.png';
                    break;
                case 'news':
                    that.headActive='newsC';
                    that.titleLeftImg='./static/img/commons/menuBlack.png';
                    that.titleRightImg='./static/img/commons/twocodeBlack.png';
                    break;
                case 'about':
                    that.headActive='aboutC';
                    that.titleLeftImg='./static/img/commons/menuWhite.png';
                    that.titleRightImg='./static/img/commons/twocodeWhite.png';
                    break;
                case 'cooperation':
                    that.headActive='cooperC';
                    that.titleLeftImg='./static/img/commons/menuWhite.png';
                    that.titleRightImg='./static/img/commons/twocodeWhite.png';
                    break;
            }
        },
    }
</script>

<style scoped="" type="text/css" lang="scss">
    .menuActive{
        display: block!important;
    }
    .homeC{
        .header-box{
            background: #fff;
        }
        .head-title{
            color:#595757;
        }
        .footer-box{
            background: #fff;
            color:#595757;
        }
    }
    .newsC{
        .header-box{
            background: #fff;
        }
        .head-title{
            color:#FE0D0D;
        }
        .footer-box{
            background: #fff;
            color:#FE0D0D;
        }

    }
    .cooperC{
        .header-box{
            background: #161F46;
        }

        .head-title{
            color:#FE3232;
        }
        .footer-box{
            background:  #161F46;
            color:#fff;
        }
    }
    .aboutC{
        .header-box{
            background: #392775;
        }
        .head-title{
            color:#FFF;
        }
        .footer-box{
            background:  #392775;
            color:#FE3232;
        }


    }
    .header-box{
        width:750px;
        height: 118px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        right: 0;
        margin:auto;
        .menu-box{
            position: relative;
            .menu-img{
                width:60px;
                height:auto ;
                margin-left:34px;
            }
        }
        .menu-list{
            display: none;
            position: absolute;
            width:236px;
            height: 306px;
            background: rgba(0,0,0,0.6);
            padding-left:30px;
            border-radius: 16px;
            font-size:32px;
            left:48px;
            top:80px;
            &:after{
                position: absolute;
                content: "";
                display:block;
                width:0;
                height:0;
                border-width:0 10px 16px;
                border-style:solid;
                border-color:transparent transparent rgba(0,0,0,0.6);/*透明 透明  黄*/
                top:-16px;
                left:20px;
                z-index:11;
            }
            li{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .list-img{
                    width: 50px;

                }
                .list-dec{
                    width:148px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    border-bottom: 0.013333rem solid rgba(255, 255, 255, 0.4);
                    a{
                        color:#fff;
                    }
                }

            }
        }
        .head-title{
            font-size:40px;
        }
        .head-twocode{
            img{
                width:60px;
                height:auto ;
                margin-right:34px;
            }
        }


    }
    .footer-box{
        width:100%;
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:22px;
        .footer-list{
            padding:0 30px;
        }
    }
</style>