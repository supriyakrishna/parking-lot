<template>
  <div>
    <h1>Parking Lot Dashboard</h1>
    <div class="flex-box">
      <addCarToLot />

      <!-- display table -->
      <div v-if="carsTable != ''" class="flex-2">
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
              v-for="item in carsTable"
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
import { mapState } from "vuex";
export default {
  name: "ParkingLot",
  components: { TableRow, addCarToLot },
  computed: {
    ...mapState(["parkingSpace", "carsAvailable", "carsTable"]),
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    // let s = this.parkingSpace;
    // let c = this.carsAvailable;
    // let colors = ["Black", "White", "Blue", "Red"];
    // for (let i = 0; i < s; i++) {
    //   if (i < c) {
    //     this.carsTable.push({
    //       slot: i,
    //       regNumber: "KA-04-TY-3469",
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     });
    //   } else {
    //     this.carsTable.push({
    //       slot: i,
    //       regNumber: "",
    //       color: ""
    //     });
    //   }
    // }
  },
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
