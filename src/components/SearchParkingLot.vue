<template>
  <div>
    <div class="form-group">
      <label for="colors">Search Cars by color</label>

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
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchParkingLot",
  data() {
    return {
      color: "",
    };
  },
  computed: {},
  methods: {
    searchByCarColor() {
      this.$store.commit("searchQuery", this.color);
    },
  },
};
</script>

<style></style>
