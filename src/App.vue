<template>
  <TheHeader />
  <main class="w-full flex justify-center ">
    <div class="w-95% flex flex-col">
      <div class="mt-10 " v-show="activeItem === 0 || activeItem === 1">
        <TheTrademark />
      </div>
      <nav class="NavBar w-full py-3 border-b-2  border-gray-300">
        <TheNavBar :menuItems="menuItems" :activeItem="activeItem" @updateActive="updateActive" />
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

import TheHeader from './components/TheHeader.vue';
import TheNavBar from './components/TheNavBar.vue';
import TheIpDescription from './views/IpDescription.vue';
import TheTrademark from './views/TheTrademark.vue';
import Contacts from "./views/Contacts.vue";
import Grops from "./views/Grops.vue";
import AdressHistory from "./views/AdressHistory.vue";
import Staff from "./views/Staff.vue";
import Invoices from './views/Invoices.vue';
import Orders from './views/Orders.vue';
import Attachments from './views/Attachments.vue';
import KYC from './views/KYC.vue';
import Networks from './views/Networks.vue';
const menuItems = [ // пропс для нав бара
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

const componentsArray = [ //массив для вывода компонентов циклом
  { component: TheIpDescription, index: 0 },
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

@media screen and (max-width: 576px) {
  .Back{
    display: none;
  }
  .header{
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 713px) {
  .Title{
      width: 90%;
  }

  .containerName{
      width: 90%;
      display: flex;
      flex-direction: column;
      margin: 0;
  }
  .wrapperName{
      width: 100%px;
  }

  td,th{
    font-size: 12px;
  }

  .EmptyRow{
      margin: 0;
  }

  .SpainImage{
    display: none;
  }
}

</style>
