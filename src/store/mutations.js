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
    state.carsTable[payload].regNumber = "";
    state.carsTable[payload].color = "";
  },
  addCarToLot(state, payload) {
    let temp = state.carsTable.filter((slot) => {
      return slot.regNumber === "";
    });
    let emptySlot = temp[0].slot;
    state.carsTable[emptySlot].regNumber = payload.no;
    state.carsTable[emptySlot].color = payload.color;
  },
};
export default mutations;
