import styled from "styled-components";

export const CardBox = styled.div`
width: 100%;
border: 1px solid lightgray;
border-radius: 10px;
padding: 20px;
margin: 30px 0;
overflow-y: scroll;
height: 250px;
background-color: black;
td{
    text-align: center;
    padding-left: 5px;
    font-size: 18px;
    color: red;
    border: 1px solid red;
}
th{
    border: 1px solid red;
    padding: 5px 5px;
    color: red;
    font-size: 18px;
    font-weight: 700;
}

`;
export const Card = styled.div`
width: 30%;
`;
export const Container = styled.div`
width: 80%;
margin-left: 200px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
export const Spanv = styled.span`
font-weight: bold;
padding-right: 5px;
`;

export const Basket = styled.p`
font-size: 50px;
text-align: center;
color: red;
margin-bottom: 10px;
`;
export const LoadingPage = styled.div`
 background-color: black;
 width: 100px;
`;