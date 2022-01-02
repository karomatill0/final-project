import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card1, Card1W, Card2, CartPageWrapper, Clean, Decrement, Delete, Df, Img, ImgTr, Increment, Price, Sold, Text } from "./styled";
import cancel from "../../assets/icon/multiply.png";
import { closeA } from "../../redux/modules/popUp/addProductActionA";
import axios from "axios"
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/modules/cart/cartAction";
import MainPageA from "../addProductA";

function CardPage() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const sellProducts = () => {
    const sellData = cart?.map(({ id, chosen }) => ({
      amount: chosen,
      productId: id,
    }));
    console.log(sellData);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/sale/sold",
        sellData
      )
      .then((res) => {
        console.log("succes", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartPageWrapper>
      {mode ? "" : "" } <br />
      <Button onClick={() => dispatch(closeA())} mode={mode}>
        <Img src={cancel} alt="" />
      </Button>
      <Df>
        <Card1W>
        <Card1>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {cart.map(
            (
              {
                id,
                productName,
                price,
                category,
                amount,
                chosen,
                imageId,
                description,
              },
              index
            ) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <ImgTr>
                  <img
                    src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                    alt=""
                  />
                </ImgTr>
                <td>{productName}</td>
                <td>{description}</td>
                <td>
                  <Increment
                    disabled={amount <= chosen}
                    onClick={() => dispatch(increment(index))}
                  >
                    +
                  </Increment>
                  {chosen}
                  <Decrement
                    disabled={chosen <= 1}
                    onClick={() => dispatch(decrement(index))}
                  >
                    -
                  </Decrement>
                </td>
                <td>${price}</td>
                <td>
                  <Delete onClick={() => dispatch(removeFromCart(index))}>
                    delete
                  </Delete>
                </td>
              </tr>
            )
          )}
        </Card1>
        </Card1W>
        <Card2>
          <Price>Price</Price>
          <Text>
          <p>Price:</p>
          <p>{cart.reduce((t, v) => t + v.chosen * v.price, 0)}$</p>
          </Text>
          <Text>
          <p>Amount:</p>
          <p>{cart.reduce((t, v) => t + v.chosen, 0)}</p>
          </Text>
          <Text>
          <p>Total:</p>
          <p>{cart.reduce((t, v) => t + v.chosen * v.price, 0)}$</p>
          </Text>
          <Clean onClick={() => dispatch({ type: "CLEAN" })}>All Clear</Clean>
          <Sold onClick={sellProducts} >Sold</Sold>
        </Card2>
      </Df>
    </CartPageWrapper>
  );
}

export default CardPage;
