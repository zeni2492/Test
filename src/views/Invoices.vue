<template>
    <InvoiceTable>
        <template #actions>
            <Actions />
        </template>
    </InvoiceTable>
</template>

<script setup>
import Actions from '../components/Actions.vue';
import InvoiceTable from '../components/Tables/InvoiceTable.vue';
</script>

<style scoped>

</style>