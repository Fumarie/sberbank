import React from 'react';
import classes from './ProductListItem.module.css'
import { ReactSVG } from 'react-svg'
import card from '../../../../images/card.svg'
import { Link } from 'react-router-dom'

const ProductListItem = ({name, balance, number, id}) => {
    return (
        <li className={classes.ProductListItem}>
            <div className="ProductContainer">
                <Link to={{pathname: `/card/${id}`}} className={classes.SingleProductLink}>
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
                                <span> ₽</span>
                            </span>
                        </span>
                        <span className={classes.ContentRow2}>
                            <span>•• {number}</span>
                        </span>
                    </div>
                </Link>
                <hr style={{border: 0}}/>
            </div>
        </li>
    );
};

export default ProductListItem;
