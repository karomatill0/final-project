import React, { useState } from "react";
import { AddImage, Button, ButtonA, Card1, Card2, CardTitle, Dash, Drop, FormWrapper, Input, Label, Li, Li1, Span, Text, Textarea } from "./styles";

import { ReactComponent as UploadImage } from "../../assets/upload.svg";
import axios from "axios";
import CardPage from "../cardPage";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../redux/modules/navbar/addProductAction";
import Dashboard from "../dashboard";
import { closeA } from "../../redux/modules/popUp/addProductActionA";
import cancel from "../../assets/icon/cancel.png"
import file from "../../assets/icon/open-folder (1).png"

function MainPageA() {
  const [image, setImage] = useState("");
  const [imageProcess, setImageProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const sendImage = (e) => {
    setImageProcess({ loading: true, success: false, error: false });
    e.preventDefault();
    const file = e.target.files[0];

    const form = new FormData();
    form.append("image", file);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
        form
      )
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
        setImageProcess({ loading: false, success: true, error: false });
      })
      .catch((err) => {
        console.log(err);
        setImageProcess({ loading: false, success: false, error: true });
      });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    // const pName = e.target.pName.VALUE;
    const { pName, amount, price, category, description } = e.target;
    const form = {
      productName: pName.value,
      amount: amount.value,
      imageId: image,
      description: description.value,
      category: category.value,
      price: price.value,
    };
    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/product",
        form
      )
      .then((res) => {
        console.log("Succes", res.data);

        e.target.reset();
        setImage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch()
  return (
    <div>
      <FormWrapper onSubmit={submitProduct}>
      {mode ? "" : ""} <br />
        <Button onClick={() => dispatch(close())} mode={mode}>
        <img src={cancel} alt="" />
        </Button>
        <Card2>
        <Input type="text" name="pName" placeholder="Product name" />
        <p>Description</p>
        <Textarea placeholder="description" name="description" />
        <AddImage>Add Image</AddImage>
        <Label>
          {imageProcess.loading ? (
            <b style={{ fontSize: "35px", textAlign: "center" }}>loading...</b>
          ) : imageProcess.error ? (
            <b>Error</b>
          ) : imageProcess.success ? (
            <img
              style={{
                height: "100%",
                margin: "auto",
                display: "block",
                width: "50%",
              }}
              src={
                "https://store-management-backend-app.herokuapp.com/api/v1/attachment/" +
                image
              }
              alt=""
            />
          ) : (
            <>
            <img src={file} alt="" />
            </>
          )}
          <Drop>Drop Or Select <Span>File</Span></Drop>
          <input type="file" onChange={sendImage} />
        </Label>
        </Card2>
        <Card1>
        <Input type="number" name="amount" placeholder="Amount" />
        <Input type="number" name="price" placeholder="Price" />
        <Input type="text" name="category" placeholder="Category" />
        <ButtonA>Create Product</ButtonA>
        </Card1>
      </FormWrapper>
    </div>
  );
}

export default MainPageA;
