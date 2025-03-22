<template>
    <div class="big">
        <div class="tag">
            <img src="@/assets/chevron-left.png" style="margin-top: 7px;height: 40px;position: absolute">
            <div style="display: inline-block;width: 100%;height: 30px;text-align: center;margin-top: 13px">单词加油包
            </div>
        </div>
        <div class="menu">
            <div class="content">
                A-E
                <img src="@/assets/icon_word_switch.png">
            </div>
            <div class="content">
                F-J
                <img src="@/assets/icon_word_switch.png">
            </div>
            <div class="content">
                H-L
                <img src="@/assets/icon_word_switch.png">
            </div>
            <div class="content">
                M-Q
                <img src="@/assets/icon_word_switch.png">
            </div>
            <div class="content">
                R-Z
                <img src="@/assets/icon_word_switch.png">
            </div>
        </div>
        <div class="main">
            <div class="block">
                <div class="word1">A sandwich</div>
                <div class="word2">给我一个三明治</div>
                <img src="@/assets/img_word_sandwich.png">
            </div>
            <div class="block">
                <div class="word1">Australia</div>
                <div class="word2">澳大利亚</div>
                <img src="@/assets/img_word_australia.png">
            </div>
            <div class="block">
                <div class="word1">Britain</div>
                <div class="word2">英国</div>
                <img src="@/assets/img_word_britain.png">
            </div>
            <div class="block">
                <div class="word1">British</div>
                <div class="word2">英国人</div>
                <img src="@/assets/img_word_man.png">
            </div>
            <div class="block">
                <div class="word1">CCTV</div>
                <div class="word2">中国中央电视台</div>
                <img src="@/assets/img_word_sandwich.png">
            </div>
            <div class="block">
                <div class="word1">Children‘s Park</div>
                <div class="word2">儿童公园</div>
                <img src="@/assets/img_word_australia.png">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
}
</script>

<style scoped>
@import '@/assets/font/font.css';

.big {
    width: 100%;
    background-color: rgba(248, 248, 248, 1);
    display: inline-block;
    min-height: 700px
}

.tag {
    width: 100%;
    height: 55px;
    background-color: white;
    position: fixed;
    color: rgba(55, 74, 112, 1);
    font-family: "Yuan SC-Regular";
    font-size: 23px;
    font-weight: bold;
}

.menu {
    width: 100%;
    height: 40px;
    background-color: transparent;
    margin-top: 80px;
    margin-bottom: 10px;
}

.content {
    width: 20%;
    height: 30px;
    display: inline-block;
    background-color: transparent;
    margin-top: 3px;
    font-family: "Yuan SC-Regular";
    font-size: 18px;
    font-weight: bold;
    color: rgba(55, 74, 112, 0.60);
    text-align: center;
    vertical-align: top;
}

.content img {
    height: 20px;
    display: inline-block;
    vertical-align: top;
}

.main {
    width: 100%;

}

.block {
    width: 44%;
    height: 230px;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 12px; /* 卡片圆角 */
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06); /* 卡片阴影 */
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.word1 {
    font-weight: bold;
    font-family: "Yuan SC-Regular";
    font-size: 17px;
    color: rgba(55, 74, 112, 1);
    width: 100%;
    display: block;
    height: 30px;
    text-align: center;
    margin-top: 20px;
}

.word2 {
    font-family: "Yuan SC-Regular";
    font-size: 17px;
    color: rgba(55, 74, 112, 0.50);
    width: 100%;
    display: block;
    height: 30px;
    text-align: center;
}

.block img {
    display: block;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
}
</style>


<script setup>
</script>
