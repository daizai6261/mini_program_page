<template>
    <div class="big">
        <div class="box1">
            <img src="@/assets/bg_home.png">
            <el-card class="box-card">
                <div style="width: 100%;border-top-left-radius: 12px;border-top-right-radius: 12px;display: block;height: 40px;background-color: rgba(247, 247, 249, 1);position: relative">
                    <div style="height: 40px;width: 35px;border-top-right-radius: 12px;display: inline-block;background-color: transparent;text-align: center;position: relative;right: -100%;transform: translate(-100%, -5%)">
                        <img src="@/assets/icon_add.png" alt="" style="height: 25px;width: 25px;margin-top: 10px">
                    </div>
                    <div style="height: 40px;width: 20%;border-top-left-radius: 12px;display: inline-block;background-color: white;text-align: center;vertical-align:top;left: 0px;top:0px;position: absolute">
                        <div style="color: rgba(108, 214, 122, 1);font-family: 'Yuan SC-Regular';margin-top: 10px;width: 100%;text-align: center">英语</div>
                        <div style="text-align: center;width: 100%;height: 3px;bottom: 0;position: absolute">
                            <div style="background-color: rgba(108, 214, 122, 1);width: 35%;height: 2px;margin: auto; "></div>
                        </div>
                        <div style="background-color: rgba(55, 74, 112, 0.1);height: 20px;width: 1px;position: absolute;right: 1px;top: 10px"></div>
                    </div>
                    <div style="height: 40px;width: 20%;display: inline-block;background-color: white;text-align: center;vertical-align:top;left: 20%;top:0px;position: absolute">
                        <div style="color: rgba(55, 74, 112, 0.60);font-family: 'Yuan SC-Regular';margin-top: 10px;width: 100%;text-align: center">数学</div>
                        <div style="text-align: center;width: 100%;height: 3px;bottom: 0;position: absolute">
                            <div style="background-color: rgba(55, 74, 112, 0.60);width: 35%;height: 2px;margin: auto; "></div>
                        </div>
                        <div style="background-color: rgba(55, 74, 112, 0.1);height: 20px;width: 1px;position: absolute;right: 1px;top: 10px"></div>
                    </div>
                </div>
                <div style="width: 100%;display: block;height: 100px;">
                    <div style="width: 20%;margin-left: 3%;height: 100px;display:inline-block;margin-top: 5px;margin-right: 6%;vertical-align:top;text-align: center">
                        <img src="../../assets/book_test.png" style="height: 90px;width: 70px;margin-top: 5px">
                    </div>
                    <div style="width: 68%;margin-right: 3%;height: 100px;display:inline-block;margin-top: 5px;vertical-align:top">
                        <div style="font-family: 'Yuan SC-Regular';font-weight: bold;color: rgba(55, 74, 112, 1);display: block;height: 20px;width: 80%;margin-bottom: 10px;margin-top: 10px">新版PEP七年级下册英语</div>
                        <div style="font-family: 'Yuan SC-Regular';color: rgba(55, 74, 112, 0.50);display: block;height: 20px;width: 100%;position: relative;margin-bottom: 10px" class="icon_down">人教版
                            <img src="@/assets/icon_chevron-down.png">
                            <img src="@/assets/btn_transfer.png" style="position: absolute;right: 5%;width: 80px;height: 25px">
                        </div>
                        <div style="display: inline-block;height: 20px;font-family: 'Yuan SC-Regular';font-weight: bold;color: rgba(108, 214, 122, 1);margin-bottom: 10px">
                            24
                        </div>
                        <div style="display: inline-block;width: 30%;height: 20px;font-family: 'Yuan SC-Regular';color: rgba(55, 74, 112, 0.50);margin-bottom: 10px">个单元</div>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="box2">
            <div class="label">
                课前预习
            </div>
            <div style="width: 96%;padding-right:2%;padding-left:2%;display: block;height: 80px">
                <el-card class="card1" style="background-color: rgba(201, 237, 161, 0.12);margin-left: 5%">
                    <div style="top: 20px;left: 10%;width: 60%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        单元导学
                    </div>
                    <img src="@/assets/icon_English_click.png">
                </el-card>
                <el-card class="card1" style="background-color: rgba(102, 145, 255, 0.12);margin-left: 4%;margin-right: 5%">
                    <div style="top: 20px;left: 10%;width: 60%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        要点提示
                    </div>
                    <img src="@/assets/icon_English_Yaodian.png">
                </el-card>
            </div>
        </div>
        <div class="box3">
            <div class="label">
                课堂学习
            </div>
            <div style="width: 96%;padding-right:2%;padding-left:2%;display: block;height: 100px;margin-bottom: 15px">
                <el-card class="card2" style="background-color: rgba(123, 236, 141, 0.12);margin-left: 5%">
                    <div style="top: 18px;width: 100%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);text-align: center;font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        课文点读
                    </div>
                    <img src="@/assets/icon_English_spell.png">
                </el-card>
                <el-card class="card2" style="background-color: rgba(250, 124, 42, 0.12);margin-left: 3%">
                    <div style="top: 18px;width: 100%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);text-align: center;;font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        全文点读
                    </div>
                    <img src="@/assets/icon_English_test.png">
                </el-card>
                <el-card class="card2" style="background-color: rgba(238, 154, 58, 0.12);margin-left: 3%;margin-right: 5%">
                    <div style="top: 18px;width: 100%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);text-align: center;font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        单词巧记
                    </div>
                    <img src="@/assets/icon_English_word.png">
                </el-card>
            </div>
            <div style="width: 96%;padding-right:2%;padding-left:2%;display: block;height: 100px">
                <el-card class="card1" style="background-color: rgba(201, 237, 161, 0.12);margin-left: 5%;margin-right: 4%">
                    <div style="top: 20px;left: 10%;width: 60%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        课文讲解
                    </div>
                    <img src="@/assets/icon_English_say.png">
                </el-card>
                <el-card class="card1" style="background-color: rgba(102, 145, 255, 0.12);margin-right: 5%">
                    <div style="top: 20px;left: 10%;width: 60%;display: inline;position: absolute;color: rgba(55, 74, 112, 1);font-weight:bold;font-family: 'Yuan SC-Regular',sans-serif;">
                        视频课程
                    </div>
                    <img src="@/assets/icon_English_video.png">
                </el-card>
            </div>
        </div>
        <div style="width: 100%;height: 55px;position: fixed;bottom: 0">
            <BottomMenu />
        </div>
    </div>
