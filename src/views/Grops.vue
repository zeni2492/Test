<template>
    <TwoColumnsTable>
        <div class="w-full flex items-center ">
            Grops
            <HeadLineButton class="ml-2 text-Custom-Blue text-base"> Add to group</HeadLineButton>
        </div>
        <template #firstTop> Name </template>
        <template #secondTop> Added </template>
        <template #firstMiddle> Имя группы 1 </template>
        <template #secondMiddle> Добавленно 10.01.2024 </template>
        <template #firstBottom> Имя группы 3 </template>
        <template #secondBottom> Добавленно 10.01.2024 </template>
    </TwoColumnsTable>
</template>


<script setup>
import TwoColumnsTable from "../components/Tables/TwoColumnsTable.vue";
import HeadLineButton from '../components/buttons/HeadLineButton.vue';
</script>