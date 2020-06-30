<template>
  <form @submit.prevent="addToParkingLot" class="flex-1">
    <div class="form-group">
      <label>Car Reg Number</label>
      <input type="text" v-model="carNo" />
    </div>
    <div class="form-group">
      <label>Color</label>
      <input type="text" v-model="carColor" />
    </div>
    <input type="submit" value="Click to Add" />
  </form>
</template>

<script>
export default {
  name: "AddCarToLot",
  data() {
    return {
      carNo: "",
      carColor: "",
    };
  },
  methods: {
    // deleteCar(id) {
    // //   this.carsTable[id].regNumber = "";
    // //   this.carsTable[id].color = "";
    // // },
    // // addToParkingLot() {
    // //   let temp = this.carsTable.filter(slot => {
    // //     return slot.regNumber === "";
    // //   });
    // //   let emptySlot = temp[0].slot;
    // //   this.carsTable[emptySlot].regNumber = this.carNo;
    // //   this.carsTable[emptySlot].color = this.carColor;
    // // }
  },
};
</script>

<style></style>
