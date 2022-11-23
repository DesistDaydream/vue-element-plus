<script setup lang="ts">
import { reactive, ref } from "vue"
import type { FormInstance } from "element-plus"

// 与 el-form 组件的 ref 属性的值相同时，将会自动关联，用以获取 el-form 组件的实例
const ruleFormRef = ref<FormInstance>()

// 自定义的验证规则。
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"))
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return
      // validataField() 的第一个参数是 prop 的值
      ruleFormRef.value.validateField("checkPass", () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次的输入不匹配！"))
  } else {
    callback()
  }
}
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
  username: "",
  pass: "",
  checkPass: "",
  age: "",
})

// 表单验证规则
// reactive() 中对象内属性的 key 要与 prop 属性的值一致。
const rules = reactive({
  // 内置的验证规则
  username: [
    // required: true 表示必填
    // message: 表示验证不通过时的提示信息
    // tigger: 表示触发验证的时机。可用的值有 blur(表示失去焦点时触发验证) | change(表示值发生改变时触发验证)
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  // 自定义验证规则
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: validateAge, trigger: "blur" }],
})

// 表单提交逻辑
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log("用户名：", ruleForm.username)
      console.log("密码：", ruleForm.pass)
      console.log("年龄：", ruleForm.age)

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
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
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
