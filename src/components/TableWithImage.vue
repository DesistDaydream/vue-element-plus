<script setup lang="ts">
import { ref } from "vue"
const erweimaTableData = [
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
  {
    name: "孙悟空",
    className: "三年一班",
    gender: "男",
    studentId: "154154151",
    thumbnail:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi1%2F4098777554%2FO1CN01cxXjKb25fmXZcyvcK_%21%214098777554.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653531849&t=fb87a385cb470a7bc13daf746c099e25",
  },
]
</script>

<template>
  <div>
    <el-table
      id="out-table"
      :data="erweimaTableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="className" label="班级"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="studentId" label="学号"> </el-table-column>
      <el-table-column prop="qrCode" label="图片">
        <template #default="scope">
          <img :src="scope.row.thumbnail" min-width="70" height="70" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
