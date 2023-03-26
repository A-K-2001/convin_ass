import styled from "styled-components";

export const CustomCard = styled.div`
    /* box-shadow: 4px 4px 8px 4px rgba(0,0,0,0.2); */
    text-align: center;
    padding: 1rem 1rem;
    transition: 0.3s;
    width: 250px;
    background: rgba( 255, 255, 255, 0.25 );
    /* backdrop-filter: blur( 8px ); */
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
export const ButtonContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    gap: 2px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 25%;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: auto;
  padding: 5px;
  background-color: transparent;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover{
    background-color: #e6f9ff;
    color: black;
    transform: scale(1.2);
  }
`;
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
