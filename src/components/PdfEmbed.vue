<template>
  <div class="container">
    <!-- 这样嵌入是有侧边黑色部分的 -->
    <embed class="embedPdf" src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf" type="application/pdf">

      <!-- 没有边框更适合自定义，但是每次只有一页 -->
    <div class="vuePdfEmbed">
        <VuePdfEmbed
          :source="state.source"
          :style="scaleFun"
          class="vue-pdf-embed"
          :page="state.pageNum"
          width="700"
        />
        <div class="page-tool">
          <div class="page-tool-item" @click="lastPage">上一页</div>
          <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
          <div class="page-tool-item" @click="nextPage">下一页</div>
          <div class="page-tool-item" @click="downloadPDF">下载</div>
        </div>
    </div>
    

  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs"; // 获得总页数

const pdfurl = ref('http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf')

const state = reactive({
  source: pdfurl, //预览pdf文件地址
  pageNum: 1, //当前页面
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
});
const scaleFun = reactive({
  transform:'scale('+state.scale+')'
})

// 获取上一页
function lastPage(){
  if(state.pageNum>1){
    state.pageNum--
  }
}

// 获取下一页
function nextPage(){
  if(state.pageNum<state.numPages){
    state.pageNum++
  }
}

// 下载pdf
function downloadPDF(){
  fetch(encodeURI(pdfurl.value)).then(res => {
        res.blob().then(myBlob => {
          const href = URL.createObjectURL(myBlob);
          const a = document.createElement('a');
          a.href = href;
          a.download = 'report'; // 下载文件重命名
          a.click();
          a.remove();
        });
      });
}

onMounted(() => {
  // 加载异步任务
  const loadingTask = createLoadingTask(state.source);
  // 载入pdf后获取页数
  loadingTask.promise.then((pdf) => {
    state.numPages = pdf.numPages;
  });

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-around;
}
.embedPdf{
  flex: 1;
  height: 100%;
}
.vuePdfEmbed{
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
}
.vuePdfEmbed{
  
  .page-tool {
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    z-index: 100;
    cursor: pointer;
    width: 320px;
    align-items: center;
    margin: auto;
    justify-content: space-around;
  }
  .page-tool-item {
    padding: 8px 15px;
    padding-left: 10px;
    cursor: pointer;
  }
}
</style>
