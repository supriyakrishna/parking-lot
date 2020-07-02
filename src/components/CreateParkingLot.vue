<template>
  <div>
    <h1>Create Parking Lot</h1>
    <form @submit.prevent="generateParking" class="createForm">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" v-bind:key="index" style="color:red">{{ error }}</li>
        </ul>
      </div>
      <div class="form-group">
        <label for="space">Enter number of parking spaces</label>
        <input type="number" v-model="parkingSpace" name="space" />
      </div>
      <div class="form-group">
        <label>Enter number of Cars in parking lot</label>
        <input type="number" v-model="carsAvaiable" />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "./router";
import RandExp from "randexp";
export default {
  name: "CreateParkingLot",
  computed: {
    ...mapState(["colors"])
  },
  data() {
    return {
      parkingSpace: "",
      carsAvaiable: "",
      errors: [],
      arr: []
    };
  },
  methods: {
    ...mapActions(["generateParkingLot"]),
    generateParking() {
      const { parkingSpace: ps, carsAvaiable: ca, arr } = this;

      for (let i = 0; i < ps; i++) {
        if (i < ca) {
          this.arr.push({
            slot: "A" + i,
            regNumber: new RandExp(
              /^[A-Z]{2}[-][0-9]{2}[-][A-Z]{2}[-][0-9]{4}$/
            ).gen(),
            color: this.colors[Math.floor(Math.random() * this.colors.length)]
          });
        } else {
          this.arr.push({
            slot: "A" + i,
            regNumber: "",
            color: ""
          });
        }
      }
      if (ps && ca) {
        this.generateParkingLot({ ps, ca, arr }).then(() => {
          router.push({
            name: "parkingLot"
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
  }
};
</script>

<style>
.createForm {
  max-width: 750px;
  margin: auto;
  background-color: whitesmoke;
  padding: 25px;
}
.form-group label {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: black;
}
.form-group input {
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 10px;
}
</style>
