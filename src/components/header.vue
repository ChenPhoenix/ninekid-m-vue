<template>
    <div  :class="{homeC: ishomeC,newsC: isnewsC,cooperC:iscooperC,aboutC:isaboutC}">
        <header class="header-box">
            <div class="menu-box">
                <img @click="menuHandle" class="menu-img"  :src="titleLeftImg" alt="菜单">
                <ul class="menu-list" :class="{menuActive:isMenuActive ,menuMouse:isMenuMouse}">
                    <li @click="homeChange" >
                        <img class="list-img" :src="'./static/img/commons/menu1.png'" alt="首页">
                        <p class="list-dec"><router-link :to="{path:'home',query:{nav:'首页'}}" >首页</router-link></p>
                    </li>
                    <li>
                        <img class="list-img" :src="'./static/img/commons/menu2.png'" alt="租车">
                        <p class="list-dec"><a href="http://m.ninekids.net/">租车</a></p>
                    </li>
                    <li @click="newsChange">
                        <img class="list-img" :src="'./static/img/commons/menu3.png'" alt="新闻">
                        <p class="list-dec"><router-link :to="{path:'news',query:{nav:'新闻'}}">新闻</router-link></p>
                    </li>
                    <li @click="aboutChange">
                        <img class="list-img" :src="'./static/img/commons/menu4.png'" alt="关于">
                        <p class="list-dec"><router-link :to="{path:'about',query:{nav:'关于'}}">关于</router-link></p>
                    </li>
                    <li @click="cooperChange">
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
                // title:localStorage.getItem('headTitle') ||'首页',
                title:this.utils.getUrlKey('nav')||'首页',
                // title:'首页',
                footerTitle:[
                    {title:'关于',linkUrl:'about'},
                    {title:'新闻',linkUrl:'news'},
                    {title:'合作',linkUrl:'cooperation'},
                ],
                titleLeftImg:'./static/img/commons/menuBlack.png'||localStorage.getItem('titleLeftImg'),
                titleRightImg:'./static/img/commons/twocodeBlack.png'||localStorage.getItem('titleRightImg') ,
                ishomeC:0 || parseInt(localStorage.getItem('ishomeC')),
                isnewsC:0 || parseInt(localStorage.getItem('isnewsC')),
                iscooperC:0 || parseInt(localStorage.getItem('iscooperC')),
                isaboutC:0 || parseInt(localStorage.getItem('isaboutC')),
                isMenuActive:false,//菜单列表出现或者隐藏
                isMenuMouse:false,
            }
        },
        methods:{
            //菜单列表出现或者隐藏
            menuHandle(){
                this.isMenuActive=!this.isMenuActive;
            },
            //改变颜色
            homeChange(){
                this.title='首页';
                // this.title=this.$route.query.nav;
                // localStorage.setItem('headTitle', '首页');
                localStorage.setItem('titleLeftImg', './static/img/commons/menuBlack.png');
                localStorage.setItem('titleRightImg', './static/img/commons/twocodeBlack.png');
                localStorage.setItem('ishomeC', 1);
                localStorage.setItem('isnewsC', 0);
                localStorage.setItem('iscooperC', 0);
                localStorage.setItem('isaboutC', 0);
                this.titleLeftImg='./static/img/commons/menuBlack.png';
                this.titleRightImg='./static/img/commons/twocodeBlack.png';
                this.footerTitle=[{title:'关于',linkUrl:'about'},{title:'新闻',linkUrl:'news'},{title:'合作',linkUrl:'cooperation'}];
                this.ishomeC=true;
                this.isnewsC=false;
                this.iscooperC=false;
                this.isaboutC=false;
                this.isMenuActive=false;//菜单消失
            },
            newsChange(){
                this.title='新闻';
                // this.title=this.$route.query.nav;
                // localStorage.setItem('headTitle', '新闻');
                localStorage.setItem('titleLeftImg', './static/img/commons/menuBlack.png');
                localStorage.setItem('titleRightImg', './static/img/commons/twocodeBlack.png');
                localStorage.setItem('ishomeC', 0);
                localStorage.setItem('isnewsC', 1);
                localStorage.setItem('iscooperC',0);
                localStorage.setItem('isaboutC', 0);
                this.titleLeftImg='./static/img/commons/menuBlack.png';
                this.titleRightImg='./static/img/commons/twocodeBlack.png';

                this.footerTitle=[{title:'首页',linkUrl:'/'},{title:'关于',linkUrl:'about'},{title:'合作',linkUrl:'cooperation'}];
                this.ishomeC=false;
                this.isnewsC=true;
                this.iscooperC=false;
                this.isaboutC=false;
                this.isMenuActive=false;//菜单消失
            },
            cooperChange(){
                this.title='合作';
                // this.title=this.$route.query.nav;
                // localStorage.setItem('headTitle', '合作');
                localStorage.setItem('titleLeftImg', './static/img/commons/menuWhite.png');
                localStorage.setItem('titleRightImg', './static/img/commons/twocodeWhite.png');
                localStorage.setItem('ishomeC',0 );
                localStorage.setItem('isnewsC', 0);
                localStorage.setItem('iscooperC', 1);
                localStorage.setItem('isaboutC', 0);
                this.titleLeftImg='./static/img/commons/menuWhite.png';
                this.titleRightImg='./static/img/commons/twocodeWhite.png';
                this.footerTitle=[{title:'首页',linkUrl:'/'},{title:'关于',linkUrl:'about'},{title:'新闻',linkUrl:'news'}];
                this.ishomeC=false;
                this.isnewsC=false;
                this.iscooperC=true;
                this.isaboutC=false;
                this.isMenuActive=false;//菜单消失
            },
            aboutChange(){
                this.title='关于';
                // this.title=this.$route.query.nav;
                // localStorage.setItem('headTitle', '关于');
                localStorage.setItem('titleLeftImg', './static/img/commons/menuWhite.png');
                localStorage.setItem('titleRightImg', './static/img/commons/twocodeWhite.png');
                localStorage.setItem('ishomeC', 0);
                localStorage.setItem('isnewsC', 0);
                localStorage.setItem('iscooperC', 0);
                localStorage.setItem('isaboutC', 1);
                this.titleLeftImg='./static/img/commons/menuWhite.png';
                this.titleRightImg='./static/img/commons/twocodeWhite.png';
                this.footerTitle=[{title:'首页',linkUrl:'/'},{title:'合作',linkUrl:'cooperation'},{title:'新闻',linkUrl:'news'}];
                this.ishomeC=false;
                this.isnewsC=false;
                this.iscooperC=false;
                this.isaboutC=true;
                this.isMenuActive=false;//菜单消失
            },
        },
        mounted(){
            // console.log(this.$route.query.nav);
            // console.log(this.utils.getUrlKey('nav'));
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