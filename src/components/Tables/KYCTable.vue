<template>
    <div class="w-full flex justify-center flex-col bg-white rounded-lg py-5 mt-5 text-gray-500">
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
                        <td>Attachment ID</td>
                        <td>KYC checked</td>
                        <td>Checked unit</td>
                        <td>Typ</td>
                        <td>Result</td>
                        <td class="w-48">Data</td>
                        <td>Actions</td>
                    </tr>
                    <tr>
                        <td>12332123123</td>
                        <td>Иван Иванов</td>
                        <td>Coca Cola inc.</td>
                        <td>Company</td>
                        <td>Trusted</td>
                        <td>12.03.2024, 23:12</td>
                        <td class="w-32"><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>123232332</td>
                        <td>Петр Петров</td>
                        <td>Coca Cola inc.</td>
                        <td>Personal</td>
                        <td>No data</td>
                        <td>12.03.2024, 23:12</td>
                        <td><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>123232332</td>
                        <td>Петр Петров</td>
                        <td>Coca Cola inc.</td>
                        <td>Company</td>
                        <td class="text-red-500">Not trusted</td>
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
    border: 2px solid rgba(211, 211, 211, 0.365);
    padding-left: 8px;
}
</style>