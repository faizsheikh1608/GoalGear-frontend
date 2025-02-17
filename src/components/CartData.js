import Items from "./Items"

const CartData = () => {
  return (
    <div>
      <div id="items">
        <Items />
      </div>
      <div id="total"></div>
    </div>
  );
};

export default CartData;
