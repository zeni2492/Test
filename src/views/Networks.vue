<template>
    <NetworkTable>
        <template #actions>
            <Actions />
        </template>
    </NetworkTable>
    
    <BluredNetworkTable>
        <template #actions>
            <Actions />
        </template>
    </BluredNetworkTable>
</template>

<script lang="ts" setup>
import Actions from '../components/buttons/Actions.vue';
import NetworkTable from '../components/Tables/NetworkTable.vue';
import BluredNetworkTable from '../components/Tables/BluredNetworkTable.vue';
</script>
