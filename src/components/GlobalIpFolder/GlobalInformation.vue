<template>
  <div>
    <div class="table w-full">
                <table class="w-full border-2 border-gray-300 border-collapse border-opacity-20">
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th class=" w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">111</th>
                        <td class="px-2 ml-2 text-start w-56 flex items-center text-gray-500">Registration number :</td>
                        <td class="px-2 flex items-center">M2918284</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">210</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 flex text-gray-500">Serial number :</td>
                        <td class="px-2 flex items-center">40202026151S</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">550</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Type of mark :</td>
                        <td class="px-2 flex items-center">Word</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="px-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">551</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Kind of mark :</td>
                        <td class="px-2 flex items-center">Individual</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="px-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">220</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Application date</td>
                        <td class="px-2 flex items-center">March 10, 2010</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">151</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Registration date</td>
                        <td class="px-2 flex items-center">june 23, 2010</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">450</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Publication date</td>
                        <td class="px-2 flex items-center">June 23, 2010</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center">180</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-red-500">Expiry date </td>
                        <td class="px-2 flex items-center text-red-500">August 22, 2007 <RenewButton class="ml-5"/></td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            511</th>
                        <td class="px-2 flex items-center ml-2 text-start w-56 text-gray-500">Nice classification - NCL</td>
                        <td class="px-2 flex items-center">
                            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,3-,31,32,33,,34,35,36,37,38,39,40,41,42,43,44,45
                        </td>
                    </tr>
                    <tr class="border-b-2 -mt-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="px-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            210</th>
                        <td class="px-2 ml-2 text-start w-56 text-gray-500">Image:</td>
                        <td class="px-2"><img class="w-20" src="../../assets/GIWmkD0QiVw.jpg" alt=""></td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="px-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            540</th>
                        <td class="px-2 ml-2 text-start w-56 text-gray-500">Reproduction of the mark</td>
                        <td class="px-2"><img class="w-20" src="../../assets/GIWmkD0QiVw.jpg" alt=""></td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th
                            class="p-2 w-10 h-8 inline-block text-white bg-Custom-Blue flex justify-center items-center flex-nowrap">
                            541</th>
                        <td class=" ml-2 text-start flex flex-col">
                            <div>
                                <p class=" mb-2 text-gray-500">Reproduction of the mark where the mark is represented in standard
                                    characters</p>
                                <p>ALASK or another very-very long name</p>
                            </div>
                        </td>
                    </tr>
            </table>
        </div>
  </div>
</template>

<script lang="ts" setup>
import RenewButton from '../buttons/RenewButton.vue';
</script>

<style>
.IpDescription {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.14);
}

table {
    border-collapse: collapse;
}

td {
    /* Добавляем отступы в ячейках */
    text-align: left;
    /* Выравниваем текст по левому краю */
    word-break: break-all;
}
</style>