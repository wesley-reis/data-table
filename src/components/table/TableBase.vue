<template>
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
          v-for="th in tableHeader"
          :key="th"
        >
          <div class="flex justify-between items-center">
            <span>{{ th.text }}</span>
            <span class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="td in tableData"
        :key="td"
        class="border-b odd:bg-white even:bg-gray-50 text-left"
      >
        <td v-if="!isColId" class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {{ td.id }}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          <router-link class="text-sky-700" :to="{name:'Home'}">{{ td.name }}</router-link>
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
</template>

<script>
export default {
  name: "TableBase",
  props: {
    columns: Array,
    entries: Array,
    isColId:Boolean,
  },
  computed: {
    tableHeader() {
      return this.columns || [];
    },
    tableData() {
      return this.entries || [];
    },
  },
};
</script>

<style>
</style>