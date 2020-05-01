import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const HealthCenters = lazy(() => import("./pages/healthCenters/index"));
const Vendors = lazy(() => import("./pages/vendors"));
const PopulationDensity = lazy(() => import("./pages/population/index"));
const Requests = lazy(() => import("./pages/requests/index"));

export default [
  {
    name: "Health Centers",
    route: "/health_centers",
    exact: true,
    component: HealthCenters,
  },
  { name: "Vendors", route: "/vendors", exact: true, component: Vendors },
  { name: "Requests", route: "/requests", exact: true, component: Requests },
  {
    name: "Regional Population Densities",
    route: "/population_density",
    exact: true,
    component: PopulationDensity,
  },
  { name: "Dashboard", route: "/", exact: true, component: Dashboard },
];
