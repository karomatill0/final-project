import React from "react";
import {
  Basket,
  Card,
  CardBox,
  Container,
  ContainerWr,
  LoadingPage,
  Spanv,
} from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductActionHistory } from "../../redux/modules/getProduct/getProductsAction";
import "./index.css"

function History() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.getProduct);
  useEffect(() => {
    dispatch(getProductActionHistory());
  }, []);
  const { loading, success, error, data } = product;
  return (
    <>
      <Container>
        {loading && (
          <div className="bod" >
          <div className="loader" >
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        )}
        {success && ""}
        {error && "Error"}
        {product.data.map(({ id, productList, createdAt }, index) => (
            <Card>
            <CardBox key={id}>
              <Basket>🛒{index + 1}</Basket>
              <th>id</th>
              <th>price</th>
              <th>amount</th>
              <th>name</th>
              {productList.map(
                ({
                  amount,
                  product: { productName, price, id, description },
                }) => (
                  <tr>
                    <td>{id}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                    <td>{productName}</td>
                  </tr>
                )
              )}
            </CardBox>
            </Card>  
        ))}
      </Container>
    </>
  );
}

export default History;
