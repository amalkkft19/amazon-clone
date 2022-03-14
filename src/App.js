import "./App.css";
import React, { useEffect } from "react";
// import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/context/StateProvider";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KcPO4SJ1ZYYtexaJTWYxdatgAecsDPXvlhe3JJpozKcbkwdvKOC4IxMQnWIp5mqhYl1ZIACLLSx7EQFGz3psn6e00Y4XgbmL4"
);

function App() {
  const [{}, dispatch] = useStateValue();
  //to check someone islogedin already
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);

      if (authUser) {
        //the user was loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user was loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
