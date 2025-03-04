<template>
    <div class="menu">
        <div class="div">首页
            <img src="@/assets/icon_tab_home.png" alt="" style="width: 25px;height: 25px;position: absolute;top: -25px;left: 50%;right: 50%;transform: translate(-50%, -5%);">
        </div>
        <div class="div" style="">拓展
            <img src="@/assets/icon_tab_explore.png" alt="" style="width: 25px;height: 25px;position: absolute;top: -25px;left: 50%;right: 50%;transform: translate(-50%, -5%);">
        </div>
        <div class="div" style="">我的
            <img src="@/assets/icon_tab_profile.png" alt="" style="width: 25px;height: 25px;position: absolute;top: -25px;left: 50%;right: 50%;transform: translate(-50%, -5%);">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomMenu',
    props: {
// 可选的 props
    }
}
</script>

<style scoped>
.menu {
    width: 100%;
    height: 60px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06); /* 卡片阴影 */

}
.div{
    margin-top: 28px;
    display: inline-block;
    width: 33%;
    height: 50px;
    color: rgba(55, 74, 112, 0.40);
    text-align: center;
    font-family: "Yuan SC-Regular";
    position: relative;
}
</style>
