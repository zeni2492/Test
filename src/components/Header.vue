<template>
  <div ref="header" class="header w-full flex justify-center bg-white text-gray-400" title="Текст слишком длинный">
    <div class="w-95% py-5 flex flex-row justify-between">
      <div class="flex flex-row text-xl">
        <h1>IP Search</h1>
        <p class="mx-2">></p>
        <h2>Coca Cola</h2>
      </div>
      <div class="text-xl text-gray-400 cursor-pointer"> 
        <span class="font-thin ">&#10094;</span>
        Назад
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const header = ref(null);

onMounted(() => {
  header.value = document.querySelector('.header');
  //следит за курсором и рядом с ним показывает подсказку
  header.value.addEventListener('mouseover', (e) => {
    const tooltip = document.createElement('div');
    tooltip.textContent = header.value.getAttribute('title');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);

    tooltip.style.left = `${e.pageX}px`;
    tooltip.style.top = `${e.pageY}px`;

    header.value.addEventListener('mouseout', () => {
      tooltip.remove();
    });
  });
});
</script>

<style>
.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>