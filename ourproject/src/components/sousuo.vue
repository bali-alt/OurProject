<template>
    <div class="sousuo">
        <div class="aaa" @click="searchClick">
            <van-icon name="search" />
            <span>搜索</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        searchClick(){
            this.$router.push({
                name:'search'
            })
        }
    }
}
</script>
<style scoped>
.sousuo{
    width: 100%;
    
    background-color:#ff9400; 
    height: 40px;
    text-align: center;
}
.aaa{
    background-color: #fff;
    width: 90%;
    margin-left: 5%;
    border-radius:5px;
    height: 30px;
    line-height: 30px
}
</style>