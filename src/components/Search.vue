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
      />
    </div>
    <h1>hai: {{company_name}}</h1>
  </div>
</template>
<script>
// import axios from "axios";
import getCompanyDetails from "../getCompany"
export default {
  name: "Notes",
  data() {
    return {
      company_name: [],
    };
  },
  created() {
    this.collectData();
  },
  methods: {
    collectData() {
      getCompanyDetails.getAll().then(res => {
        this.company_name = res.data
        console.log(res.data)
      })
    },
  },
};
</script>
<style scoped>
.group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  display: flex;
  align-items: center;
}
/* input{
box-shadow: 3px 3px 9px rgba(59, 59, 59, 0.74);
} */

.bi-search {
  position: absolute;
  margin-left: 2%;
}
</style>
