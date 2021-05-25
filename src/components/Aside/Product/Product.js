import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Product.module.css'
import ProductNew from "../ProductNew/ProductNew";
import ProductListItem from "./ProductListItem/ProductListItem";
import collapseTransitions from './collapse.module.css'

const products = [
    {
        type: 'card',
        name: 'Visa Classic',
        number: '6346',
        balance: 1458.85
    }
]

const Product = ({name, index}) => {
    const [collapse, setCollapse] = useState(false)

    return (
        <li className={classes.OuterListWrapper}>
            <div className={classes.ProductsListHeader}>
                <button className={classes.ProductsListToggler} onClick={() => setCollapse(!collapse)}>
                    <div className={classes.ProductsListName}>
                        <span className={classes.ProductsListNameTitle}>{name}</span>
                        <span className={classes.ThemedIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                fillRule="evenodd"
                                d="M15.293 9.883c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L12 16.004l-4.707-4.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L12 13.176l3.293-3.293z"></path>
                            </svg>
                        </span>
                    </div>
                </button>
                <ProductNew/>
            </div>
            <CSSTransition
                in={collapse}
                timeout={100}
                mountOnEnter
                unmountOnExit
                classNames={collapseTransitions}
            >
                {state =>
                    <div>
                        <div>
                            <ul className={classes.ProductsListWrapper}>
                                {index === 0 && products.map((element, index) =>
                                    <ProductListItem key={index}
                                                     name={element.name}
                                                     balance={element.balance}
                                                     number={element.number}/>
                                    )}
                            </ul>
                        </div>
                    </div>
                }
            </CSSTransition>
        </li>
    );
};

export default Product;
