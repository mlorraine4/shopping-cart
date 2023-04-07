import Item from "./Item";

const LPS = ({ data, addToCart }) => {
  return (
    <div>
      <div className="title">LPS CORALS</div>
      <div className="corals">
        {data.map((item) => {
          if (item.type === "LPS") {
            return <Item key={item.id} item={item} addToCart={addToCart} />;
          }
        })}
      </div>
    </div>
  );
};

export default LPS;
