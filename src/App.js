import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Login from "./Pages/Login/Login";
import Blog from "./Pages/Blog/Blog";
import Register from "./Pages/Register/Register";
import MyProfile from "./Pages/Dashgoard/MyProfile";
import MyOrder from "./Pages/Dashgoard/MyOrder";
import AddReview from "./Pages/Dashgoard/AddReview";
import Dashboard from "./Pages/Dashgoard/Dashboard";
import RequireAuth from "./Pages/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Shipping from "./Pages/Shipping";
import Footer from "./Components/Shared/Footer";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shipping" element={<Shipping></Shipping>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
