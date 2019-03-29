<template>
    <div class="cooper-box">
        <section class="cooper-sec color1">
            <h1>我们是全球化的高端儿童自行车租赁服务平台</h1>
            <h2>教学场景助力:关注儿童身心健康成长</h2>
            <p>关注儿童教育事业发展，结合提高素质、提升身体，推动我国教育事业向更高质量发展。丰富儿童课外生活，引导少年儿童开阔眼界、学做结合，为儿童全面健康成长创造良好的社会环境。</p>
            <p>让在校儿童学得满意、玩得开心、过得充实，让少儿的家长放心。</p>
            <p>通过儿童滑步车与儿童自行车教学，丰富幼儿园教学课程，全面提高儿童4Q发育（智商、情商、逆商、健商）课程的进行，不仅让儿童学习到骑车的技巧，通过户外有氧运动，对儿童的自然生长发育有着无与伦比的功效，更好地激发他们身体机能。</p>
            <img :src="'./static/img/cooperation/cooperation2.png'" alt="">
            <img class="cooper-pos1" :src="'./static/img/cooperation/cooperation1_1.png'" alt="">
        </section>
        <section class="cooper-sec color2">
            <h1>我们是全球化的高端儿童自行车租赁服务平台</h1>
            <h2>教学初衷:释放儿童天性，丰富教学种类</h2>
            <p>通过腿部的运动，可以加速血液循环，刺激下肢骨的生长，有助于人体长高。充足的户外活动其实是儿童快乐成长的最好的教学</p>
            <p>骑滑步车除了简单的技巧外，还有助于培养孩子勇敢、自信、耐力、抗挫折力的品格，以及掌握团队和与人沟通协作的技巧</p>
            <!--<img :src="'./static/img/cooperation/cooperation3.jpg'" alt="">-->
            <img class="cooper-pos1" :src="'./static/img/cooperation/cooperation1_2.png'" alt="">
            <!--<img :src="'./static/img/cooperation/cooperation2-1.jpg'" alt="">-->
        </section>
        <section class="cooper-sec color2">
            <h1>我们是全球化的高端儿童自行车租赁服务平台</h1>
            <h2>赛事场景助力:打造亲子活动的解决方案</h2>
            <p>丰富儿童游戏模式，资源优化，提供内容多样化的别样盛宴</p>

            <p>解决户外场景同质化严重，游戏模式单一的难题，打造各自场景的特色赛事活动，提升其关注度与参与度。负责“亲子户外骑行活动”整体解决方案，亲子活动具备了提升家庭教育质量，健全幼儿心理素质的属性，通过有趣又好玩的幼儿游戏，提高亲子关系融洽度。</p>

            <p>推行健康快乐的儿童骑行文化：举办的丰富多彩的儿童自行车赛事，让孩子们在骑行中不但得到锻炼，还能感受到运动所带来的快乐。让他们享受骑行的成就感，从而更加喜欢户外运动。</p>
            <img :src="'./static/img/cooperation/cooperation3.jpg'" alt="">
            <img class="cooper-pos1" :src="'./static/img/cooperation/cooperation1_1.png'" alt="">
        </section>
        <section class="cooper-sec-box">
            <div class="cooper-sec">
                <div class="sec-img">
                    <img class="sec-img1" :src="'./static/img/cooperation/cooperation5.png'" alt="">
                    <img class="sec-img2" :src="'./static/img/cooperation/cooperation6.png'" alt="">
                </div>
                <ul class="sec-list-box">
                    <li class="sec-list">
                        <img src="http://www.ninekids.net/sites/all/themes/ninekids/ninekids/images/bg-coor-11.png" alt="">
                    </li>
                    <li class="sec-list">
                        <img src="http://www.ninekids.net/sites/all/themes/ninekids/ninekids/images/bg-coor-12.png" alt="">
                    </li>
                    <li class="sec-list">
                        <img src="http://www.ninekids.net/sites/all/themes/ninekids/ninekids/images/bg-coor-13.png" alt="">
                    </li>
                    <li class="sec-list">
                        <img src="http://www.ninekids.net/sites/all/themes/ninekids/ninekids/images/bg-coor-14.png" alt="">
                    </li>
                </ul>
            </div>
            <img class="cooper-sec-foot" :src="'./static/img/cooperation/cooperation4.png'" alt="">
            <img class="cooper-pos2" :src="'./static/img/cooperation/cooperation1_3.png'" alt="">
        </section>
        <div class="cooper-foot">

        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperation",
    }
</script>

<style scoped="" type="text/css" lang="scss">
    .cooper-box{
        line-height: 1.6;
        .cooper-sec{
            position: relative;
            .cooper-pos1{
                position:absolute;
                top:0;
                left:0;
                width: 100%;
                z-index:1;
            }
            h1{
                font-size:28px;
                text-align: center;
            }
            h2{
                font-size:24px;
                text-align: center;
                margin-bottom: 14px;
            }
            p{
                padding:0 150px;
                box-sizing: border-box;
                font-size:22px;
                text-indent: 2em;

            }
            img{
                width:100%;
            }

        }
        .cooper-sec-foot{
            width: 100%;
        }
        .color1{
            background: #161f46;
            h1,h2{
                color:#fff389;
            }
            p{
                color:#fff;
            }
        }
        .color2{
            background: #3772e4;
            h1,h2{
                color:#fff389;
            }
            p{
                color:#fff;
            }
        }
        .color3{
            background: #fff;
            h1,h2{
                color: #333
            }
            p{
                color:#898989;
            }
        }
        .cooper-sec-box{
            position: relative;
            .cooper-pos2{
                position:absolute;
                top:0;
                left:0;
                width: 100%;
                z-index:1;
            }
            .sec-img{
                position: relative;
                .sec-img1{
                    width:100%;
                    position: relative;
                    z-index: 2;
                }
                .sec-img2{
                    width:260px;
                    height: auto;
                    position:absolute;
                    top:-36px;
                    right:70px;
                    z-index:3;
                    transform:rotate(8deg);
                }
            }
            .sec-list-box{
                width:400px;
                height: 280px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                position: absolute;
                bottom: -78px;
                right: 88px;
                z-index: 11;
                .sec-list{
                    width:188px;
                    img{
                        width:100%;
                    }
                }
            }

        }
        .cooper-foot{
            width:100%;
            height: 80px;
            background: #EFEFEF;
        }
    }


</style>