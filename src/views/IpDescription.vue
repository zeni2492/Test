<template>
    <main class="IpDescription w-100% flex bg-white mt-8 rounded-lg  ">
        <div class="w-90% px-8 flex flex-col">
            <div class="w-full flex justify-center">
                <h1 class="my-5 w-full text-xl text-center text-Custom-Dark-Blue">Global IP information system/REGISTERED TRADEMARK-OEPM(Spain)
                </h1>
            </div>
                <div class="table w-full mb-2 flex">
                    <table class="w-full BorderOpacity border-2">

                        <GlobalInformation />

                        <TheNameAddressApplicant @showPopUp="showPopUp" />

                        <TheNameAddressRepresentative />

                        <Classification />

                        <RelatedMarks />

                        <IpOffice />

                        <tr class="Title w-full h-12 flex items-center bg-gray-200 ">
                            <td class="headers uppercase ml-3"><span class="text-sm">FURTHER INFORMATION</span></td>
                        </tr>
                        <tr class="containerName h-auto flex flex-row">
                            <th class="p-2 w-10 Number h-8 text-white bg-Custom-Blue flex justify-center items-center text-wrap">
                                -</th>
                            <td class="wrapperName flex justify-start flex-col w-1/2 ml-5">
                                <div class="flex flex-row w-full">
                                    <td class="text-start w-56 text-gray-500">Application language</td>
                                    <td>es</td>
                                </div>
                            </td>
                        </tr>
                        <TradeMarkHistory />
                    </table>
                </div>
        </div>
    </main>

</template>

<script lang="ts" setup>
import Classification from '../components/ipDescriptionsComponents/TheClassification.vue';
import GlobalInformation from '../components/ipDescriptionsComponents/TheGlobalInformation.vue';
import TheNameAddressApplicant from '../components/ipDescriptionsComponents/TheNameAddressApplicant.vue';
import TheNameAddressRepresentative from '../components/ipDescriptionsComponents/TheNameAddressRepresentative.vue';
import RelatedMarks from '../components/ipDescriptionsComponents/TheRelatedMarks.vue';
import IpOffice from '../components/ipDescriptionsComponents/TheIpOffice.vue';
import TradeMarkHistory from '../components/ipDescriptionsComponents/TheTradeMarkHistory.vue';

import { ref } from 'vue';

const showPopUp = ref(false);

</script>

<style scoped>
.IpDescription {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.14);
}

table {
    border-collapse: collapse;
}

td {
    word-break: break-all;
}

@media screen and (max-width: 713px) {
    td,th{
        font-size: 10px;
    }
    main{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    table{
        width: 300px;
    }
    .table{
        display: flex;
        justify-content: center;
    }
    h1{
        width: 300px;
    }
}
</style>