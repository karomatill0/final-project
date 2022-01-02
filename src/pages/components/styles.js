import styled from "styled-components";
import mack from "../../assets/image/macbook.jpg";

export const Container = styled.div`
  margin: auto;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 20px 10px 20px;
`;
export const Divd = styled.div`
  margin-top: 80px;
`;
export const FormWrapper = styled.form`
  //background: rgb(131,58,180);
  //background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  background-image: url("https://assets.website-files.com/5d259d9ab18bb04eb82d4dd6/5e5d3838232a583ca605b3d0_Macbook%20Pro.jpg");
  width: 100%;
  padding-top: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: auto;
  display: block;
  padding: 10px;
  padding-top: 70px;
  label {
    display: block;
    font-size: 25px;
    margin: 10px 0px;
    font-weight: 450;
    color: white;
  }
  button {
    font-size: 27px;
    font-weight: 600;
    display: block;
    margin: auto;
    border: none;
    background-color: lightgrey;
    padding: 10px;
    margin-top: 30px;
    border-radius: 5px;
  }
  input {
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: 23px;
    box-shadow: 0 0 10px lightgrey;
    padding: 10px;
  }
`;
export const Imga = styled.img`
  width: 140px;
  position: fixed;
  margin-top: 20px;
  left: 618px;
`;
export const InputA = styled.input`
  cursor: pointer;
  margin-top: 40px;
`;
export const Text = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;
