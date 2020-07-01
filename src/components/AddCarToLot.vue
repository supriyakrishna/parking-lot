<template>
  <form @submit.prevent="addToParkingLot" >
    <div class="form-group">
      <label>Car Plate Number</label>
      <input type="text" v-model="carNo" v-mask="mask">
    </div>
    <div class="form-group">
      <label for="colors">Choose a color:</label>

      <select name="colors" id="colors" v-model="carColor">
        <option disabled value>Please select one</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
      </select>
      <!-- <input type="text" v-model="carColor"> -->
    </div>
    <input type="submit" value="Click to Add" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddCarToLot",
  data() {
    return {
      carNo: "",
      carColor: "",
      mask: "AA-##-AA-####"
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

<style></style>