</template>

<script>
import BottomMenu from '@/components/BottomMenu.vue'

export default {
    name: 'App',
    components: {
        BottomMenu
    },
    data() {
        return {
            screenWidth: 0,
            screenHeight: 0,
        };
    },
    mounted() {
        // 获取初始分辨率
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        // 监听窗口大小变化
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            // 更新分辨率
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        },
    },
    beforeDestroy() {
        // 移除监听器
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style scoped>
@import '@/assets/font/font.css';

.big {
    width: 100%;
    background-color: rgba(248, 248, 248, 1);
    display: inline-block;
    min-height: 1000px
}

.box1 {
    width: 100%;
    height: 200px;
    display: block;
    position: relative;
}

.box1 img{
    width: 100%;
    height: 200px;
    display: inline-block;
    padding-bottom: 30px;
}

.box2 {
    width: 100%;
    height: 130px;
    background-color: transparent;
}

.box3 {
    width: 100%;
    height: 200px;
    background-color: transparent;
}

.box-card {
    width: 90%;
    height: 150px;
    background:rgba(255, 255, 255, 1);
    display: inline-block;
    position: absolute;
    top: 50%; /* 卡片顶部距离父容器顶部 50% */
    left: 50%; /* 卡片左侧距离父容器左侧 50% */
    transform: translate(-50%, -50%); /* 通过 transform 居中 */
    border-radius: 12px; /* 卡片圆角 */
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06); /* 卡片阴影 */
}

.label{
    color: rgba(55, 74, 112, 1);
    padding-left: 5%;
    padding-right: 5%;
    display: block;
    height: 15px;
    width: 90%;
    padding-bottom: 30px;
    font-family: "Yuan SC-Regular",sans-serif;
}
.card1{
    width: 43%;
    height: 60px;
    display: inline-block;
    border-radius: 12px; /* 卡片圆角 */
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); /* 阴影 */
}

.card1 img{
    top: 12px;
    right: 10%;
    width: 35px;
    height: 35px;
    display: inline;
    position: absolute;
}

.card2{
    width: 28%;
    height: 100px;
    display: inline-block;
    border-radius: 12px; /* 卡片圆角 */
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); /* 阴影 */
}

.card2 img{
    top: 50px;
    width: 35px;
    height: 35px;
    position: absolute;
    margin: 0 auto;
    display: block;
    left: 50%;
    transform: translate(-50%, -5%);
}

.icon_down img{
    width: 20px;
    height: 20px;
    position: absolute;
}

</style>


<script setup>
</script>
