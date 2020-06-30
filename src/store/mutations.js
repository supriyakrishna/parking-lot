const mutations = {
  createParkingLot(state, payload) {
    state.parkingSpace = payload.ps;
    state.carsAvailable = payload.ca;
  },
  createParkingWithCars(state) {
    let { parkingSpace: s, carsAvailable: c, colors } = state;
    for (let i = 0; i < s; i++) {
      if (i < c) {
        state.carsTable.push({
          slot: i,
          regNumber: "KA-04-TY-3469",
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      } else {
        state.carsTable.push({
          slot: i,
          regNumber: "",
          color: "",
        });
      }
    }
  },
  deleteCarParking(state, payload) {
    state.carsTable[payload].regNumber = "";
    state.carsTable[payload].color = "";
  },
};
export default mutations;
