// import LoginForm from "@/services/Auth/Auth";

import LoginForm from "../../components/Auth/Auth";
import Order from "../../pages/Orders";



export const PublicRouter = [
  {
    path: "/login",
    element: LoginForm,
  },
  {
    path: "/orders",
    element: Order,
  },

];
