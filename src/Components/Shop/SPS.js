import Item from "./Item";

const SPS = ({ data, addToCart }) => {
  return (
    <div>
      <div className="title">SPS cORALS</div>
      <div className="info">
        SPS Corals are the builders of calcium carbonate reef structures found
        in the wild. The skeleton of these corals is slowly secreted by the
        epidermis at the base of each coral polyp. The rate that this occurs
        depends on the species. Some varieties of SPS corals can grow very
        quickly while some other varieties take seemingly forever to show any
        growth. Stony Corals benefit from clean water and a consistent source of
        calcium, alkalinity, and magnesium.
      </div>
      <div className="corals">
        {data.map((item) => {
          if (item.type === "SPS") {
            return <Item key={item.id} item={item} addToCart={addToCart} />;
          }
        })}
      </div>
    </div>
  );
};

export default SPS;
