import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ochiq, yopiq } from "./Components/API";

import { AuthContent } from "./Components/Context";

function App() {
  const [isLogged, setIslogged] = useState(false);

  return (
    <AuthContent.Provider value={{ isLogged, setIslogged }}>
      <Routes>
        {isLogged
          ? ochiq.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              );
            })
          : yopiq.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
      </Routes>
    </AuthContent.Provider>
  );
}

export default App;
