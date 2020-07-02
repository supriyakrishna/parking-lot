<template>
  <table id="firstTable">
    <thead>
      <tr>
        <th>Slots</th>
        <th>Reistration Number</th>
        <th>Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <TableRow :key="item.slot" :row="item" v-for="item in carsList"></TableRow>
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow";
import { mapGetters, mapState } from "vuex";
export default {
  name: "CarsTable",
  props: ["carsList"],
  components: { TableRow },
  computed: {
    ...mapGetters(["getAllCars"]),
    ...mapState(["carsTable"])
  }
};
</script>

<style>
</style>