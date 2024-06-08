<template>
    <InvoiceTable>
        <template #actions>
            <Actions />
        </template>
    </InvoiceTable>
</template>

<script setup>
import Actions from '../components/buttons/Actions.vue';
import InvoiceTable from '../components/Tables/InvoiceTable.vue';
</script>
