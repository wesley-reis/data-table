<template>
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
              p-[0.18rem]
              rounded-sm
              border
              outline-none
              focus:border-sky-700
            "
          >
            <option v-for="se in showEntries" :key="se" :value="se">{{ se }}</option>
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
            class="
              text-sm text-gray-600
              p-1
              rounded-sm
              border
              outline-none
              focus:border-sky-700
            "
            type="text"
            name="filter"
            id="filter-table"
          />
        </div>
      </div>
      <TableBase :columns="columns" :entries="filteredEntries" />

      <div class="flex justify-between items-center">
        <p>item {{showInfo.from}} a {{showInfo.to}} de {{showInfo.of}} registros</p>
        <ul class="flex justify-start items-center gap-2">
          <li :class="['nav-item', {'disabled':currentPage === 1 }]">
            <a href="#" @click.prevent="currentPage = 1, paginateEntries()">First</a>
          </li>

          <li :class="['nav-item', {'disabled':currentPage === 1 }]">
            <a href="#" @click.prevent="(currentPage < 1) ? currentPage = 1 : currentPage -= 1
            , paginateEntries()">Prev</a>
          </li>

          <li v-for="pag in showPagination" :key="pag" :class="['nav-item', {'ellipsis':pag === '...', 'active':pag === currentPage}]">
            <a href="#" @click.prevent="paginateEvent(pag)">{{pag}}</a>
          </li>

          <li :class="['nav-item', {'disabled':currentPage === allPages }]">
            <a href="#" @click.prevent="(currentPage > allPages) ? currentPage = allPages : currentPage += 1
              , paginateEntries()">Next</a>
          </li>

          <li :class="['nav-item', {'disabled':currentPage === allPages }]">
            <a href="#" @click.prevent="currentPage = allPages, paginateEntries()">Last</a>
          </li>

        </ul>
      </div>
    </div>
  </div>

  <p>
    https://www.youtube.com/watch?v=OgutXmQDq-k&t=174s
  </p>
</template>

<script>
import * as $ from 'alga-js'
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
      currentPage:1,
      allPages:1
    };
  },
  computed:{
    showInfo(){
      return $.array.show(this.entries, this.currentPage, this.currentEntries)
    },

    showPagination(){
      return $.array.pagination(this.allPages, this.currentPage, 2)
    }
  },
  created() {
      this.filteredEntries = $.array.paginate(this.entries, this.currentPage, this.currentEntries)
      this.allPages = $.array.pages(this.entries, this.currentEntries)
  },
  methods: {
    paginateEntries(){
      this.filteredEntries = $.array.paginate(this.entries, this.currentPage, this.currentEntries)
    },

    paginateEvent(page){
      this.currentPage = page
      this.paginateEntries()
    }

  },
};
</script>
