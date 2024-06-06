<template>
    <NetworkTable>
        <template #actions>
            <Actions />
        </template>
    </NetworkTable>
    <BluredNetwork>
        <template #actions>
            <Actions />
        </template>
    </BluredNetwork>
</template>

<script lang="ts" setup>
import Actions from '../components/Actions.vue';
import NetworkTable from '../components/Tables/NetworkTable.vue';
import BluredNetwork from '../components/Tables/BluredNetwork.vue';
</script>

<style>

</style>