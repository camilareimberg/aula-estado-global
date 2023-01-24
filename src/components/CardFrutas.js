import React from "react";
import styled from "styled-components";

export default function CardFruta(props) {
  const { url, name, price, id } = props.fruta;

  return (
    <CardContainer>
      <Image src={url} alt={name} />
      <p>{name}</p>
      <p>R${price}</p>
      <button onClick={() => props.comprar(id)}>Comprar</button>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 80%;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
