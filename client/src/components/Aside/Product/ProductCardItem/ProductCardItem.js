import React from 'react';
import classes from './ProductCardItem.module.css'
import { ReactSVG } from 'react-svg'
import card from '../../../../images/card.svg'
import { Link } from 'react-router-dom'
import ProductSeparator from "../ProductSeparator/ProductSeparator";

const ProductCardItem = ({ product }) => {
    let {name, balance, number, id} = product
    console.log(product)
    balance = Number(balance).toFixed(2)
    number.split('')
    const normalNumber = `${number[12] + number[13] + number[14] + number[15]}`

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
                            <span>•• {normalNumber}</span>
                        </span>
                    </div>
                </Link>
                <ProductSeparator />
            </div>
        </li>
    );
};

export default ProductCardItem;
