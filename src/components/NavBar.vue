<template>
  <div class="flex flex-row justify-between items-center">
    <nav class="w-95 relative">
      <ul class="flex flex-row gap-8 text-xl text-gray-400 font-medium select-none flex-wrap">
        <!-- Цикл для вывода элементов в навигационной панели -->
        <li v-for="(item, index) in menuItems" :key="index" @click="() => $emit('updateActive', index)"
          :class="{ 'cursor-pointer': true, 'active': activeItem === index }">
          {{ item }} 
        </li>
      </ul>
    </nav>
    <div>
      <img class="w-10 h-10" src="../assets/download-svgrepo-com.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  menuItems: Array,
  activeItem: Number
})

const emits = defineEmits(['updateActive'])
</script>

<style>
li.active {
  position: relative;
  color: #171858;
}

li.active::after {
  content: '';
  position: absolute;
  top: 43px;
  /* Расположение подчеркивания на бордере */
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #171858;
  /* Цвет подчеркивания */
  transition: 0.5s all;
}
</style>