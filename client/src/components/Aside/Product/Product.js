import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Product.module.css'
import ProductNew from "../ProductNew/ProductNew";
import collapseTransitions from './collapse.module.css'
import Arrow from "../../Arrow/Arrow";
import ProductsList from "./ProductsList/ProductsList";


const Product = ({name, products}) => {
    const [collapse, setCollapse] = useState(false)
    const clickHandler = () => {
        if(products)
            setCollapse(!collapse)
    }
    return (
        <li className={classes.OuterListWrapper} style={{zIndex: 2}}>
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
                {state => {
                    let styles = {maxHeight: 0, zIndex: 1, overflow: 'hidden', transition: 'all .25s ease'}
                    if(state === 'entered') styles = { ...styles, maxHeight: products.length * 62}
                    return(
                        <div style={styles}>
                            <ProductsList name={name} products={products} />
                        </div>
                    )
                }
                }
            </CSSTransition>
        </li>
    );
};

export default Product;
