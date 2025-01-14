import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Counter from "./Pages/Counter/Counter";
import Todo from "./Pages/Todo/Todo";
import Graph from "./Pages/Graph/Graph";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
