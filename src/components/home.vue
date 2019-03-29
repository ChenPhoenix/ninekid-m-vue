<template>
    <div class="home-box">
        <h1 class="home-title">九个小孩儿童自行车租赁服务平台</h1>
        <img class="img-home" :src="'./static/img/home/home1.png'" alt="我的自行车会长大">
        <img class="img-home" :src="'./static/img/home/home2.png'" alt="九个小孩儿童自行车租赁服务平台">
        <h4 class="home-title1">一键租车，童年无忧</h4>
        <p class="home-dec"> 关注儿童成长的儿童自行车租赁服务平台 </p>
        <img class="img-home" :src="'./static/img/home/home3.png'" alt="儿童自行车租赁">
        <ul class="home-ul">
            <li class="home-li">
                <img class="home-li-img" :src="'./static/img/home/home4.png'" alt="选择车型">
                <p class="home-li-title">选择车型</p>
            </li>
            <li class="home-li">
                <img class="home-li-img" :src="'./static/img/home/home5.png'" alt="支付押金/租金">
                <p class="home-li-title">支付押金/租金</p>
            </li>
            <li class="home-li">
                <img class="home-li-img" :src="'./static/img/home/home6.png'" alt="快递到家">
                <p class="home-li-title">快递到家</p>
            </li>
            <li class="home-li">
                <img class="home-li-img" :src="'./static/img/home/home7.png'" alt="到期还车">
                <p class="home-li-title">到期还车</p>
            </li>
            <li class="home-li">
                <img class="home-li-img" :src="'./static/img/home/home8.png'" alt="押金退还">
                <p class="home-li-title">押金退还</p>
            </li>
        </ul>
        <section class="home-sec">
            <h1 class="sec-title">国内首家互联网 <br>儿童自行车租赁项目 </h1>
            <p class="sec-dec">
                产品使用Ninebot-Kids Bike（产品获得2018年 德国 iF DESIGN AWARD奖项）作为主要用车，延用高端儿童运动自行车品牌技术与服务体验，提供高品质、高安全、高性价比的儿童自行车租赁服务，并提供12寸滑步车、14、18寸儿童自行车三种车型，满足孩子不同成长阶段。
            </p>
            <ul class="sec-ul-title">
                <li class="sec-list-title" v-for="(item,index) in secList" @click="checkHandel(index)" :class="{secActive:index===checkIndex}">
                    {{item.title}}
                </li>
            </ul>
            <ul class="sec-ul-img">
                <li class="sec-li-img" v-for="(item,index) in secList"  v-show="index===checkIndex" >
                    <img  class="sec-img" :src="item.imgUrl" :alt="item.title">
                    <p  class="sec-dec">
                        {{item.context}}
                    </p>
                </li>
            </ul>

            <button type="button" class="sec-btn">马上租车</button>
        </section>
    </div>
</template>

<script>
    export default {
        name: "home",
        data:function () {
            return{

                secList:[
                    {imgUrl:'./static/img/home/home12.png',title:'12寸滑步车',context:'非常适合2岁到4岁的孩子，完全靠儿童用脚自行滑行前进，提供孩子一个肢体肌肉发展的机会。可促进前庭系统发育，锻炼核心平衡力，提高身体协调性。'},
                    {imgUrl:'./static/img/home/home14.png',title:'14寸儿童自行车',context:'针对于3-7岁孩子进行练习自行车，锻炼平衡力最合适的首选儿童自行车。在团队活动中，相约骑行玩乐，增强孩子的社交能力。'},
                    {imgUrl:'./static/img/home/home18.png',title:'18寸儿童自行车',context:'适用于7-12岁的孩子进行自行车初体验，能培养孩子自信心、胆量以及独立精神，特别是在独自骑行中锻炼孩子的专注力，增强心理素质。'},
                ],
                checkIndex:0,
            }
        },
        methods:{
            checkHandel(index){
                this.checkIndex=index;
            },
        },
    }
</script>
<style scoped="" type="text/css" lang="scss">
    .home-box{
        background: #fff;
        font-size:26px;
        .home-title{
            font-size:24px;
            color:#898989;
            text-align: center;
            margin-bottom: 10px;
        }
        .img-home{
            width:100%;
            height: auto;
        }
        .home-title1{
            font-size:36px;
            color:#898989;
            text-align: center;
            margin-top:28px;

        }
        .home-dec{
            font-size:26px;
            color:#898989;
            text-align: center;
            margin-top:12px;
            margin-bottom: 12px;
        }
    }
    .home-ul{
        width:100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .home-li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 6px;
            .home-li-img{
                width:auto;
                height: 48px;
                margin-top:8px;
                margin-bottom: 10px;
            }
            .home-li-title{
                color:#fff;
                font-weight: 600;
                background: #e83b34;
                padding:0 10px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                box-sizing: border-box;
                border-radius: 20px;
                font-size:20px;
            }
        }
    }

    .home-sec{
        .sec-title{
            color:#595757;
            font-size: 36px;
            text-align: center;
            margin-top:30px;
            margin-bottom: 26px;
        }
        .sec-dec{
            padding:0 82px;
            color:#818180;
            font-size:26px;
            margin-top:20px;
        }
        .sec-ul-title{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top:26px;
            margin-bottom: 20px;
            .sec-list-title{
                width:202px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                margin:0 8px;
                border:2px solid #DB3A16;
                border-radius: 20px;
                font-size:20px;
                color:#DB3A16;
            }
            .secActive{
                background: #DB3A16;
                color:#fff;
            }
        }

        .sec-ul-img{
            width:100%;
            height: auto;
            .sec-li-img img{
                width:100%;
                height: auto;
            }
        }
        .sec-btn{
            width:600px;
            height: 76px;
            text-align: center;
            line-height: 76px;
            color:#fff;
            background: #D1142B;
            font-weight: 600;
            font-size:38px;
            outline: none;
            border:0;
            border-radius: 36px;
            display: block;
            letter-spacing: 2px;
            margin:50px auto;
        }


    }



</style>