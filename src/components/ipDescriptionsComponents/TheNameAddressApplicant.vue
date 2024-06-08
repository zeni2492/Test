<template>
    <tr class="w-full Title h-12 flex items-center bg-gray-200 border-r-2 border-Custom-Blue ">
        <td class="uppercase ml-3">Name and address of the applicant or the holder</td>
    </tr>
    <tr class="containerName h-auto w-full FlexRow">
        <th class="RowNumber">
            730</th>
        <td class="wrapperName  BorderOpacity">
             <div class="FlexRow  ">
                <td class="px-2 text-start w-56  flex text-gray-500">Name</td>
                <td class="w-56 px-3 flex items-center ">XIAOJUAN ZHOU</td>
                <div class=" ml-auto mr-5">
                    <td class="text-red-500 font-normal flex items-center">Not Trusted</td>
                </div>
            </div>
        </td>
    </tr>
    <tr
        class="containerName TheNameAddressStyle">
        <td class="wrapperName flex justify-start flex-col">
            <div class="FlexRow">
                <td class="AdressContactFirstColTextStyle">Kind</td>
                <td>Natural person</td>
            </div>
        </td>
    </tr>
    <tr class="containerName TheNameAddressStyle">
        <td class="wrapperName flex justify-start flex-col">
            <div class="FlexRow">
                <td class="AdressContactFirstColTextStyle">identifier</td>
                <td>717</td>
            </div>
        </td>
    </tr>
    <tr class="containerName TheNameAddressStyle">
        <td class="wrapperName flex justify-start flex-col">
            <div class="FlexRow">
                <td class="AdressContactFirstColTextStyle">Address</td>
                <td>Storavagen, 12 and long-long adress or state and, ZIP code, etc. 168 30,Warszaw</td>
            </div>
        </td>
    </tr>
    <tr class="containerName TheNameAddressStyle">
        <td class="wrapperName flex justify-start flex-col">
            <div class="FlexRow">
                <td class="AdressContactFirstColTextStyle">Country</td>
                <td>Spain</td>
            </div>
        </td>
    </tr>
    <tr class="containerName TheNameAddressStyle">
        <td class="wrapperName flex justify-start flex-col">
            <div class="FlexRow">
                <td class="text-start w-56"></td>
                <td @click="OpenPopUp" class="cursor-pointer text-blue-500 select-none">Show all owners: 23
                </td>
            </div>
        </td>
    </tr>
    <div v-show="showPopUp" class="OutsideModal" @click.stop="closePopUp">
        <div @click.stop class="PopUp">
            <TheAllOwnersPopUp :showPopUp="showPopUp" @close="closePopUp" />
        </div>
    </div>
</template>

<script setup>
import TheAllOwnersPopUp from '../TheAllOwnersPopUp.vue';
import { ref, defineProps, defineEmits } from 'vue';

const showPopUp = ref(false);

const props = defineProps({
    ShowPopUp: Boolean
});

const emits = defineEmits(['close', 'showPopUp']); // Add 'showPopUp' to the emits option

const closePopUp = () => {
    showPopUp.value = false;
};

const OpenPopUp = () => {
    showPopUp.value = true;
}
</script>

<style>
.OutsideModal {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
    left: 0;
    top: 0;
}

.PopUp {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}


</style>