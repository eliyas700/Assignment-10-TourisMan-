import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage/HomePage";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
