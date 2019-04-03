<template>
    <div class="news-box">
        <div class="new-box-img">
            <img src="http://www.ninekids.net/sites/default/files/sites/default/files/u1/bg-new-2.jpg" alt="新闻">
        </div>
        <ul class="new-list-box">
            <!--<li class="new-list" v-for="(item,index) in newsList">-->
                <router-link class="new-list" :to="{ path: 'newslist', query: { list:item.id}}" tag="li" v-for="(item,index) in newsList" :key="index">
                    <div class="list-img">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="list-context">
                        <h2>{{item.title}}</h2>
                        <div v-html="item.subheading"></div>
                    </div>
                </router-link>

            <!--</li>-->

            <!--<li class="new-list">-->
                <!--<div class="list-img">-->
                    <!--<img src="http://www.ninekids.net/sites/default/files/11_2.jpg" alt="">-->
                <!--</div>-->
                <!--<div class="list-context">-->
                    <!--<h2>九个小孩儿童自行车租赁平台一键解决儿童自行车使用需求</h2>-->
                    <!--<P>九个小孩以儿童自行车租赁为主要服务项目，采用O2O线上配送与线下体验的方式，针对于12岁以下儿童提供自行车中长租的消费服务体验。主打不合适，随时换，不需要，随时退的服务理念，提供给一、二线城市的80/90后母婴家庭儿童自行车消费新模式。</P>-->
                <!--</div>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    var token='';
    export default {
        name: "news",
        data:function(){
            return{
                token:null,
                newsList:[{
                    id:'',//新闻唯一标志
                    title:'',//标题
                    subheading:'',//简要
                    image:'',//新闻图片链接
                }],//新闻列表
            }
        },
        mounted(){

            //获取token
            var that=this;
            // that.axios.get('/test/data/code/token/info')
            that.axios.get( process.env.API_HOST+'data/code/token/info')
                .then((res) =>{
                    that.axios({
                        method:'get',
                        // url:'/test/index/Nine_Kids/index',
                        url:process.env.API_HOST+'index/Nine_Kids/index',
                        headers:{
                            'authorization':res.data,
                        },
                    }).then(function(res,reject){
                        //将对象转化成数组对象，并进行倒序排序
                        that.newsList=Object.values(res.data).reverse();
                    })
                }).catch(function (error) {
            });

            // this.axios.get('/bpi/sug?code=utf-8',{
            //     params:{
            //         q:'卫衣',
            //         callback:'cb'
            //     },
            // }).then((res)=>{
            //     console.log(res);
            // })
        },

    }
</script>

<!--<style scoped="" type="text/css" lang="scss">-->
<style type="text/css">
    .news-box{
        background: url("../../static/img/news/news-bg.png");
        background-size:100%;
        background-repeat: repeat;
    }
    .news-box .new-box-img{
        width:600px;
        height:254px;
        margin:auto;
        padding:40px 0;
    }
    .news-box .new-box-img img{
        width:100%;
    }
    .new-list-box{

    }
    .new-list-box .new-list{
        display: flex;
        justify-content: center;
        /*align-items: flex-end;*/
        align-items: center;
        margin-bottom: 50px;
        overflow: hidden;
    }
    .new-list-box .new-list .list-img{
        width:266px;
        height: 174px;
        margin-right: 34px;
    }
    .new-list-box .new-list .list-img img{
        width:100%;
    }
    .new-list-box .new-list .list-context{
        width:338px;
    }
    .new-list-box .new-list .list-context h2{
        font-size:30px;
        color:#fe0d0d;
    }
    .new-list-box .new-list .list-context p{
        color:#898989;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;

    }

</style>