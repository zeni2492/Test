<template>
    <Table>
        <div class="w-full flex items-center ">
            Adress History
            <HeadLineButton class="ml-2 text-Custom-Blue text-base"> Add  new address</HeadLineButton>
            </div>
        <template #firstTop>
            Country
        </template>
        <template #secondTop>
            ZIP
        </template>
        <template #thirdTop>
            City
        </template>
        <template #fourthTop>
            State
        </template>
        <template #fifthTop>
            Address
        </template>
        <template #middlefirst>
            Australia
        </template>
        <template #middlesecond>
            2345
        </template>
        <template #middlethird>
            Canberra
        </template>
        <template #middlefourth>
            NSW
        </template>
        <template #middlefifth>
            <div class="Adress">
            Storavagen, 12 and long-long adress or state and, ZIP code
            </div>
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
        <template #fifthBottom>
            <div class="Adress">
                Storavagen, 12 and long-long adress
            </div>
        </template>
    </Table>
</template>

<script setup>
import Actions from '../components/buttons/Actions.vue';
import Table from '../components/Tables/AddressHistoryContactTable.vue'
import HeadLineButton from '../components/buttons/HeadLineButton.vue';
</script>

<style scoped>
.Adress{
    white-space: nowrap;
}
@media screen and (max-width: 576px) {
    Table{
        height: 400px;
    }
    .Adress{
        white-space: normal;
        word-break: break-all !important;
        width: 150px;
    }
    
}
</style>