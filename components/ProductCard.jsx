import React from "react";

const ProductCard = (props) => {

    return (
        <>
            <div className="products_wrapper">
                <img src={props.photo} alt="Product Photo" className="product_photo" />
                <div className="product_promo-new">{props.promoNew}</div>
                <div className="product_promo">{props.promo}</div>
                <div className="product_descr">{props.description}</div>
                <div className="product_price">{props.price}</div>
            </div>
        </>
    )
}
export default ProductCard;