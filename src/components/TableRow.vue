<template>
  <tr>
    <td>{{ row.slot }}</td>
    <td>{{ row.regNumber }}</td>
    <td>{{ row.color }}</td>
    <td>
      <button v-if="row.regNumber" @click="removeCar(row.slot)">Remove</button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TableRow",
  props: ["row"],
  methods: {
    ...mapMutations(["deleteCarParking"]),
    removeCar(p) {
      this.$store.commit("deleteCarParking", p);
    }
  }
};
</script>

<style></style>
