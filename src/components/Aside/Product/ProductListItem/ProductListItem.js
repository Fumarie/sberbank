import React from 'react';
import classes from './ProductListItem.module.css'
import { ReactSVG } from 'react-svg'
import card from '../../../../images/card.svg'

const ProductListItem = ({name, balance, number}) => {
    return (
        <li className={classes.ProductListItem}>
            <div className="ProductContainer">
                <a href="/" className={classes.SingleProductLink}>
                    <div className={classes.ProductIcon}>
                        <span className={classes.Icon}>
                            <ReactSVG src={card} />
                        </span>
                    </div>
                    <div className={classes.ProductInfo}>
                        <span className={classes.ContentRow1}>
                            <span className={classes.Name}>{name}</span>
                            <span>
                                <span className={classes.Balance}>{balance}</span>
                                <span>₽</span>
                            </span>
                        </span>
                        <span className={classes.ContentRow2}>
                            <span>•• {number}</span>
                        </span>
                    </div>
                </a>
                <hr style={{border: 0}}/>
            </div>
        </li>
    );
};

export default ProductListItem;
