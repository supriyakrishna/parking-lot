<template>
  <div>
    <el-table :data="carsList" height="600" style="width: 100%" align="center">
      <el-table-column prop="slot" label="Slot" width="180"> </el-table-column>
      <el-table-column label="Cars present in parking lot">
        <el-table-column
          prop="regNumber"
          label="Registration Number"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="color" label="Color" width="180">
        </el-table-column>
        <el-table-column label="Actions" width="120">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.regNumber"
              @click="removeCar(scope.row.slot)"
              type="text"
              size="small"
            >
              Remove</el-button
            >
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {  mapState } from "vuex";
export default {
  name: "CarsTable",
  props: ["carsList"],
  components: {},
  computed: {
    ...mapState(["carsTable"]),
  },
  methods: {
    removeCar(p) {
      this.$store.commit("deleteCarParking", p);
    },
  },
};
</script>

<style></style>
