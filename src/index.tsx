import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Home, Statistics, Expenses, NotFound, Base } from "src/routes";

import "src/styles/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Base />}>
        <Route path='/' element={<Home />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='statistics' element={<Statistics />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
