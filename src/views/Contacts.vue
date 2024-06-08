<template>
    <Table class="TableBody" >
        <div class="w-full flex items-center">
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
            <span class="break-all">+651112223334</span>
        </template>
        <template #middlefourth>
            <span class="break-all">ivanov@ivanov.com</span>
        </template>
        <template  #middlefifth ">
            <Actions class="actions" style="width: 120px;"/>
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
            <div class="actions">
                <Actions  style="width: 120px!important;"/>
            </div>
        </template>
        
    </Table>
</template>

<script setup>
import Actions from '../components/buttons/Actions.vue';
import Table from '../components/Tables/AddressHistoryContactTable.vue';
import HeadLineButton from '../components/buttons/HeadLineButton.vue';
</script>

<style scoped>

</style>