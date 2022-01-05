import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import { selectItems } from "../state/cart/selectors";
import {
  removeItemFromCart,
  addItem,
  deleteWholeProductFromCart,
  // setInputValue,
} from "../state/cart/slice";
import {
  increaseInventory,
  decreaseInventory,
  addQuantityAfterDelete,
} from "../state/catalog/slice";

const CartWrapper = styled(Flex)`
  background-color: #f6f5f5;
  height: 100%;
`;
const ImageWrapper = styled.img`
  height: 75px;
  width: 100%;
`;
const ProductDetails = styled.div`
  padding: 0px 16px;
  text-align: center;
`;
const Text = styled.h4`
  margin: 0;
`;
const Button = styled.button`
  background: #eaf5fe;
  color: #2b99f2;
  padding: 2px;
  margin-left: 0.95rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const InputField = styled.div`
  margin: 0 auto;
  display: flex;
  width: 10rem;
  font-size: 0.8rem;
  justify-content: space-around;
  align-items: center;
`;
const MinusPlus = styled.button`
  font-size: 1.75rem;
  background: none;
  border: none;
  outline: none;
  color: #2b99f2;
  cursor: pointer;
`;
// const Input = styled.input`
//   width: 3rem;
//   text-align: center;
//   margin: 0;
// `;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState(item.quantity);

  const increaseInventoreHandler = () => {
    dispatch(increaseInventory({ item }));
  };

  const decreaseInventoreHandler = () => {
    dispatch(decreaseInventory({ product: item }));
  };

  const updateQuantity = () => {
    dispatch(addQuantityAfterDelete({ item: item, quantity: item.quantity }));
  };

  // const enteredValue = (e) => {
  //   dispatch(setInputValue({value: e.target.value, }))
  // };

  return (
    <Flex row>
      <FlexItem grow={1} shrink={1} basis="25%">
        <ImageWrapper src={item.imgUrl} alt={item.name} />
      </FlexItem>
      <FlexItem grow={1} shrink={1} basis="30%">
        <ProductDetails>
          <Text>{item.name}</Text>
        </ProductDetails>
      </FlexItem>
      <FlexItem grow={1} shrink={1} basis="40%">
        <InputField>
          <MinusPlus
            onClick={() => {
              // setValue(item.quantity);
              dispatch(removeItemFromCart(item));
              increaseInventoreHandler();
            }}
          >
            –
          </MinusPlus>
          <h2 style={{ margin: "0" }}>{item.quantity}</h2>
          {/* <Input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              dispatch(setInputValue({ value: +value, id: item.id }));
            }}
          /> */}
          <MinusPlus
            style={
              item.inventory === 0
                ? { pointerEvents: "none", opacity: "0.5" }
                : {}
            }
            onClick={() => {
              // setValue(item.quantity);
              dispatch(addItem({ product: item }));
              decreaseInventoreHandler();
            }}
          >
            +
          </MinusPlus>
        </InputField>
      </FlexItem>
      <FlexItem grow={1} shrink={1} basis="5%">
        <Text>{`$${item.totalPrice}`}</Text>
      </FlexItem>
      <Button
        onClick={() => {
          dispatch(deleteWholeProductFromCart({ itemToDelete: item }));
          updateQuantity();
        }}
      >
        DEL
      </Button>
    </Flex>
  );
};

const Cart = () => {
  const cartItems = useSelector(selectItems);
  const { totalQuantity, totalSum } = useSelector((state) => state.cart);

  return (
    <CartWrapper column full>
      <Container>
        <h2>Cart ({totalQuantity})</h2>
        {cartItems &&
          cartItems.map((item) => (
            <Row key={item.id}>
              <CartItem item={item} />
            </Row>
          ))}
        {totalQuantity > 0 && <h2>Total Price: {totalSum}</h2>}
      </Container>
    </CartWrapper>
  );
};

export default Cart;
