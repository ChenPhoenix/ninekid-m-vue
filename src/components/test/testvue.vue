<template>
    <div>
        测试页面
        {{this.$route.params.id}}
        <router-link to="testvue/test1">test1</router-link>
        <router-view  to="testvue/test2">test2</router-view>
    </div>
</template>

<script>
    import commons from '../commons'
    export default {
        name: "testvue",
        components:{commons},
        mounted(){
            // this.reload();

            //

            // this.axios.get('/text/bs/video.php',{
            //     params:{
            //         callback:'cb'
            //     },
            // }).then((res)=>{
            //     console.log(res);
            // })
        },
    }
</script>

<style scoped>

</style>