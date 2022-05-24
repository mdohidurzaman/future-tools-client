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
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
