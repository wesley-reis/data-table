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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
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
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {{ td.id }}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {{ td.name }}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {{ td.office }}
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