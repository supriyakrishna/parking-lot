const mutations = {
  createParkingLot(state, payload) {
    state.parkingSpace = payload.ps;
    state.carsAvailable = payload.ca;
  },
  searchQuery(state, payload) {
    state.query = payload;
  },
  createParkingWithCars(state, payload) {
    let { arr } = payload;
    arr.map((item) => {
      return state.carsTable.push({
        slot: item.slot,
        regNumber: item.regNumber,
        color: item.color,
      });
    });
  },
  deleteCarParking(state, payload) {
    let temp = state.carsTable.findIndex((item) => item.slot === payload);
    state.carsTable[temp].regNumber = "";
    state.carsTable[temp].color = "";
  },
  addCarToLot(state, payload) {
    let temp = state.carsTable.filter((slot) => {
      return slot.regNumber === "";
    });
    if (temp != "") {
      let emptySlot = state.carsTable.findIndex(
        (item) => item.slot === temp[0].slot
      );
      state.carsTable[emptySlot].regNumber = payload.no;
      state.carsTable[emptySlot].color = payload.color;
    } else {
      alert("All slots are full");
    }
  },
};
export default mutations;
