import React, { useEffect } from "react";
import logo from "./logo.svg";

import { useAppDispatch } from "./app/hooks";

import { Counter } from "./features/counter/Counter";
import { fetchAsync } from "./features/timer/timerSlice";

import { Timer } from "./features/timer/Timer";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let updateTime = setInterval(() => {
      dispatch(fetchAsync());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Timer zone="Pacific/Auckland" />
      </header>
    </div>
  );
}

export default App;
