<template>
    <div>
      <markdown-editor v-model="markdownText"></markdown-editor>
    </div>
  </template>
  
  <script>
  import MarkdownEditor from 'vue-markdown-editor';
  
  export default {
    components: {
      MarkdownEditor
    },
    data() {
      return {
        markdownText: ''
      };
    }
  };
  </script>
  