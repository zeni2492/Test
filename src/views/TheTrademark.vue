<template>
    <div class="w-full flex justify-center bg-white rounded-lg TradeContainer">
        <div class="w-95% h-20 FlexRow justify-between items-center text-xl TradeWrapper">
            <h2 class="text-Custom-Dark-Blue Number">Trademark: 40202026151S</h2>

            <div class="FlexRow font-thin Components">
                <div class="ImagesContainer">
                    <TheTrademarkImages/>
                </div>
                <div class="FlexRow ButtonsContainer">
                        <RenewButton />
                        <ToClientListButton/>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import TheTrademarkImages from '../components/TheTrademarkImages.vue';
import RenewButton from '../components/buttons/RenewButton.vue';
import ToClientListButton from '../components/buttons/ToClientListButton.vue';
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .TradeWrapper{
        display: flex;
        flex-direction: column;
        height: 90px;
        padding: 10px;
    }
    h2{
        text-align: center;
    }
    .Components{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}

@media screen and (max-width: 576px) {
    .Number{
        white-space: nowrap;
    }
    .TradeContainer{
        height: 150px;
        padding-bottom: 8px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0;
    }
    .Components{
        display: flex;
        flex-direction: column;
    }
    .ButtonsContainer{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }
    .ImagesContainer{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    .Renew{
        margin-top: 8px;
    }
    .ClientList{
        margin-top: 8px;
    }
    
}
</style>
