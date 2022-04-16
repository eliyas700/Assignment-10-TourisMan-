import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import HomePage from "./Pages/Homepage/HomePage";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
