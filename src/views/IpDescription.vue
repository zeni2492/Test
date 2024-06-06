<template>
    <main class="IpDescription w-full flex bg-white mt-8 justify-center rounded-lg ">
        <div class="w-95% px-8 flex flex-col">
            <h1 class="my-5 text-xl text-Custom-Dark-Blue">Global IP information system/REGISTERED TRADEMARK-OEPM(Spain)
            </h1>
            <div class="table w-full mb-2">
                <table class="w-full border-2 border-gray-300 border-collapse border-opacity-20">
                    
                    <GlobalInformation/>
                    <tr class="w-full h-12 flex items-center bg-gray-200 border-r-2 border-Custom-Blue ">
                        <td class="uppercase ml-3">Name and address of the applicant or the holder</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            730</th>
                        <td class="flex justify-start flex-col w-full">
                             <div class="flex flex-row w-full">
                                <td class="px-2 text-start w-56 h-8 flex items-center text-gray-500">Name</td>
                                <td class=" w-56 h-8 flex items-center">XIAOJUAN ZHOU</td>
                                <div class=" ml-auto mr-5">
                                    <td class="text-red-500 font-normal flex h-8 items-center">Not Trusted</td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr
                        class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">Kind</td>
                                <td>Natural person</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">identifier</td>
                                <td>717</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">Address</td>
                                <td>Storavagen, 12 and long-long adress or state and, ZIP code, etc. 168 30,Warszaw</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">Country</td>
                                <td>Spain</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56"></td>
                                <td @click="showPopUp = !showPopUp" class="cursor-pointer text-blue-500 select-none">Show all owners: 23
                                </td>
                            </div>
                        </td>
                    </tr>

                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="uppercase ml-3">Name and address of representative</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">740</th>
                        <td class="flex justify-start flex-col w-full">
                             <div class="flex flex-row w-full">
                                <td class="text-start w-56 h-8 flex items-center text-gray-500">Name</td>
                                <td class="w-56 h-8 flex items-center">XIAOJUAN ZHOU</td>
                                <div class=" ml-auto mr-5">
                                    <td class="text-red-500 font-normal h-8 flex items-center">Not Trusted</td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">Kind</td>
                                <td>Natural person</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">identifier</td>
                                <td>717</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col w-full">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Address</td>
                                <td>Storavagen, 12 and long-long adress or state and, ZIP code, etc. 168 30,Warszaw</td>
                                <div class=" ml-auto mr-5">
                                    <td class="text-red-500 font-normal ">Adress changed</td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <td class="flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start w-56 text-gray-500">Country</td>
                                <td>Spain</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-l-2 ml-10 h-8 border-gray-300 border-collapse border-opacity-20 flex flex-row">
                        <td class="flex justify-start flex-col"></td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row ">
                        <th class="w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">750</th>
                        <td class=" ml-2 text-start w-56 h-8 flex items-center text-gray-500">Address for correspondence</td>
                        <td class=" ml-3 h-8 flex items-center">Storavagen, 12 and long-long adress or state and, ZIP code, etc. 168 30,Warszaw</td>
                    </tr>
                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="uppercase ml-3">Classification</td>
                    </tr>
                    <Classification />
                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="headers uppercase ml-3">RELATED MARKS</td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            300</th>
                            <td class="border-l-2  border-gray-300 border-collapse border-opacity-20 flex justify-start flex-col">
                            <div class="flex flex-row">
                                <td class="text-start h-auto my-1 flex ml-5 text-gray-500">DATA RELATING TO PRIORITY UNDER THE PARIS CONVENTION AND OTHER DATA RELATING TO REGISTRATION OF THE MARK IN THE COUNTRY OF ORIGIN </td>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            310</th>
                            <td class=" w-full   flex justify-start flex-row">
                                <div class="w-1/2 ml-5 border-r-2 border-gray-300 border-collapse border-opacity-20">
                                    <td class=" text-start h-auto my-1 flex text-gray-500">Serial number assigned to the first application </td>
                                </div>
                                <div class="w-1/2 pl-5 ">
                                    <td class=" text-start h-auto my-1 flex">78/149708</td>
                                </div>
                            </td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            320</th>
                            <td class="border-l-2 w-full  border-gray-300 border-collapse border-opacity-20 flex justify-start flex-row">
                                <div class="w-1/2 ml-5  border-r-2 border-gray-300 border-collapse border-opacity-20">
                                    <td class=" text-start h-auto my-1 flex text-gray-500">Date of filing of the first application  </td>
                                </div>
                                <div class="w-1/2  pl-5">
                                    <td class=" text-start h-auto my-1 flex">August 1, 2002 </td>
                                </div>
                            </td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            330</th>
                            <td class="border-l-2 w-full  border-gray-300 border-collapse border-opacity-20 flex justify-start flex-row">
                                <div class="w-1/2 ml-5 border-r-2 border-gray-300 border-collapse border-opacity-20">
                                    <td class=" text-start h-auto my-1 flex text-gray-500">WIPO Standard ST.3 code, identifying the national or regional Office where the first application was made or the organization where the first application was made</td>
                                </div>
                                <div class="w-1/2  pl-5">
                                    <td class=" text-start h-auto   flex">US</td>
                                </div>
                            </td>
                    </tr>
                    <tr class="border-b-2 border-gray-300 border-collapse border-opacity-20 h-auto w-full flex flex-row">
                        <th class="p-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            390</th>
                            <td class=" w-full  border-gray-300 border-collapse border-opacity-20 flex justify-start flex-row">
                                <div class="w-1/2 ml-5 border-r-2 border-gray-300 border-collapse border-opacity-20">
                                    <td class=" text-start h-auto my-1 flex text-gray-500">Data relating to the registration in the country of origin (for instance in the case of a (400) Date(s) of making information available to the public </td>
                                </div>
                                <div class="w-1/2 pl-5">
                                    <td class=" text-start h-auto my-1 flex">August 1, 2002 </td>
                                </div>
                            </td>
                    </tr>
                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="headers uppercase ml-3 ">IP OFFICE - OEPM (Spain) </td>
                    </tr>
                    <tr class="border-gray-300 border-collapse border-opacity-20 h-auto flex flex-row">
                        <th class="p-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start  border-b-2 flex-col w-1/2 ml-5 border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full my-1 ">
                                <td class="text-start w-56 text-gray-500">Official status</td>
                                <td>Registered</td>
                                <div class=" ml-auto mr-5">
                                    <td class="text-red-500 font-normal ">Claimed</td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class=" h-auto flex flex-row">
                        <th class="p-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start my-1 flex-col w-1/2 ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Status date</td>
                                <td>April 22, 202</td>
                            </div>
                        </td>
                    </tr>
                    <tr class=" h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start my-1 flex-col w-1/2 ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Designated countries</td>
                                <td>Spain</td>
                            </div>
                        </td>
                    </tr>
                    <tr class=" h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start flex-col w-1/2 ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Office link</td>
                                <td>www.ipo.es/trademark</td>
                            </div>
                        </td>
                    </tr>
                    <tr class=" h-auto flex flex-row relative">
                        <td class="absolute bottom-10 right-36">
                            <img class="w-96" src="../assets/spainFlag.jpg" alt="">
                        </td>
                    </tr>
                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="headers uppercase ml-3 ">FURTHER INFORMATION</td>
                    </tr>
                    <tr class=" h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start flex-col w-1/2 ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Application language</td>
                                <td>es</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="w-full h-12 flex items-center bg-gray-200 ">
                        <td class="headers uppercase ml-3">TRADEMARK HISTORY</td>
                    </tr>
                    <tr class="w-full h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="w-full flex justify-start flex-col w-1/2 ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="w-full flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Renewal</td>
                                <td>June 23, 2010 </td>
                            </div>
                        </td>
                    </tr>
                    <tr class="w-full h-auto flex flex-row">
                        <th class="p-2 w-10 h-8  text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="w-full flex justify-start flex-col  ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Notes</td>
                                <td>June 23, 2000, Added to group Vendor Notes</td>
                            </div>
                        </td>
                    </tr>
                    <tr class="w-full h-auto flex flex-row">
                        <th class="p-2 w-10 h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                            -</th>
                        <td class="flex justify-start flex-col w-full ml-5 border-b-2  border-r-2  border-gray-300 border-collapse border-opacity-20">
                            <div class="flex flex-row w-full">
                                <td class="text-start w-56 text-gray-500">Notes</td>
                                <td>June 23, 2000,Sended invoice </td>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </main>
    <div v-show="showPopUp" class="OutsideModal" @click.stop="closePopUp">
        <div @click.stop class="PopUp">
            <AllOwnersPopUp :ShowPopUp="showPopUp" @close="closePopUp" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import AllOwnersPopUp from '../components/AllOwnersPopUp.vue';
import Classification from '../components/GlobalIpFolder/Classification.vue';
import GlobalInformation from '../components/GlobalIpFolder/GlobalInformation.vue';
import { ref } from 'vue';

const showPopUp = ref(false);

function closePopUp() {
    showPopUp.value = false;
}
</script>

<style scoped>
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



.OutsideModal {
    position: fixed;
    width: 100%;
    height: 100vh;
}

.PopUp {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>