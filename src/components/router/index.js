import Vue from "vue";
import VueRouter from "vue-router";
import CreateParkingLot from "../CreateParkingLot";
import parkingLot from "../ParkingLot";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: CreateParkingLot,
  },
  {
    path: "/parkingLot",
    name: "parkingLot",
    component: parkingLot,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
