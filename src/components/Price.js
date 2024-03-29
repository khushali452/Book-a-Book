import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="100" num="3" type="Basic" />
      <PriceCard price="200" num="5" type="Premium" />
      <PriceCard price="300" num="7" type="Advanced" />
    </Container>
  );
};

export default Price;