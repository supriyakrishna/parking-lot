const getters = {
  searchByCarColor: (state, val) => {
    console.log(val);
    return state.carsTable.filter((item) => item.slot === 1);
    //console.log(val)
  },
  getAllCars(state) {
    let cars = state.carsTable;
    let { query } = state;
    if (state.query === "") return cars;
    else if (query && query !== "") {
      cars = cars.filter((item) => {
        return item.color === query;
      });
    }
    return cars;
  },
};
export default getters;
