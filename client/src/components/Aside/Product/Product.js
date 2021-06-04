import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Product.module.css'
import ProductNew from "../ProductNew/ProductNew";
import collapseTransitions from './collapse.module.css'
import Arrow from "../../Arrow/Arrow";
import ProductsList from "./ProductsList/ProductsList";
import { getUserCards } from "../../../redux/actions/products";
import { useDispatch, useSelector } from "react-redux";
import NoProducts from "./NoProducts/NoProducts";

const Product = ({name}) => {
    const dispatch = useDispatch()
    const [collapse, setCollapse] = useState(false)

    const {cards} = useSelector(state => state.products)
    const {id} = useSelector(state => state.profile.profile)


    console.log('CARDS', cards)
    const clickHandler = async () => {
        setCollapse(!collapse)
        if (!collapse) {
            switch (name) {
                case 'Карты': {
                    if (id)
                        await dispatch(getUserCards(id))
                }
            }
        }
    }

    return (
        <li className={classes.OuterListWrapper} style={{zIndex: 2}}>
            <div className={classes.ProductsListHeader}>
                <button className={classes.ProductsListToggler} onClick={() => clickHandler()}>
                    <div className={classes.ProductsListName}>
                        <span className={classes.ProductsListNameTitle}>{name}</span>
                        <Arrow isOpen={collapse}/>
                    </div>
                </button>
                <ProductNew name={name}/>
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
                    switch (name) {
                        case 'Карты': {
                            if (state === 'entered') styles = {
                                ...styles,
                                maxHeight: cards.length ? ((cards.length * 60) + ((cards.length) * 17) - 9) : 70
                            }
                            return (
                                <div style={styles}>
                                    {cards.length ?
                                        <ProductsList name={name}/>
                                        : <NoProducts />
                                    }
                                </div>
                            )
                        }
                    }
                }}
            </CSSTransition>
        </li>
    );
};

export default Product;
