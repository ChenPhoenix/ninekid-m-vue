<template>
    <div class="about-box">
        <section class="sec-one">
            <p>
                九个小孩儿童自行车租赁项目是独角兽公司Ninebot内部孵化产生的项目，产品使用Ninebot-Kids Bike（产品获得2018年 德国 iF DESIGN AWARD奖项）作为主要用车，延用高端儿童运动自行车品牌的技术与形象外观，提供高品质、高安全、高性价比的儿童自行车租赁服务。九个小孩采用O2O线上配送与线下体验的方式，针对2-9岁年龄段儿童，以中长租儿童自行车为项目主要商业模式，提供给一、二线城市80/90后的母婴家庭用户，通过“儿童自行车共享”盘活闲置自行车，减少多次购买成本，解决母婴家庭中关于儿童自行车随年龄重复消费的问题
            </p>
            <div class="about-bg2">
                <img :src="'./static/img/about/about-bg2.png'" alt="">
            </div>
        </section>
        <section  class="sec-two">
            <div class="sec-two-title">
                <img :src="'./static/img/about/about-title.png'" alt="儿童自行车服务">
                <p>儿童自行车服务</p>
            </div>
            <p class="sec-teo-dec">
                九个小孩儿童自行车租赁项目，利用循环经济模式最大化激活儿童自行车残值使用。通过1年-7年长租模式解决儿童自行车所需问题。使用九个小孩儿童自行车租赁手机应用，用户可以在手机中进行商品下单，通过线下派送的方式为每个家庭提供自行车使用。
            </p>
            <div class="sec-two-title">
                <img :src="'./static/img/about/about-title.png'" alt="联系我们">
                <p>联系我们</p>
            </div>
            <div class="about-foot">
                <div class="about-foot1">
                    <img :src="'./static/img/about/about-foot_01.jpg'" alt="儿童自行车服务">
                </div>
                <div class="about-foot2">
                    <div><img :src="'./static/img/about/about-foot_02.jpg'" alt="九个小孩微信公众号"></div>
                    <div><img :src="'./static/img/about/about-foot_03.jpg'" alt="九个小孩微博公众号"></div>
                </div>
            </div>
        </section>
        <img class="about-bg-box" :src="'./static/img/about/about-bg.png'" alt="">
    </div>
</template>

<script>
    export default {
        name: "about",
    }
</script>
<style scoped="" type="text/css" lang="scss">
    .about-box{
        font-size:26px;
        width:100%;
        position: relative;
        .about-bg-box{
            position: absolute;
            top:0;
            left:0;
            width:100%;
        }
    }
    .sec-one{
        width:100%;
        box-sizing: border-box;
        p{
            background: #392775;
            color:#fff;
            padding:84px 136px 0;
        }
        .about-bg2{
            width:100%;
            background: #fff;
            img{
                width:100%;
            }

        }
    }
    .sec-two{
        width:100%;
        box-sizing: border-box;
        background: #fff;
        .sec-two-title{
            width:270px;
            position: relative;
            margin:0 auto 40px;
            img{
                width:100%;
            }
            p{
                position: absolute;
                top: 10px;
                margin: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
            }

        }
        .sec-teo-dec{
            background: #fff;
            color:#777;
            padding:0 136px;
            margin-bottom: 50px;
        }
        .about-foot{
            width:100%;
            .about-foot1{
                img{
                    width:100%;
                }
            }
            .about-foot2{
                display: flex;
                justify-content: center;
                div{
                    width:50%;
                    img{
                        width:100%;
                    }
                }

            }

        }
    }


</style>