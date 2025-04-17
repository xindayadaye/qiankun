<template>
  <header style="display: flex;align-items: center; ">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-menu-item index="/vue-demo/home">vue-demo-home</el-menu-item>
      <el-menu-item index="/vue-demo/about">vue-demo-about</el-menu-item>
      <el-menu-item index="/react-demo">react-demo</el-menu-item>
    </el-menu>
    <el-button @click="changeNum">全局通信num: {{ num }}</el-button>
  </header>
  <div id="routerMain"></div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import actions from './actions';
const activeIndex = ref('/vue-demo-home')
const route = useRoute()
const router = useRouter()
const num = ref(actions.getState<number>('num') || 0)
const changeNum = () => {
  num.value++
  actions.emit('num', num.value)
}
watch(
  route,
  (val) => {
    activeIndex.value = val.path
  },
  {
    deep: true,
    immediate: true,
  },
)

function handleSelect(val: string) {
  router.push({ path: val })
}
onMounted(() => {
  actions.on('num', (data: number) => {
    num.value = data || 0
  })
})
</script>
<style scoped>
#routerMain {
  padding: 20px 30px;
}
</style>
