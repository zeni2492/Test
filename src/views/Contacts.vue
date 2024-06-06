<template>
    <Table >
        <div class="w-full flex items-center ">
            Contacts
            <HeadLineButton class="ml-2 text-Custom-Blue text-base"> Add new contact</HeadLineButton>
        </div>
        <template #firstTop>
            Name
        </template>
        <template #secondTop>
            Surname
        </template>
        <template #thirdTop>
            Phone
        </template>
        <template #fourthTop>
            E-mail
        </template>
        <template #fifthTop>
            Actions
        </template>
        <template #middlefirst>
            Sara
        </template>
        <template #middlesecond>
            Ivanova
        </template>
        <template #middlethird>
            +651112223334
        </template>
        <template #middlefourth>
            ivanov@ivanov.com
        </template>
        <template  #middlefifth ">
            <Actions style="width: 120px;"/>
        </template>
        <template #firstBottom>
            Singapore
        </template>
        <template #secondBottom>
            104 32
        </template>
        <template #thirdBottom>
            Singapore
        </template>
        <template #fourthBottom>
            -
        </template>
        
        <template  #fifthBottom >
            <div >
                <Actions style="width: 120px;"/>
            </div>
        </template>
        
    </Table>
</template>

<script setup>
import Actions from '../components/Actions.vue';
import Table from '../components/Tables/Table.vue';
import HeadLineButton from '../components/buttons/HeadLineButton.vue';
</script>