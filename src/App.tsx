import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./state/state";

function App() {
  const userName = useStore((state) => state.user.name);
  const changeUserName = useStore((state) => state.user.setName);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          value={userName}
          onChange={(e) => changeUserName(e.target.value)}
        />
        <p>Hello I'm {userName}!</p>
      </header>
    </div>
  );
}

export default App;
