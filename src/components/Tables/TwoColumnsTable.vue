<template>
    <div class="w-full flex justify-center TableSample rounded-lg mt-5 py-5 bg-white flex-col text-gray-500">
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
                        <td class="border-b-2 w-1/2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="firstTop"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="secondTop"></slot>
                        </td>
                    </tr>
                    <tr class="">
                        <td class="border-b-2 w-1/2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="firstMiddle"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="secondMiddle"></slot>
                        </td>
                    </tr>
                    <tr>
                        <td class="border-b-2 w-1/2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="firstBottom"></slot>
                        </td>
                        <td class="border-b-2 pl-2 border-l-2 border-r-2 border-gray-300">
                            <slot name="secondBottom"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
