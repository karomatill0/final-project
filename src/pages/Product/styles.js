import styled from "styled-components"

export const Container = styled.div`
padding: 10px;
border-radius: 5px;
background-color: #e5e5e5;
margin-top: 40px;
width: 84.5%;
margin-left: 200px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 13px;
`;
export const Orders = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
export const Button = styled.button`
  padding: 7px;
  background-color: lightskyblue;
  border: none;
  border-radius:5px;
  cursor: pointer;
  img{
      width: 50px;
  }
`;
export const Img = styled.img`
width: 100%;
padding:0px;
`;
export const ImgTd = styled.td`
padding: 0px !important;
`;
export const Table = styled.table`
width: 100%;
  margin: 20px 0;
  padding: 10px;
  th,
  td {
    text-align: center;
    padding: 3px;
    margin: 0px;
    box-shadow: 0 0 10px gray;

    img{
        width: 50px;
    }
  }
  th{
    padding: 8px;
  }
  button{
    padding: 3px;
    margin: auto;
    width: fit-content;
    text-align: center;
    padding: auto;
    border: none;
    background-color: rgba(0,0,0,0);
    box-shadow: 0 0 10px lightgrey;
    cursor: pointer;
    margin-left: 5px;
  }
`;
export const Delet = styled.button`
justify-content: center;
align-items: center;
font-size: 18px;
background-color: green !important ;
margin-left: 15px !important;
background: #383838;
background: -webkit-linear-gradient(top right, #383838, #F4F3FF);
background: -moz-linear-gradient(top right, #383838, #F4F3FF);
background: linear-gradient(to bottom left, #383838, #F4F3FF);
color: white;
padding: 8px !important;
font-weight: 700;
border-radius: 5px;
`;
