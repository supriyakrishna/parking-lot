<template>
  <el-card class="box-card add-car">
    <h2>Add new Car to Parking Lot</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      ref="form"
      @submit.native.prevent="addToParkingLot"
    >
      <el-form-item label="Car Plate Number">
        <el-input v-model="carNo" type="text" v-mask="mask"></el-input>
        <span style="float:left"
          >Enter the number in the format of AA-11-AA-1111</span
        >
      </el-form-item>
      <el-form-item label="Choose a color:">
        <el-select v-model="carColor" placeholder="Select">
          <el-option disabled value>Please select one</el-option>
          <el-option value="black">Black</el-option>
          <el-option value="blue">Blue</el-option>
          <el-option value="red">Red</el-option>
          <el-option value="white">White</el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" native-type="submit">Click to Add</el-button>
    </el-form>
  </el-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddCarToLot",
  data() {
    return {
      carNo: "",
      carColor: "",
      mask: "AA-##-AA-####",
      labelPosition: "top",
    };
  },
  methods: {
    ...mapMutations(["addCarToLot"]),
    addToParkingLot() {
      let no = this.carNo;
      let color = this.carColor;
      this.$store.commit("addCarToLot", { no, color });
    },
  },
};
</script>

<style>
.add-car {
  margin-top: 20px;
}
</style>
