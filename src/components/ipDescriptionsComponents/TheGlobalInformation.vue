<template>
  <div class="Container w-full" >
    <div class="table w-full">
                <table class="w-full">
                    <tr class="GlobalInformationTrStyle ">
                        <th class="RowNumber">111</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Registration number :</td>
                            <td class="GlobalInformationSecondColTextStyle">M2918284</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle ">
                        <th class="RowNumber">210</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Serial number :</td>
                            <td class="GlobalInformationSecondColTextStyle">40202026151S</td>
                        </div>
                    </tr>

                    

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">550</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Type of mark :</td>
                            <td class="GlobalInformationSecondColTextStyle">Word</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle ">
                        <th class="RowNumber">551</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Kind of mark :</td>
                            <td class="GlobalInformationSecondColTextStyle">Individual</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">220</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Application date</td>
                            <td class="GlobalInformationSecondColTextStyle">March 10, 2010</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">151</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Registration date</td>
                            <td class="GlobalInformationSecondColTextStyle">june 23, 2010</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">450</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Publication date</td>
                            <td class="GlobalInformationSecondColTextStyle">June 23, 2010</td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">180</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle text-red-500">Expiry date </td>
                            <td class="GlobalInformationSecondColTextStyle text-red-500">August 22, 2007 <span><RenewButton class="ml-5"/></span></td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">
                            511
                        </th>
                        <td class="GlobalInformationFirstColTextStyle">Nice classification - NCL</td>
                        <td class="LongText GlobalInformationSecondColTextStyle break-all">
                            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,3-,31,32,33,,34,35,36,37,38,39,40,41,42,43,44,45
                        </td>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">
                            210</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Image:</td>
                            <td ><img class="w-20" src="../../assets/GIWmkD0QiVw.jpg" alt=""></td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th class="RowNumber">
                            540</th>
                        <div class="FlexRow trCont">
                            <td class="GlobalInformationFirstColTextStyle">Image:</td>
                            <td ><img class="w-20" src="../../assets/GIWmkD0QiVw.jpg" alt=""></td>
                        </div>
                    </tr>

                    <tr class="GlobalInformationTrStyle">
                        <th
                            class="RowNumber">
                            541</th>
                        <td class="ml-2 text-start flex flex-col">
                            <div>
                                <p class=" mb-2 text-gray-500 break-all whitespace-normal">Reproduction of the mark where the mark is represented in standard
                                    characters</p>
                                <p class=" mb-2 text-gray-500 break-all whitespace-normal">ALASK or another very-very long name</p>
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

<style scoped>
.IpDescription {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.14);
}

.TrCont{
    display: none;
}

tr

td {
    /* Добавляем отступы в ячейках */
    text-align: left;
    /* Выравниваем текст по левому краю */
    word-break: break-all;
}

@media screen and (max-width: 713px) {

    .Container{
        width: 300px;
        display: flex;
        justify-content: center;
    }
    .containerName{
        width: 30px;
        padding: 0;
        margin: 0;
    }
    .GlobalInformationTrStyle{
        display: flex;
        flex-direction: column;
        
    }
    tr{
        width: 300px;
    }
    .wrapperName{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    td{
        word-break: normal;
        white-space: nowrap;
    }
    .LongText{
        word-break: break-all;
        white-space: normal;
    }
}


</style>