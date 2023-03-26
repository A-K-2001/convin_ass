import styled from "styled-components";
export const Modal = styled.div`


  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 

`;

export const ModelContent = styled.div`

  text-align: center;
  background-color: #fefefe;
  margin: 10% auto; 
  padding: 20px;
  border: 2px solid #888;
  width: 80%; 
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.h2`
  margin-left: 2%;
  display: inline;
  margin-right: 4rem;
` 
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Box = styled.div`
  padding: 2%;

`;
export const PBox = styled.div`
 background-color: #99e6ff;
`;


export const Button = styled.button`

  /* background-color:  */
  /* border: 1px solid #e7e7e7; */
  /* border-radius: 4px; */
  border-color: black;
  color: black;
  padding: 5px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  margin: 1rem 1rem 1rem 1rem ;
  background: rgba( 255, 255, 255, 0.35 );
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  cursor: pointer;
  &:hover{
    background-color: #000033;
    color: white;
  }


`;
