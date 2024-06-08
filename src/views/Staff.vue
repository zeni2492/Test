<template>
    <TwoColumnsTable class="">
        <div class="w-full flex items-center ">
            Staff
            <HeadLineButton class="ml-2 text-Custom-Blue text-base"> Add  new related stuff</HeadLineButton>
        </div>
        
        <template #firstTop > Name </template>
        <template #secondTop> Added </template>
        <template #firstMiddle> Иван Петров </template>
        <template #secondMiddle> 10.01.2024 </template>
        <template #firstBottom> Петр Петров </template>
        <template #secondBottom> 10.01.2024 </template>
    </TwoColumnsTable>
</template>


<script setup>
import HeadLineButton from '../components/buttons/HeadLineButton.vue';
import TwoColumnsTable from "../components/Tables/TwoColumnsTable.vue";
</script>