import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 60%;
  box-shadow: 0 0 10px grey;
  border-radius: 20px ;
  padding: 30px;
  position: fixed;
  z-index: 99999;
  background-color: white;
  top:45px;
  left: 20%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  height: 150px;
`;
export const Li = styled.li`
padding-left:16px;
`;
export const Text = styled.p`
font-weight: bold;
font-size: 25px;
padding: 0px 10px 10px 20px;
`;
export const Li1 = styled.li`
padding-left:16px;
color: gray;
`;
export const Dash = styled.p`
padding-left: 20px;
`;
export const CardTitle = styled.div`
display: flex;  
width: fit-content;
`;
export const Button = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  border-radius: 50px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  img{
    width: 50px;
  }
`;
export const ButtonA = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  margin-top: 50px;
  border: none;
  color: white;
  background-color: green;
  border-radius: 10px;
  cursor: pointer;
`;
export const AddImage = styled.p`
margin-bottom: 10px;
`;

export const Label = styled.label`
  background-color: lightgrey;
  display: block;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  svg{
 
  }
  img{
    height: 100px;
    width: 100px;
    margin: 0px 20px;
  }
  input{
      display: none;
  }
`;
export const Card1 = styled.div`
width: 50%;
margin: 20px;
`;
export const Span = styled.span`
color: green;
border-bottom: 2px solid green;
`;
export const Card2 = styled.div`
width: 50%;
margin: 20px;
`;
export const Drop = styled.p`
margin-top: 20px;
font-weight: bold;
`;