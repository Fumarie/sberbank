import React from 'react';
import ProductCardItem from "../ProductCardItem/ProductCardItem";
import { useSelector } from "react-redux";
const CardList = () => {
    const {cards} = useSelector(state => state.products)
    console.log('Card list', cards)
    return (
        <>
            {cards && cards.map((element, index) => {
                console.log(element)
                return (<ProductCardItem key={index} product={element} />)
                // if (name === 'Карты')
                //     if (name === 'Вклады и счета') return (<ProductDepositItem product={element} key={index}/>)
            })}
        </>
    );
};

export default CardList;
