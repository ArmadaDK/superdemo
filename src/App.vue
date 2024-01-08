<template>
  <!-- <FormTest /> -->
  <!-- <PdfEmbed /> -->
  <!-- <ScrollBar /> -->
  <!-- <ShowTech /> -->
  <!-- <Tech /> -->
  <!-- <Boom /> -->
  <!-- <Table :type="7" /> -->
  <!-- <RTSP /> -->
  <MarkDown/>
</template>

<script>
import PdfEmbed from "./components/PdfEmbed.vue";
import FormTest from "./components/FormTest.vue";
import ScrollBar from "./components/ScrollBar.vue";
import Tech from "./components/Tech.vue";
import Table from "./components/Tableset.vue";
import RTSP from "./components/RTSP.vue";
import MarkDown from "./components/MarkDown.vue";

export default {
  name: "App",
  components: {
    PdfEmbed,
    FormTest,
    ScrollBar,
    Tech,
    RTSP,
    Table,
    MarkDown
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,
html {
  min-height: 100%;
  height: fit-content;
  background: linear-gradient(180deg, rgb(168, 243, 205), rgb(241, 162, 125));
  background-repeat: no-repeat;
}
</style>
