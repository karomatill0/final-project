import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import App from "../../App";
import Dashboard from "../dashboard";
import Navbar from "../navbar";
import { Container } from "./styles";
import Products from "../Product";
import History from "../history";
import MainPageA from "../addProductA";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../redux/modules/getProduct/getProductsAction";

function MainPage() {

  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Container>
    </>
  );
}

export default MainPage;
