<template>
  <el-container>
    <!-- 自定义滚动条 -->
    <div class="scrollMenu">
      <el-affix :offset="120">
        <div style="display: flex">
          <el-slider
            v-model="heighRatio"
            :show-tooltip="false"
            vertical
            :height="scrollBarHeight"
            @input="scrollInput"
          />
          <div class="contentTitle">
            <a :href="'#' + item.title" class="contentItem" v-for="item in arrayData">{{
              item.title
            }}</a>
          </div>
        </div>
      </el-affix>
    </div>

    <!-- 内容部分 -->
    <div class="content" id="content">
      <div class="part" v-for="item in arrayData">
        <h2 :id="item.title">{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>

    <!-- 返回顶部 -->
    <el-backtop :bottom="100">
      <div
        style="
          height: 100%;
          width: 100px;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        "
      >
        <el-icon><ArrowUp /></el-icon>
      </div>
    </el-backtop>
  </el-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ArrowUp } from "@element-plus/icons-vue";
const heighRatio = ref(100);
const scrollBarHeight = ref("200px");
const arrayData = ref([
  { title: "标题111", content: "111111111111111111" },
  { title: "标题2222222222222222222222222", content: "111111111111111111" },
  { title: "标题333", content: "111111111111111111" },
  { title: "标题444", content: "111111111111111111" },
  { title: "标题555", content: "111111111111111111" },
  { title: "标题666", content: "111111111111111111" },
  { title: "标题777", content: "111111111111111111" },
  { title: "标题888", content: "111111111111111111" },
]);

function scrollInput() {
  window.scrollTo(0, ((100 - heighRatio.value) * document.body.clientHeight) / 100);
}

function handleScroll() {
  heighRatio.value =
    100 - (document.documentElement.scrollTop / document.body.clientHeight) * 100;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  scrollBarHeight.value = arrayData.value.length * 30 + "px";
});
</script>
<style>
.scrollMenu{
    margin-right: 50px;
}
.contentItem {
  text-align: left;
  height: 30px;
  width: 100px;
  text-decoration: none;
  display: block;
  line-height: 30px;;
  color: #409eff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  border-top: 1px solid #409eff;
}
.contentItem:last-child{
    border-bottom: 1px solid #409eff;
}
.content {
  padding: 50px 200px 50px 20px;
  flex: 1;
}
.part {
  height: 800px;
  background: #ccc;
}
</style>
