<template>
  <div>
    <h1 class="text-center text-3xl text-gray-500">Data Table</h1>

    <div class="container bg-white mx-auto p-5">
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
              >resutados por página</label
            >
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

        <TableBase :columns="columns" :entries="filteredEntries" />

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
    </div>
  </div>
</template>

<script>
import * as $ from "alga-js";
import TableBase from "../components/table/TableBase.vue";

export default {
  name: "DataTable",
  components: {
    TableBase,
  },
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "name", text: "Nome" },
        { name: "office", text: "Profissão" },
        { name: "startData", text: "Data de Inicio" },
        { name: "salary", text: "Salário" },
      ],
      entries: [
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
        {
          id: 1,
          name: "Wesley",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 2,
          name: "Arthur Nunes",
          office: "Manager",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 3,
          name: "Maria Clara",
          office: "Administradora",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 4,
          name: "Pollyanna",
          office: "Designer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 5,
          name: "Arthur",
          office: "Developer",
          startData: "2022-01-30",
          salary: 23547,
        },
        {
          id: 6,
          name: "Heitor",
          office: "CEO",
          startData: "2022-01-30",
          salary: 23647,
        },
      ],
      showEntries: [5, 10, 15, 25, 50, 75, 100],
      currentEntries: 5,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
     
    };
  },

  computed: {
    showInfo() {
      const getCurrentEntries = this.searchEntries.length <= 0 ? this.entries : this.searchEntries;
      return $.array.show(getCurrentEntries, this.currentPage, this.currentEntries);
    },

    showPagination() {
      return $.array.pagination(this.allPages, this.currentPage, 2);
    },
  },
  created() {
    this.filteredEntries = $.array.paginate(
      this.entries,
      this.currentPage,
      this.currentEntries
    );
    this.allPages = $.array.pages(this.entries, this.currentEntries);
  },
  methods: {
    paginateEntries() {
      if (this.searchInput.length >= 3) {
        this.searchEntries = $.array.search(this.entries, this.searchInput);
        this.filteredEntries = $.array.paginate(this.searchEntries, this.currentPage, this.currentEntries);
        this.allPages = $.array.pages(this.searchEntries, this.currentEntries);
      } else {
        this.searchEntries = [];
        this.filteredEntries = $.array.paginate(this.entries, this.currentPage, this.currentEntries);
        this.allPages = $.array.pages(this.entries, this.currentEntries);
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
  },
};
</script>
