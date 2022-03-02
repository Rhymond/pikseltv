import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./state/state";

function App() {
  const createUser = useStore((state) => state.user.createUser);
  const form = useStore((state) => state.user.form);
  const setForm = useStore((state) => state.user.setForm);

  const handleLogin = () => {
    createUser(form.email, form.password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {form.error}
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default App;
