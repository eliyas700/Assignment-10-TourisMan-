import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/CheckOut/Checkout";
import Footer from "./Pages/Footer/Footer";
import HomePage from "./Pages/Homepage/HomePage";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
