import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
// import Logo from "./components/Logo";

const StyledFlex = styled(Flex)``;

const App = () => {
  return (
    <StyledFlex>
      <FlexItem basis="60%">
        <Catalog />
      </FlexItem>
      <FlexItem basis="40%">
        {/* <Logo /> */}
        <Cart />
      </FlexItem>
    </StyledFlex>
  );
};

export default App;
