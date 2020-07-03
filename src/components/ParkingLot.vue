<template>
  <div>
    <h1>Parking Lot Dashboard</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <SearchParkingLot />
        <addCarToLot />
      </el-col>

      <!-- display table -->
      <el-col :span="12">
        <CarsTable :carsList="getAllCars" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CarsTable from "./CarsTable";
import addCarToLot from "./AddCarToLot";
import { mapState, mapGetters } from "vuex";
import SearchParkingLot from "./SearchParkingLot";
export default {
  name: "ParkingLot",
  components: { addCarToLot, SearchParkingLot, CarsTable },
  computed: {
    ...mapState(["parkingSpace", "carsAvailable"]),
    ...mapGetters(["getAllCars"]),
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style>
</style>
