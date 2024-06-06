<template>
    <div class="w-full flex justify-center bg-white rounded-lg">
        <div class="w-95% h-20 flex flex-row justify-between items-center text-xl">
            <h2 class="text-Custom-Dark-Blue">Trademark: 40202026151S</h2>
            <div class="flex flex-row font-thin">
                <div class="flex flex-row h-8 items-center ">
                    <div>
                        <img class="w-11 h-11 border-r-2 mr-5 pr-5 cursor-pointer" src="../assets/HeaderIcons/printer-1597-svgrepo-com.svg" alt="">
                    </div>
                    <div>
                        <img class="w-11 h-11 border-r-2 mr-5 pr-5 cursor-pointer" src="../assets/HeaderIcons/diskette-save-svgrepo-com.svg" alt="">
                    </div>
                    <div>
                        <img class="w-11 h-11 border-r-2 mr-5 pr-5 cursor-pointer" src="../assets/HeaderIcons/share-svgrepo-com (1).svg" alt="">
                    </div>
                    <div>
                        <img class="w-11 h-11 border-r-2 mr-5 pr-5 cursor-pointer" src="../assets/HeaderIcons/paper-plane-svgrepo-com.svg" alt="">
                    </div>
                    <div>
                        <img class="w-7 h-7  mr-5  cursor-pointer" src="../assets/HeaderIcons/question-svgrepo-com.svg" alt="">
                    </div>
                </div>
                <RenewButton/>
                <button
                    class="text-nowrap rounded-lg font-normal bg-Custom-Blue text-white px-2 h-9 flex flex-row items-center justify-center gap-3"><span
                        class="font-thin border-2 rounded-full relative w-6 h-6">
                        <span class="text-white font-normal absolute -top-1 left-1   ">+</span>
                    </span>
                    to client list
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import RenewButton from './buttons/RenewButton.vue';
</script>
