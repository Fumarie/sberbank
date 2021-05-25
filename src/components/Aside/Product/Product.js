import React, { useState } from 'react';
import { Transition } from "react-transition-group";
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

const Product = ({name}) => {
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
            <Transition
                in={collapse}
                timeout={100}
                mountOnEnter
                unmountOnExit
                classNames={collapseTransitions}
            >
                {state => {
                    // let blockStyle = {
                    //     maxHeight: 0,
                    //     transition: 'max-height 2500ms ease 0s'
                    // }
                    // console.log(state)
                    // if(state === 'entered') {
                    //     blockStyle = {
                    //         maxHeight: '100%',
                    //         transition: 'max-height 2500ms ease 0s'
                    //     }
                    // }
                    // if(state === 'exiting') {
                    //     blockStyle = {
                    //         maxHeight: '100%',
                    //         transition: 'max-height 2500ms ease 0s'
                    //     }
                    // }
                    // if(state === 'exited') {
                    //     blockStyle = {
                    //         maxHeight: 0
                    //     }
                    // }
                    return(
                    <div>
                        <div>
                            <ul className={classes.ProductsListWrapper}>
                                {products.map((element, index) => <ProductListItem key={index} name={element.name}/>)}
                            </ul>
                        </div>
                    </div>)
                }
                }
            </Transition>
        </li>
    );
};

export default Product;
