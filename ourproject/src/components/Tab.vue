<template>
    <div class="tab">
        <van-tabbar v-model="active" route active-color="#940000">
            <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:'index'
        }
    }
}
</script>
<style scoped>
.active{
    color: blue;
}
</style>