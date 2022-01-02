import styled from "styled-components"

export const Img = styled.img`
width: 25px;
`;
export const NavbarW = styled.div`
padding: 20px 30px 20px 40px;
width: fit-content;
position: fixed;
background-color: white;
z-index: 1;
h3{
    font-size: 20px;
    padding-top: 30px;
}
`;
export const Card = styled.div`
display: flex;
align-items: center;
margin-top: 70px;
cursor: pointer;
background-color: ${({ active }) => (active ? "lightskyblue" : "")};
padding:  5px 10px;
color: ${({ activ }) => (activ ? "white" : "")};
a{
    font-weight: bold;
    color: black;
    text-decoration: none;
}

`;
export const Card1 = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
cursor: pointer;
background-color: ${({ active }) => (active ? "lightskyblue" : "")};
padding:  5px 10px;
a{
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin-left: 10px;
}
p{
    font-weight: bold;
    margin-left: 10px;
    color: black;
    text-decoration: none;
}
`;