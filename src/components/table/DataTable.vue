<template>
  <div class="m-3 overflow-hidden overflow-x-auto">
    <div
      class="
        flex flex-col
        items-start
        gap-1
        md:flex-row md:justify-between md:items-center
        mb-2
      "
    >
      <!-- Number item List -->
      <div class="flex justify-start items-center gap-2">
        <select
          v-model="currentEntries"
          @change="paginateEntries"
          name="quantItem"
          id="quantItem"
          class="
            text-sm text-gray-600
            p-1
            rounded-sm
            border
            outline-none
            focus:border-sky-700
            bg-transparent
          "
        >
          <option v-for="se in showEntries" :key="se" :value="se">
            {{ se }}
          </option>
        </select>
        <label for="quantItem" class="text-sm text-gray-500"
          >resutados por página</label>
      </div>
      <!-- Search -->
      <div class="flex justify-start items-center gap-2">
        <label class="text-sm text-gray-500" for="filter-table"
          >Pesquisar</label
        >
        <input
          v-model="searchInput"
          @keyup="searchEvent"
          class="
            text-sm text-gray-600
            p-1
            rounded-sm
            border
            outline-none
            focus:border-sky-700
          "
          type="text"
        />
      </div>
    </div>

    <!-- Table -->
      <table class="border min-w-full">
        <thead>
          <tr class="p-2 bg-gray-100">
            <th
              class="
                py-3
                px-6
                text-xs
                font-medium
                tracking-wider
                text-left text-gray-700
                uppercase
              "
              v-for="th in columns"
              :key="th.name"
            >
              <div class="flex justify-between items-center font-semibold">
                <span>{{ th.text }}</span>
                <span @click.prevent="sortByColumn(th.name)" class="cursor-pointer" :id="th.name">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                  <svg  xmlns="http://www.w3.org/2000/svg"  class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="td in filteredEntries"
            :key="td"
            class="border-b odd:bg-white even:bg-gray-50 text-left"
          >
            <td v-if="isColId" class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
              {{ td.id }}
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
              <router-link class="text-sky-700" :to="{name:'Home'}">{{ td.name }}{{sortBy}}</router-link>
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
              <router-link class="text-sky-700" :to="{name:'Home'}">{{ td.office }}</router-link>
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
              {{ td.startData }}
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
              {{ td.salary }}
            </td>
          </tr>
        </tbody>
      </table>
    <!-- End Table -->

    <div class="flex justify-between items-center mt-1">
      <p class="text-sm text-gray-600">
        Item {{ showInfo.from }} a {{ showInfo.to }} de
        {{ showInfo.of }} registros
      </p>

      <ul class="flex justify-start items-center gap-[2px]">
        <li
            class="py-1 overflow-hidden rounded-sm bg-white border border-sky-800"
          :class="['bg-sky-700 text-white', { 'opacity-50 cursor-not-allowed': currentPage === 1 }]">
          <a class="px-2 py-1 flex justify-start items-center" href="#" @click.prevent="(currentPage = 1), paginateEntries()"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            </a
          >
        </li>

        <li
          v-for="pag in showPagination"
          :key="pag"
          class="py-1 overflow-hidden rounded-sm bg-white border border-sky-800"
          :class="[
            'text-sky-800',
            { ellipsis: pag === '...', 'bg-sky-700 text-gray-50': pag === currentPage },
          ]"
        >
          <a class="px-3 py=2" href="#" @click.prevent="paginateEvent(pag)">{{ pag }}</a>
        </li>

        <li
          class="py-1 overflow-hidden rounded-sm bg-white border border-sky-800"
          :class="['bg-sky-700 text-white', {'opacity-50 cursor-not-allowed': currentPage === allPages }]">
          <a class="px-2 py-1 flex justify-start items-center"
            href="#"
            @click.prevent="(currentPage = allPages), paginateEntries()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </a
          >
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import * as $ from "alga-js";

export default {
  name: "DataTable",
   props: {
    columns: Array,
    entries: Array,
    isColId:Boolean,
  },

  data() {
    return {
      showEntries: [5, 10, 15, 25, 50, 75, 100],
      currentEntries: 5,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
      sort:'',

    };
  },

  computed: {

    showInfo() {
      return $.array.show(this.getCurrentEntries(), this.currentPage, this.currentEntries);
    },

    showPagination() {
      return $.array.pagination(this.allPages, this.currentPage, 2);
    },
  },
  created() {
    this.filteredEntries = $.array.paginate(
     this.getCurrentEntries(),
      this.currentPage,
      this.currentEntries
    );

    this.allPages = $.array.pages(this.getCurrentEntries(), this.currentEntries);

  },
  methods: {
    paginateEntries() {
      if (this.searchInput.length >= 3) {
        this.searchEntries = $.array.search(this.getCurrentEntries(), this.searchInput);
        this.filteredEntries = $.array.paginate(this.searchEntries, this.currentPage, this.currentEntries);
        this.allPages = $.array.pages(this.searchEntries, this.currentEntries);
      } else {
        this.searchEntries = [];
        this.filteredEntries = $.array.paginate(this.getCurrentEntries(), this.currentPage, this.currentEntries);
        this.allPages = $.array.pages(this.getCurrentEntries(), this.currentEntries);
      }
    },

    paginateEvent(page) {
      this.currentPage = page;
      this.paginateEntries();
    },

    searchEvent() {
      this.currentPage = 1;
      this.paginateEntries();
    },

    getCurrentEntries(){
      return this.searchEntries.length <= 0 ? this.entries : this.searchEntries;
    },

    sortByColumn(column){
      this.sortCol()
      return this.filteredEntries = $.array.sortBy(this.filteredEntries, column, this.sort )
    },

    sortCol(){
     
      if(this.sort === '' ){
        this.sort = 'asc'
      }if(this.sort === 'asc'){
         this.sort = 'desc'
      } else {
         this.sort = 'asc'
      }
    }

  },
};
</script>
