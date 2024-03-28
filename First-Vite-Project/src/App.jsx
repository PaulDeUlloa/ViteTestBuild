import "./App.css";
import { Routes, Route } from "react-dom";
import Duel from "./components/Duel.jsx";

function App() {
  return (
    <>
      <p>Hello Vite World!</p>
      <Routes>
        <Route path="/" element={<Duel />} />
      </Routes>
    </>
  );
}

export default App;
