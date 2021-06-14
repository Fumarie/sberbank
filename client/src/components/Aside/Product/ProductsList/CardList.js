import React from 'react';
import ProductCardItem from "../ProductCardItem/ProductCardItem";
import { useSelector } from "react-redux";

const CardList = () => {
    const {cards} = useSelector(state => state.products)
    return (
        <>
            {cards && cards.map((element, index) => {
                return (<ProductCardItem key={index} product={element} />)
                // if (name === 'Карты')
                //     if (name === 'Вклады и счета') return (<ProductDepositItem product={element} key={index}/>)
            })}
        </>
    );
};

export default CardList;
