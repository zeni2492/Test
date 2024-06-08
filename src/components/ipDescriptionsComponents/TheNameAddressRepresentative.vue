<template>
    
    <tr class="w-full Title h-12 flex items-center bg-gray-200 border-r-2">
        <td class="uppercase ml-3">Name and address of representative</td>
    </tr>
    <tr class="containerName h-auto w-full FlexRow">
        <th class="RowNumber">
            740</th>
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
                <div class=" ml-auto mr-5">
                    <td class="text-red-500 font-normal ">Adress changed</td>
                </div>
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
    <tr class="EmptyRow TheNameAddressStyle">
        <td class="flex justify-start flex-col h-8"></td>
    </tr>
    <tr class="GlobalInformationTrStyle w-full">
        <th class="RowNumber">
            750
        </th>
        <td class="">
            <div >
                <p class="mb-2 text-gray-500">Address for correspondence</p>
                <p class="LongText">Storavagen, 12 and long-long address or state and, ZIP code, etc. 168 30, Warszaw</p>
            </div>
        </td>
    </tr>
    
</template>

<style scoped>
@media screen and (max-width: 713px) {

    .LongText{
        word-break: break-all;
        white-space: normal;
    }
    .GlobalInformationTrStyle{
        width: 300px;
    }
}
</style>

