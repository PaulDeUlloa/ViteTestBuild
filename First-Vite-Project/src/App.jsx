import "./App.css";
import { Routes, Route } from "react-dom";
import CardClass from "./components/CardClass.jsx";

function App() {
  return (
    <>
      <p>Hello Vite World!</p>
      <Routes>
        <Route path="/" element={<CardClass />} />
      </Routes>
    </>
  );
}

export default App;
