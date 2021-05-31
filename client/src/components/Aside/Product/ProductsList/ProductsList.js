import React, { useEffect } from 'react';
import classes from "../Product.module.css";
import CardList from "./CardList";

const ProductsList = ({name}) => {
    return (
        <div>
            <ul className={classes.ProductsListWrapper}>
                {name === 'Карты' &&  <CardList />}
            </ul>
        </div>
    );
};

export default ProductsList;
