<script lang="ts" setup>
import { RouterView } from "vue-router"
import { Document, Menu as IconMenu, SwitchFilled, Setting } from "@element-plus/icons-vue"
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-row class="tac">
    <el-col :span="4">
      <h5 class="mb-2">默认颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router>
        <el-sub-menu index="form">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>表单</span>
          </template>
          <el-menu-item index="fomr" route="form">基础表单</el-menu-item>
          <el-menu-item index="form-validation" route="/form/validation">表单校验</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="table">
          <template #title>
            <el-icon><SwitchFilled /></el-icon>
            <span>表格</span>
          </template>
          <el-menu-item-group title="表格的基础示例">
            <el-menu-item index="table" route="/table">基本表格</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>第三部分</span>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <RouterView />
    </el-col>
  </el-row>
</template>

<style scoped></style>
