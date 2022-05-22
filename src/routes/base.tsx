import { StrictMode } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import "src/styles/reset.css";
import "src/styles/index.css";
import { store } from "src/app/store";

export default function Base() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </StrictMode>
  );
}