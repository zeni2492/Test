<template>
    <div class="w-full flex justify-center flex-col bg-white rounded-lg py-5 mt-5">
        <div class="w-full flex justify-center">
            <div class="w-95% bg-gray-200 flex flex-row items-center">
                <h1 class="text-xl ml-2 py-2  font-normal text-gray-500 ">
                    Relation
                </h1>
                <WarnButton></WarnButton>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <table class="w-95% border-2 border-gray-300 text-gray-500 ">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Unit</td>
                        <td>Owner</td>
                        <td>Phone</td>
                        <td>E-mail</td>
                        <td>Address</td>
                        <td>IP rights</td>
                        <td>actions</td>
                    </tr>
                    <tr>
                        <td>12332123123</td>
                        <td>Kim Chung</td>
                        <td>No data</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td>No data</td>
                        <td>No data</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td class="w-32"><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>123232332</td>
                        <td>+64534343434</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td>No data</td>
                        <td>No data</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td>No data</td>
                        <td><slot name="actions"></slot></td>
                    </tr>
                    <tr>
                        <td>123232332</td>
                        <td>Trademark</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td class="text-Custom-Blue">Relations</td>
                        <td>No data</td>
                        <td>No data</td>
                        <td><slot name="actions"></slot></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import WarnButton from '../buttons/WarnButton.vue';
</script>

<style scoped>
td {
    border: 2px solid rgba(228, 228, 228, 0.207);
    padding-left: 8px;
}
</style>