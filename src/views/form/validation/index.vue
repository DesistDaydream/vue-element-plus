<script setup lang="ts">
import { reactive, ref } from "vue"
import type { FormInstance } from "element-plus"

const ruleFormRef = ref<FormInstance>()

// 验证第一个表单的逻辑
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"))
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField("检查密码", () => null)
    }
    callback()
  }
}

// 验证第二个表单的逻辑
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次的输入不匹配！"))
  } else {
    callback()
  }
}

// 验证第三个表单的逻辑
const validateAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入年龄"))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("请输入数字"))
    } else {
      if (value < 18) {
        callback(new Error("年龄必须大于18"))
      } else {
        callback()
      }
    }
  }, 1000)
}

// 表单数据
const ruleForm = reactive({
  account: "",
  pass: "",
  checkPass: "",
  age: "",
})

// 表单验证规则
const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: validateAge, trigger: "blur" }],
})

// 表单提交逻辑
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!")
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm">
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
    </el-form-item>

    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
