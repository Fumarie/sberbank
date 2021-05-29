import React from 'react';
import classes from "../Product.module.css";
import ProductCardItem from "../ProductCardItem/ProductCardItem";
import ProductDepositItem from "../ProductDepositItem/ProductDepositItem";

const ProductsList = ({name, products}) => {
    return (
        <div>
            <ul className={classes.ProductsListWrapper}>
                {products && products.map((element, index) => {
                    if (name === 'Карты') return (<ProductCardItem key={index} product={element} />)
                    if (name === 'Вклады и счета') return (<ProductDepositItem product={element} key={index}/>)
                })}
            </ul>
        </div>
    );
};

export default ProductsList;
