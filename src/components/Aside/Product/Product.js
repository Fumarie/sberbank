import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Product.module.css'
import ProductNew from "../ProductNew/ProductNew";
import ProductListItem from "./ProductListItem/ProductListItem";
import collapseTransitions from './collapse.module.css'
import Arrow from "../../Arrow/Arrow";

const products = [
    {
        id: 1,
        type: 'card',
        name: 'Visa Classic',
        number: '6346',
        balance: 1458.85
    }
]

const Product = ({name, index}) => {
    const [collapse, setCollapse] = useState(false)
    const clickHandler = () => {
        if(products)
            setCollapse(!collapse)
    }
    return (
        <li className={classes.OuterListWrapper}>
            <div className={classes.ProductsListHeader}>
                <button className={classes.ProductsListToggler} onClick={() => clickHandler()}>
                    <div className={classes.ProductsListName}>
                        <span className={classes.ProductsListNameTitle}>{name}</span>
                        <Arrow isOpen={collapse} />
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
                                                     number={element.number}
                                                     id={element.id}
                                    />
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
