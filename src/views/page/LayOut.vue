<!--首页 -->
<template>
  <div>
    <el-button v-for="v in btnList" :key="v.like" type="primary" class="btn"
      @click="goToLike(v.like)">{{ v.text }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { goToLike } from "@/utils/utils";
const btnList = [
  {
    text: '去登录',
    like: '/login'
  },
  {
    text: '404',
    like: '/404'
  },
  {
    text: '首页',
    like: '/home'
  }
]

</script>

<style scoped lang="scss">
.btn {
  width: 100%;
  margin: 20px 0;
  height: 46px;
}
</style>