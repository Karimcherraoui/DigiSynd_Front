import React, { useEffect, useLayoutEffect } from "react";
import { RouterProvider} from "react-router-dom";

import router from "./router";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
    useEffect(() => {
      const syndic = localStorage.getItem("syndic")
      if (syndic) {
        const { admin } = JSON.parse(syndic);
        dispatch({ type: "LOGIN", payload: admin });
      }
    }, [dispatch]);
  return (
  <RouterProvider router={router}>
    </RouterProvider>
  );
}
