import styled from "styled-components";

export const CartPageWrapper = styled.div`
  width: 85%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  position: fixed;
  top: 100px;
  left:130px;
  z-index: 10000;
  border-radius:5px 25px 5px 5px;
  background-color: #E5E5E5;
  box-shadow:0 0 10px gray;
`;
export const Df = styled.div`
display: flex;
align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
display:flex;
width: fit-content;
margin: auto;
p{
  font-weight: 600;
  text-align: center;
  display: inline;
  font-size: 20px;
  padding-top:3px;
}
`;
export const Clean = styled.button`
background-color: red;
color: white;
padding: 8px;
font-weight: bold;
border: none;
border-radius: 3px;
font-size: 17px;
margin: auto;
width: fit-content;
display: block;
margin-top: 20px;
cursor: pointer;
`;
export const Sold = styled.button`
background-color: red;
color: white;
padding: 8px;
font-weight: bold;
border: none;
border-radius: 3px;
font-size: 17px;
margin: auto;
cursor: pointer;
width: fit-content;
display: block;
margin-top: 10px;
`;
export const Price = styled.p`
font-size: 30px;
font-weight: bold;
padding: 10px 10px 0px 10px;
`;
export const Card2 = styled.div`
width:38%;
background-color: white;
border-radius: 10px;
margin-top: 30px;
padding: 10px;
`;
export const Card1W = styled.div`
width: fit-content;
overflow-y: scroll;
height: 400px;
margin: 15px 10px 0px 0px ;
`;
export const Card1 = styled.table`
  width: 10%;
  background-color: white;
  padding: 3px;
  border-radius:5px;
  width: 60%;
  height: 50px;
  margin: 0px;
  tr{
  width: 90%;
  box-shadow: 0 0 10px lightgray;
  }
  th,
  td {
    text-align: center;
    width: 100%;
    padding: 10px;
    margin: 0px;
    width: fit-content;
    height: 10px;
    box-shadow: 0 0 10px lightgray;
    img{
        width: 100%;
    }
  }
`;
export const Button = styled.button`
width: 50px;
border-radius: 50px;
border: none;
background-color:rgba(0,0,0,0);
position: absolute;
top: 0px;
right: 0px;
cursor: pointer;
`;
export const Img = styled.img`
width: 100%;
`;
export const Increment = styled.button`
border: none;
background-color: green;
color: white;
padding: 5px 10px;
border-radius: 5px;
margin-right: 0px;
cursor: pointer;
`;
export const ImgTr = styled.td`
padding: 0px !important;
width: 100%;
`;
export const Decrement = styled.button`
border: none;
background-color: red;
color: white;
padding: 5px 10px;
border-radius: 5px;
margin-left: 0px;
cursor: pointer;
`;
export const Delete = styled.button`
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
color: white;
cursor: pointer;
padding: 5px;
border: none;
border-radius: 3px;
`;