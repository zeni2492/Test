<template>
    <div class="TableSample">
        <div class="w-full flex justify-center">
            <div class="w-95% bg-gray-200 ">
                <h1 class="text-xl ml-2 py-2  font-normal text-gray-500 ">
                    <slot></slot>
                </h1>
            </div>
        </div>
        <div class="w-full flex justify-center ">
            <table class="w-95%  TableBorder">
                <tbody>
                    <tr class="tdContainer">
                        <td class="TdStyle">
                            <slot name="firstTop"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="secondTop"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="thirdTop"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="fourthTop"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="fifthTop"></slot>
                        </td>
                    </tr>
                    <tr class="tdContainer">
                        <td class="TdStyle">
                            <slot name="middlefirst"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="middlesecond"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="middlethird"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="middlefourth"></slot>
                        </td>
                        <td class="TdStyle actions">
                            <slot name="middlefifth"></slot>
                        </td>
                    </tr>
                    <tr class="border-b-2 tdContainer">
                        <td class="TdStyle">
                            <slot name="firstBottom"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="secondBottom"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="thirdBottom"></slot>
                        </td>
                        <td class="TdStyle">
                            <slot name="fourthBottom"></slot>
                        </td>
                        <td class="TdStyle actions w-auto" >
                            <slot name="fifthBottom"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<style scoped>
.TableSample{
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.14);
    height: 200px;
}

@media screen and (max-width: 941px) {
   .actions{
       width: 10px;
   }
   .TdStyle{
       font-size: 12px;
       padding: 0 ;
   }
}

</style>
