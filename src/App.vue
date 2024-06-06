<template>
  <Header />
  <main class="w-full flex justify-center ">
    <div class="w-95% flex flex-col">
      <div class="mt-10 " v-show="activeItem === 0 || activeItem === 1">
        <Trademark />
      </div>
      <nav class="NavBar w-full py-3 border-b-2  border-gray-300">
        <NavBar :menuItems="menuItems" :activeItem="activeItem" @updateActive="updateActive" />
      </nav>
      <div v-for="item in componentsArray" :key="item.index">
        <div v-show="activeItem === item.index">
          <component :is="item.component"></component>
        </div>
    </div>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import IpDescription from './views/IpDescription.vue';
import Trademark from './components/Trademark.vue';
import Contacts from "./views/Contacts.vue";
import Grops from "./views/Grops.vue";
import AdressHistory from "./views/AdressHistory.vue";
import Staff from "./views/Staff.vue";
import Invoices from './views/Invoices.vue';
import Orders from './views/Orders.vue';
import Attachments from './views/Attachments.vue';
import KYC from './views/KYC.vue';
import Networks from './views/Networks.vue';
const menuItems = [
  "IP right description",
  "Contacts",
  "Groups",
  "Address",
  "Staff",
  "Invoices",
  "Orders",
  "Attachments",
  "KYC",
  "Logs",
  "Networks"
]

const componentsArray = [
  { component: IpDescription, index: 0 },
  { component: Contacts, index: 1 },
  { component: Grops, index: 2 },
  { component: AdressHistory, index: 3 },
  { component: Staff, index: 4 },
  { component: Invoices, index: 5 },
  { component: Orders, index: 6 },
  { component: Attachments, index: 7 },
  { component: KYC, index: 8 },
  { component: Networks, index: 10 },
];


console.log(componentsArray);

const activeItem = ref(0);

function updateActive(index) {
  activeItem.value = index
  console.log(index)
}

</script>


<style>
.NavBar {
  position: relative;
  top: 0px;
}


</style>
