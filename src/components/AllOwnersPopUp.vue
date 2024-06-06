<template>
    <div class="PopUp text-2xl mt w-96 flex justify-center flex-row items-start h-96 z-10 bg-slate-100">
        <p class="ml-5 mt-5">All owners</p>
        <button class="ml-auto mr-5 mt-5 font-normal text-red-500" @click="closePopUp">✕</button>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';


const emits = defineEmits(['close']);
const closePopUp = () => {
    emits('close');
}
</script>

<style scoped>
.PopUp {
    box-shadow: 0px 0px 1500px 1500px rgba(0, 0, 0, 0.667);
}
</style>