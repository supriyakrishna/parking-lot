<template>
  <div>
    <h1>Create Parking Lot</h1>
    <el-card class="box-card card">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        ref="form"
        @submit.native.prevent="generateParking"
      >
        <el-form-item label="Enter number of parking spaces">
          <el-input v-model="parkingSpace" type="number"></el-input>
        </el-form-item>

        <el-form-item label="Enter number of Cars in parking lot">
          <el-input v-model="carsAvaiable" type="number"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">Submit</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "./router";
import RandExp from "randexp";
export default {
  name: "CreateParkingLot",
  computed: {
    ...mapState(["colors"]),
  },
  data() {
    return {
      labelPosition: "top",
      parkingSpace: "",
      carsAvaiable: "",
      errors: [],
      arr: [],
    };
  },
  methods: {
    ...mapActions(["generateParkingLot"]),
    generateParking() {
      const { parkingSpace: ps, carsAvaiable: ca, arr } = this;
      if (parseInt(ps) < parseInt(ca)) {
        alert(
          "no. of cars in parking lot should be less than number of parking space"
        );
      } else {
        for (let i = 0; i < ps; i++) {
          if (i < ca) {
            this.arr.push({
              slot: "A" + i,
              regNumber: new RandExp(
                /^[A-Z]{2}[-][0-9]{2}[-][A-Z]{2}[-][0-9]{4}$/
              ).gen(),
              color: this.colors[
                Math.floor(Math.random() * this.colors.length)
              ],
            });
          } else {
            this.arr.push({
              slot: "A" + i,
              regNumber: "",
              color: "",
            });
          }
        }
        if (ps && ca) {
          this.generateParkingLot({ ps, ca, arr }).then(() => {
            router.push({
              name: "parkingLot",
            });
          });
        }

        this.errors = [];
        if (!ps) {
          this.errors.push("number of parking spaces is required");
        }
        if (!ca) {
          this.errors.push("number of cars is required");
        }
      }
    },
  },
};
</script>

<style>
.card {
  max-width: 500px;
  margin: auto;
  border: 15px solid #ebeef5 !important;
}

.el-form-item__label {
  float: left !important;
}
</style>
