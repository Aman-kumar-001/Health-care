import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home/home";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Shop from "./component/shop/shop";
import Cart from "./component/cart/cart";
import Payment from "./component/payment/payment";
import Paymentdone from "./component/paymentDone/paymentdone";
import ConMain from "./component/contact-us main/con-main"
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  const [login, setlogin] = useState();

  const handledata =  (data) => {
    setlogin(data);
   
  };
  console.log("login Data", login);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/done" element={<Paymentdone />}></Route>

          <Route
            path="/register"
            element={login ? <Home login={login} handledata={handledata}/> : <Register Ondata={handledata} />}
          ></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contactus" element={<ConMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//
