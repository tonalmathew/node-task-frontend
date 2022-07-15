<template>
  <div class="group">
    <div class="input w-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
      <input
        type="email"
        class="form-control p-3 ps-5 shadow bg-body rounded"
        placeholder="Search a company"
        v-model="searchString"
      />
    </div>
    <!-- <h1>hai: {{ company_name }}</h1> -->
    <div
      class="list-group w-50"
      v-if="company_names != '' && showDetails == false"
    >
      <div v-for="company_name in company_names" :key="company_name">
        <button
          @click="displayDetails(company_name.company_name)"
          type="button"
          class="list-group-item list-group-item-action p-3 shadow bg-body"
          aria-current="true"
        >
          {{ company_name.company_name }}
        </button>
      </div>
    </div>
    <div class="card w-50 mt-5" v-if="showDetails">
      <div class="card-body p-4 rounded">
        <h5 class="card-title">{{ company_details[0].company_name }}</h5>
        <table class="table p-5">
          <tr>
            <td>Market price: <span class="text-red">{{company_details[0].current_market_price}}</span></td>
            <td>Debt: <span class="text-red">{{company_details[0].debt_to_equity}}</span></td>
            <td>Yield: <span class="text-red">{{company_details[0].divident_yeald}}</span></td>
          </tr>
          <tr>
            <td>EPS: <span class="text-red">{{company_details[0].eps}}</span></td>
            <td>Market Cap: <span class="text-red">{{company_details[0].market_cap}}</span></td>
            <td>Reserves: <span class="text-red">{{company_details[0].reserves}}</span></td>
          </tr>
          <tr>
            <td>ROCE: <span class="text-red">{{company_details[0].roce}}</span></td>
            <td>ROE Cap: <span class="text-red">{{company_details[0].roe}}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import { debounce } from "lodash";
// import axios from "axios";
import getCompanyDetails from "../getCompany";
export default {
  name: "Notes",
  data() {
    return {
      searchString: "",
      company_names: "",
      company_details: "",
      showDetails: false,
    };
  },
  watch: {
    searchString: debounce(function () {
      this.search();
    }, 1000),
  },
  methods: {
    search() {
      this.showDetails = false;
      getCompanyDetails.getAll(this.searchString).then((res) => {
        this.company_names = res.data.result;
        // console.table(res.data.result);
      });
    },
    displayDetails(cmpny_name) {
      this.showDetails = true;
      getCompanyDetails.getAll(cmpny_name).then((res) => {
        this.company_details = res.data.result;
        // this.showDetails = false;
        // console.log(res.data.result);
      });
    },
  },
};
</script>
<style scoped>
.group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input {
  display: flex;
  align-items: center;
}

.bi-search {
  position: absolute;
  margin-left: 2%;
}

td, table, tr{
  border: none;
  padding: 4px;
  margin: 5px;
}
.text-red {
  color: red;
}
</style>
