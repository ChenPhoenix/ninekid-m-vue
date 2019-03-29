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
            <img :src="context.commonImg" alt="新闻">
        </div>
        <section class="list-sec-box" v-html="context.details">

        </section>
    </div>
</template>

<script>
    export default {
        name: "news-list",
        data:function () {
            return{
                context:{
                    id:'',//新闻唯一标志
                    title:'',//标题
                    brief:'',//简要
                    newsImg:'',//新闻图片链接
                    commonImg:'',//顶部图片（每条新闻顶部都有）
                    details:'',
                },
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },

        },
        mounted(){


            //
            console.log(this.$route.query.list);
            this.context= {
                id:'2',//新闻唯一标志
                title:'九个小孩儿童自行车租赁，儿童玩具消费模式下的新选择',//标题
                brief:'<p>租车、租服装、租电子设备，在租赁经济盛行的当下，儿童市场租赁模式也在悄然登场，租玩具、租婴儿车、租儿童自行车等项目正在一步步进入家长及儿童的日常生活当中。</p>',//简要
                newsImg:'http://www.ninekids.net/sites/default/files/44_0.jpg',//新闻图片链接
                commonImg:'http://www.ninekids.net/sites/default/files/sites/default/files/u1/bg-new-2.jpg',//顶部图片（每条新闻顶部都有）
                details:'<p>在暑假来临之际，不少家长都在琢磨如何带着孩子度过一个有意义的暑期，这也促使“儿童经济”再次升温，围绕着儿童用品、儿童玩具、儿童阅读、亲子娱乐、亲子教育、亲子出行等众多儿童消费类型踏上了创新的步伐。据记者了解到，早在2018年初，由小米生态链企业之一的纳恩博科技有限公司就有了布局儿童经济市场的打算，创建了九个小孩儿童自行车租赁业务，预计在8月中旬正式上线儿童自行车租赁业务，曾经制造生产了小米“九号平衡车”如今又要开始计划儿童外出场景。中国目前有超过3亿儿童，随着二胎政策出台，儿童经济的市场发展势必会加速，同时，儿童自行车租赁业仍属于市场空白期，那么九个小孩的儿童自行车租赁如何做，才能解决用户的需求呢？</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p>首先，九个小孩产品将继续使用纳恩博自主研发的Ninebot-Kids Bike儿童自行车（产品获得2018年德国iF DESIGN AWARD奖项），沿用高端儿童运动自行车品牌的技术与形象外观，保障了儿童自行车美观性与安全性，满足了母婴家庭对高品质的儿童车需求。</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p><img alt="" src="http://www.ninekids.net/sites/default/files/55.jpg" style="height:1280px; width:1920px" /></p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p>同时，九个小孩儿童自行车租赁服务选择长租模式，年租金166元/年,（调查儿童自行车同品质儿童自行车购买成本在800元左右），3年租金在299元，相当于为每个家庭节约了超过50%的使用成本。同时，九个小孩儿童自行车租赁有699元/7年成长包，相当于0.27元/日，为儿童在2岁-9岁自然发育中提供3款儿童自行车进行迭代，分别为12寸、14寸、18寸，相当于一键解决了儿童在发育期间的所有用车需求，3款儿童自行车平均市场合计近3000元，这将近节省了70%以上的使用成本。</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p>最后，九个小孩选择了线上租赁线下配送的O2O模式，告别了共享单车所见既所得的重资产需求，用户在九个小孩小程序或者APP客户端就能进行租赁，选择退租和更换车辆也是在线上完成。据悉，在2019年，九个小孩将在APP客户端中增加儿童社交与AR技术，从而鼓励儿童愿意骑车走出家门，与更多小朋友进行真实交流与沟通，通过进行场景任务增加外出意愿。</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p>记者采访九个小孩创始人孙艳群了解到，九个小孩重在解决用户三大痛点：</p>\n' +
                    '\n' +
                    '<p><strong><strong>痛点一</strong></strong><strong><strong>：儿童生长发育快，儿童自行车迭代需求高</strong></strong></p>\n' +
                    '\n' +
                    '<p>儿童在2岁到9岁期间，身高增长会快，一般情况下， 家长为孩子发育着想，避免出现大孩子骑小车，影响骨骼成长，至少要购买3次儿童自行车。基于这个原因，九个小孩将租赁产品分别设计为12寸滑步车、14寸儿童自行车及18寸儿童自行车，适合2-9岁年龄段成长所需。12寸滑步车主要面向于2-4岁的儿童，锻炼核心平衡，提高身体协调性。14寸儿童自行车针对于<strong><strong>4-6岁</strong></strong>孩子进行训练学习儿童自行车，提高平衡能力。18寸儿童自行车适用于<strong><strong>6-9岁</strong></strong>的孩子进行自行车初体验，整体设计风格也接近于山地车造型。儿童自行车租赁按照年龄段精选出3款尺寸的车辆，家长可以通过平台确定自己应该给孩子提供什么尺寸的自行车进行租赁，这将不需家长再为儿童自行车迭代而操心了。</p>\n' +
                    '\n' +
                    '<p><strong><strong>痛点二</strong></strong><strong><strong>：</strong></strong><strong><strong>高品质儿童自行车成本高</strong></strong><strong><strong>，</strong></strong><strong><strong>性价比低</strong></strong></p>\n' +
                    '\n' +
                    '<p>九个小孩沿用高端儿童自行车品牌Ninebot-Kids Bike儿童自行车的技术与外观，国内市场同品质类型产品3款儿童自行车购买下来要在2500元以上，海外儿童自行车更是要超过5000元，不过，一款儿童自行车最多使用3年左右的时间就会发现孩子骑行过程中尺寸略小需要更换。换言说，在9岁以前每个家庭需要会存在3次左右的购买需求，然而，儿童自行车的平均使用率却比较低，但是家长为了孩子身体安全及发育考虑，家长一般都会选择购买高品质儿童自行车，而非便宜或者劣质儿童自行车，这样导致了自行车性价比不高。然后，租赁高端儿童自行车恰恰解决了这个问题，让家长选择高品质儿童自行车的同时，避免了许多不必要消费，家长可以为自己的孩子年年换新车。</p>\n' +
                    '\n' +
                    '<p><strong><strong>痛点三</strong></strong><strong><strong>：儿童自行车使用后，残值高价值低</strong></strong></p>\n' +
                    '\n' +
                    '<p>每个有过育儿经的家长仔细思考后都不难发现，儿童自行车的使用率不高，并且，因为孩子长高而自行车需要更换的时候，自行车基本上会保持7成新的状态，但是，这个时候儿童自行车放在类似于转转、闲鱼等二手平台上进行售卖，远远低于其实际价值，选择送给朋友或者放在家里却又占据了家里的空间。如果，选择租赁儿童自行车，当使用期结束后，直接让快递上门进行收件就解决了闲置自行车处理的问题，并且，租赁价格远远低于购买成本，既能保持孩子在需要儿童自行车的需求，又能提升本身残值利用。</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>\n' +
                    '\n' +
                    '<p>值得一提是，在解决这些痛点后，九个小孩将通过儿童自行车为载体，承载儿童户外运动与儿童社交的功能，不仅仅解决儿童自行车使用问题，还要通过内容与服务进行整合，为儿童身心健康发展提供解决方案</p>\n' +
                    '\n' +
                    '<p>&nbsp;</p>',//详情
            };
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