import React from 'react';
import classes from './ProductListItem.module.css'

const ProductListItem = ({name}) => {
    return (
        <li className={classes.ProductListItem}>
            <div className="ProductContainer">
                <a href="/" className={classes.SingleProductLink}>
                    <div className={classes.ProductIcon}>
                        <span className={classes.Icon}>
                        </span>
                    </div>
                    <div className={classes.ProductInfo}>

                    </div>
                </a>
                <hr style={{border: 0}}/>
            </div>
        </li>
    );
};

export default ProductListItem;
