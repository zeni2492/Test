<template>
    <div class="TableSample">

        <div class="w-full flex justify-center">
            <div class="w-95% bg-gray-200 flex flex-row items-center">
                <h1 class="text-xl ml-2 py-2  font-normal text-gray-500 ">
                    Orders
                </h1>
                <HeadLineButton class="ml-2 text-Custom-Blue">Add order</HeadLineButton>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <table class="w-95% border-2 border-gray-300 ">
                <tbody>
                    <tr>
                        <td>Order ID</td>
                        <td>Invoice amount</td>
                        <td>Currency</td>
                        <td>GST,%</td>
                        <td>Invoice status</td>
                        <td class="w-36"></td>
                        <td>Order status</td>
                        <td>Contact person</td>
                        <td>Receiver</td>
                        <td>Data</td>
                        <td>Actions</td>
                    </tr>
                    <tr>
                        <td>12332123123</td>
                        <td>960</td>
                        <td>EUR</td>
                        <td>9</td>
                        <td class="text-green-500">Paid</td>
                        <td style="w-8"></td>
                        <td class="text-green-500">Completed</td>
                        <td>Иван Петров</td>
                        <td>ivanov@ivanov.com</td>
                        <td>12.03.2024, 23:12</td>
                        <td class="w-32"><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>12332123123</td>
                        <td>960</td>
                        <td>GBP</td>
                        <td>25</td>
                        <td class="text-red-500">Not paid</td>
                        <td></td>
                        <td class="text-red-500">In progress</td>
                        <td>Иван Петров</td>
                        <td>ivanov@ivanov.com</td>
                        <td>12.03.2024, 23:12</td>
                        <td><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>123232332</td>
                        <td>960</td>
                        <td>GBP</td>
                        <td>25</td>
                        <td class="text-red-500">Not Paid</td>
                        <td></td>
                        <td class="text-red-500">Waiting payment</td>
                        <td>Петр Петров</td>
                        <td>ivanov@ivanov.com</td>
                        <td>12.03.2024, 23:12</td>
                        <td><slot name="actions"></slot></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import HeadLineButton from '../buttons/HeadLineButton.vue';
</script>

<style scoped>
td {
    border: 2px solid rgba(209, 213, 219, 0.365);
    padding-left: 8px;
}

@media screen and (max-width: 941px) {
    .Buttons{
        white-space: nowrap;
        font-size: 12px;
    }
    
    table {
        overflow-x: auto;
        display: block;
    }

    td, th {
        min-width: 20px;
        text-align: center;
        padding: 0 5px;
    }
}
</style>