<template>
  <div>
    <div class="form-group">
      <input class="input" type="text" :value="message" @input="searchByQuery" />

      <label>Search by slot number, color, registration number</label>

      <!-- <label for="colors">Search Cars by color</label>

      <select
        name="colors"
        id="colors"
        v-model="color"
        @change="searchByCarColor"
      >
        <option disabled value>Please select one</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
      </select>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchParkingLot",
  data() {
    return {
      color: "",
      message: ""
    };
  },
  computed: {},
  methods: {
    searchByCarColor() {
      this.$store.commit("searchQuery", this.color);
    },
    searchByQuery(e) {
      this.$store.commit("searchQuery", e.target.value);
      //console.log(e.target.value);
      // console.log(this.searchString);
      //this.$store.getters.getAllCars(e.target.value);
    }
  }
};
</script>

<style></style>
