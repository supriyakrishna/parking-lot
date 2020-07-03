<template>
  <el-card class="box-card">
    <h2>Search for Cars present in Lot</h2>
    <el-form :label-position="labelPosition" label-width="100px">
      <el-form-item label="Search by slot number, color, registration number">
        <el-input
          v-model="val"
          type="text"
          @input="searchByQuery($event)"
        ></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "SearchParkingLot",
  data() {
    return {
      message: "",
      labelPosition: "top",
      val: "",
    };
  },
  computed: {},
  methods: {
    searchByCarColor() {
      this.$store.commit("searchQuery", this.color);
    },
    searchByQuery(val) {
      console.log(val);
      //console.log(e.target.value);
      this.$store.commit("searchQuery", val);
    },
  },
};
</script>

<style></style>
