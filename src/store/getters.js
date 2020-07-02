const getters = {
  searchByCarColor: (state) => {
    return state.carsTable.filter((item) => item.slot === 1);
  },
  getAllCars(state) {
    let cars = state.carsTable;
    let { query } = state;
    if (state.query === "") return cars;
    else if (query && query !== "") {
      cars = cars.filter((item) => {
        let status = false;
        if (item.color.toUpperCase().includes(query.toUpperCase()))
          status = true;
        if (item.slot.toUpperCase().includes(query.toUpperCase()))
          status = true;
        if (item.regNumber.toUpperCase().includes(query.toUpperCase()))
          status = true;
        return status;
      });
    }
    return cars;
  },
};
export default getters;
