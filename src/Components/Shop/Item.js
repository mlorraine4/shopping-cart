import { formatter } from "../data";

const Item = ({item, addToCart}) => {
    return (
        <div className="shopItem">
            <img className="itemImg" src={item.imgURL}></img>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">{formatter.format(item.price)}</div>
            <button className="cartBtn" onClick={(e)=>{addToCart(item, e)}}>add to cart</button>
        </div>
    )
};

export default Item;