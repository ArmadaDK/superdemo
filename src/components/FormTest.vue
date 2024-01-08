<template>
  <el-container style="width:100%">
    <el-form ref="formRef" :model="form" :rules="rules" status-icon inline style="margin: auto;">
      <el-form-item label="text" prop="text">
        <el-input v-model="form.text"></el-input>
      </el-form-item>
      <el-form-item label="number" prop="number" required>
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="date" prop="date">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="cusText" prop="cusText">
        <el-input v-model="form.cusText"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit"> Submit </el-button>
        <el-button @click="reset">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script setup>
import { reactive, ref, } from "vue";
const rules = {
  text: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ]
};
const form = reactive({
  text: "",
  number: "",
  date: "",
  cusText: "",
});
const formRef = ref();
function submit() {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
}
function reset() {
  formRef.value.resetFields();
}
</script>
<style lang=""></style>
