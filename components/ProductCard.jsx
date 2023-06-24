import React from "react";

const ProductCard = (props) => {

    return (
        <>
            <div className="product_wrapper">
                <img src={props.photo} alt="Product Photo" />
                <h2>{props.promo}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </>
    )
}
export default ProductCard;