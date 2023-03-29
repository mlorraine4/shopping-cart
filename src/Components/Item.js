const Item = ({item, addToCart}) => {
    return (
        <div className="shopItem">
            <img className="itemImg"></img>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">${item.price}</div>
            <button onClick={()=>{addToCart(item)}}>add to cart</button>
        </div>
    )
};

export default Item;