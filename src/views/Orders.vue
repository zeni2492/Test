<template>
    <OrderTable>
        <template #actions>
            <Actions />
        </template>
    </OrderTable>
</template>

<script setup>
import OrderTable from '../components/Tables/OrderTable.vue';
import Actions from '../components/Actions.vue';
</script>

<style scoped>
td {
    border: 2px solid rgba(211, 211, 211, 0.365);
    padding-left: 8px;
}
</style>