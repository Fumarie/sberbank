import React from 'react';
import { Link } from "react-router-dom";
import classes from "../ProductCardItem/ProductCardItem.module.css";
import { ReactSVG } from "react-svg";
import card from "../../../../images/card.svg";

const NoProducts = () => {
    return (
        <div style={{height: 70}}>
            <div className="ProductContainer">
                <Link to="/new/card" className={classes.SingleProductLink}>
                    <div className={classes.ProductIcon}>
                        <span className={classes.Icon}>
                            <ReactSVG src={card} />
                        </span>
                    </div>
                    <div className={classes.ProductInfo}>
                        <span className={classes.ContentRow1}>
                            <span className={classes.Name}>Закажите карту прямо сейчас</span>
                        </span>
                        <span className={classes.ContentRow2}>
                            <span>Просто, быстро, нажёжно</span>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NoProducts;
