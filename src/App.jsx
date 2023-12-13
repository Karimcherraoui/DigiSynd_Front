import React from "react";
import store from "./redux/store/store";
import { RouterProvider} from "react-router-dom";

import router from "./router";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store=
    {store}>
  <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  );
}
