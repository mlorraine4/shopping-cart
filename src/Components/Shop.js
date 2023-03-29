import Item from "./Item";

const Shop = ({ data, addToCart }) => {
  console.log(data);
  return (
    <div>
      <h1>Shop</h1>
      {data.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
