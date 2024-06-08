<template>
    <div class="container flex flex-row justify-between w-full">
        <div>
            <img class="ActionImages Message" src="../../assets/actionsIcon/message-circle-02-svgrepo-com.svg" alt="">
        </div>
        <div>
            <img class="ActionImages Mail" src="../../assets/actionsIcon/mail-edit-svgrepo-com.svg" alt="">
        </div>
        <div class="ThreeDotsContainer">
            <img class="ActionImages ThreeDots"  src="../../assets/actionsIcon/three-dots-vertical-svgrepo-com.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
@media screen and (max-width: 941px) {
    .container{
        display: flex;
        justify-content: center;
    }
    .Message{
        display: none;
    }
    .Mail{
        display: none;
    }

    .ThreeDotsContainer{
        display: flex;
        width: 20px;
    }
    .ThreeDots{
        width: 20px;
        height: 20px;
        margin: 0 auto;
    }
}
</style>