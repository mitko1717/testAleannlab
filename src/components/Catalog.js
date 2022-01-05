import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import Product from "./Product";
import Container from "./Container";
import { selectProducts } from "../state/catalog/selectors";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterProducts, getProducts } from "../state/catalog/slice";

const SearchInput = styled.input`
  width: 100%;
  outline: none;
  padding-left: 1rem;
  border: 1px solid #2b99f2;
  background: #eaf5fe;
  color: #2b99f2;
  font-weight: 700;
  ::placeholder {
    font-weight: 100;
  }
`;

const Catalog = () => {
  const inputRef = useRef("");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const filterProd = () => {
    dispatch(filterProducts(inputRef.current.value));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <SearchInput
        ref={inputRef}
        type="text"
        name=""
        placeholder="Search for products"
        // value=""
        onChange={filterProd}
      />
      {products.length > 0 ? (
        <div style={{ color: "#2b99f2", paddingLeft: "1rem" }}>
          found {products.length} products
        </div>
      ) : (
        <div style={{ color: "#751057", paddingLeft: "1rem" }}>
          nothing found
        </div>
      )}

      <Flex full wrap={"true"}>
        {products.map((product) => (
          <FlexItem key={product.id} grow={1} shrink={1} basis="50%">
            <Product {...product} />
          </FlexItem>
        ))}
      </Flex>
    </Container>
  );
};

export default Catalog;
