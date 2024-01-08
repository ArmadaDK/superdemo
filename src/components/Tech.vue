<template>
  <el-container>
    <div style="height: fit-content;">
<div>按住变大！</div>
    <div class="activeDiv"></div>
    </div>
    <div class="hoverDiv">
        鼠标变样
    </div>

  </el-container>
</template>
<script setup>
</script>
<style>
.activeDiv {
    width: 50px;
    height: 50px;
    background: black;
    transition: transform 2s,background 2s;
}
.activeDiv:active{
    background: #ffffff;
    transform: translateX(500px) rotateZ(360deg) scale(5);
}
html, body{
    cursor:url("../assets/hacker.svg"),auto;
}
</style>
