import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Delet,
  Img,
  ImgTd,
  Orders,
  Table,
  Td,
  Text,
  Title,
} from "./styles";
import basket from "../../assets/icon/shopping-cart (1).png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { openA } from "../../redux/modules/popUp/addProductActionA";
import CardPage from "../cardPage";
import { addToCart, removeFromCart } from "../../redux/modules/cart/cartAction";
import { deleteProduct, removeFromProduct } from "../../redux/modules/removeProduct/product";

function Products() {
  const [data, setData] = useState([]);
  const cart = useSelector((state) => state.cart);
  const getData = () => {
    axios
      .get("https://store-management-backend-app.herokuapp.com/api/v1/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const modeA = useSelector((state) => state.modeA);
  const dispatch = useDispatch();
  const { loading, success, error} = data;
  return (
    <>
      <Container>
        <Title>
          <Text>
            <Orders>Order</Orders> 15 Orders found
          </Text>
          {modeA ? "" : <CardPage />} <br />
          <Button onClick={() => dispatch(openA())} modeA={modeA}>
            <Img src={basket} alt="" />
          </Button>
        </Title>
        <Table>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Img Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Duy</th>
            <th>Delete</th>
          </tr>
          {loading && (
          <div className="container">
            <div className="loader"></div>
          </div>
        )}
        {success && ""}
        {error && "Error"}
          {data.filter((v, i) => !cart.some((val) => val.id === v.id)).map(
            (
              {
                id,
                productName,
                amount,
                imageId,
                description,
                category,
                price,
              },
              index
            ) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <ImgTd>
                  <Img
                    src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                    alt=""
                  />
                </ImgTd>
                <td>
                  <b>{productName}</b>
                </td>
                <td>{description}</td>
                <td>{amount}</td>
                <td>${price}</td>
                <td>
                  <Button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          imageId,
                          price,
                          productName,
                          amount,
                          chosen: 1,
                          description,
                          category,
                        },index)
                      )
                    }
                  >
                    <img src={basket} alt="" />
                  </Button>
                </td>
                <td>
                <Delet onClick={() => dispatch(deleteProduct(index))}>
                    delete
                  </Delet>
                </td>
              </tr>
            )
          )}
        </Table>
      </Container>
    </>
  );
}

export default Products;
