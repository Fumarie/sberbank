import React from 'react';
import classes from "../ProductCardItem/ProductCardItem.module.css";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import depositSVG from "../../../../images/deposit.svg";
import ProductSeparator from "../ProductSeparator/ProductSeparator";

const ProductDepositItem = ({product}) => {
    const {id, number, balance} = product
    return (
        <li className={classes.ProductListItem}>
            <div className="ProductContainer">
                <Link to={{pathname: `/deposit/${id}`}} className={classes.SingleProductLink}>
                    <div className={classes.ProductIcon}>
                        <span className={classes.Icon}>
                            <ReactSVG src={depositSVG}/>
                        </span>
                    </div>
                    <div className={classes.ProductInfo}>
                        <span className={classes.ContentRow1}>
                            <span className={classes.Name}>Сберегательный счёт</span>
                            <span>
                                <span className={classes.Balance}>{balance}</span>
                                <span> ₽</span>
                            </span>
                        </span>
                        <span className={classes.ContentRow2}>
                            <span>№ {number}</span>
                        </span>
                    </div>
                </Link>
                <ProductSeparator />
            </div>
        </li>
    );
};

export default ProductDepositItem;
