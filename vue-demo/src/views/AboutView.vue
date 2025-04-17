<template>
  <div class="about">
    <h1>This is an about page: {{ num }}</h1>
    <img :src="imgSrc" alt="logo" style="width: 200px" />
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import img from '../assets/1.jpg'
const location = inject('location') || ''
const actions: any = inject('actions')
const imgSrc = location + img
const num = ref(actions.getState('num') || 0)
onMounted(() => {
  actions.on('num', (data: number) => {
    num.value = data || 0
  })
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
