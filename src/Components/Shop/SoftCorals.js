import Item from "./Item";

const SoftCorals = ({ data, addToCart }) => {
  return (
    <div>
      <div className="title">SOFT CORALS</div>
      <div className="corals">
        {data.map((item) => {
          if (item.type === "Soft") {
            return <Item key={item.id} item={item} addToCart={addToCart} />;
          }
        })}
      </div>
    </div>
  );
};

export default SoftCorals;