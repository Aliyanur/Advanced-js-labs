import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div style={{ padding: "30px" }}>
      <h1>Custom Hooks Demo</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <p>Saved Name: {name}</p>
    </div>
  );
}

export default App;