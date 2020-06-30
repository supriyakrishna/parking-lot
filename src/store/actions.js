const actions = {
  generateParkingLot({ commit }, payload) {
    commit("createParkingLot", payload);
    return new Promise((resolve) => {
      this.dispatch("createCarsParking", payload).then(() => {
        resolve();
      });
    });
  },
  createCarsParking({ commit }, payload) {
    commit("createParkingWithCars", payload);
  },
};
export default actions;
