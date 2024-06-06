<template>
    <div class="TableSample w-full flex bg-white mt-8 justify-center rounded-lg flex-col py-5 text-gray-500">
        <div class="w-full flex justify-center">
            <div class="w-95% bg-gray-200 ">
                <h1 class="text-xl ml-2 py-2  font-normal text-gray-500 ">
                    <slot></slot>
                </h1>
            </div>
        </div>
        <div class="w-full flex justify-center ">
            <table class="w-95% border-2 border-gray-300 ">
                <tbody>
                    <tr class="border-b-2 border-gray-300">
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="firstTop"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="secondTop"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="thirdTop"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="fourthTop"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="fifthTop"></slot>
                        </td>
                    </tr>
                    <tr class="">
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="middlefirst"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="middlesecond"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="middlethird"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="middlefourth"></slot>
                        </td>
                        <td class="border-b-2 pl-2  border-l-2 w-32 border-r-2 border-gray-300">
                            <slot name="middlefifth"></slot>
                        </td>
                    </tr>
                    <tr class="border-b-2 border-gray-300">
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="firstBottom"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="secondBottom"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="thirdBottom"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="fourthBottom"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 w-auto border-gray-300" >
                            <slot name="fifthBottom"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<style>
.TableSample{
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.14);
}

</style>
