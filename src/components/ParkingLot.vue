<template>
  <div>
    <h1>Parking Lot Dashboard</h1>
    <div class="flex-box">
      <div class="flex-1">
        <addCarToLot />
        <SearchParkingLot />
      </div>
      <!-- display table -->
      <div v-if="getAllCars != ''" class="flex-2">
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
            <TableRow
              :key="item.slot"
              :row="item"
              v-for="item in getAllCars"
            ></TableRow>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from "./TableRow";
import addCarToLot from "./AddCarToLot";
import { mapState, mapGetters } from "vuex";
import SearchParkingLot from "./SearchParkingLot";
export default {
  name: "ParkingLot",
  components: { TableRow, addCarToLot, SearchParkingLot },
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
#firstTable {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#firstTable td,
#firstTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#firstTable tr:nth-child(even) {
  background-color: #f2f2f2;
}

#firstTable tr:hover {
  background-color: #ddd;
}

#firstTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
.flex-box {
  display: flex;
}
.flex-1,
.flex-2 {
  width: 50%;
}
</style>
