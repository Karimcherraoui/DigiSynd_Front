import React, { useEffect, useLayoutEffect } from "react";
import { RouterProvider} from "react-router-dom";

import router from "./router";

export default function App() {
  return (
  <RouterProvider router={router}>
    </RouterProvider>
  );
}
