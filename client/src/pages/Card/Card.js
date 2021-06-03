import React, { useEffect } from 'react';
import Header from "../../components/Main/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../redux/actions/products";
import classes from "./Card.module.css"
import CardInfo from "../../components/Main/CardInfo/CardInfo";
import Aside from "../../components/Aside/Aside";

const Card = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCard(props.match.params.id))
    }, [props.match.params.id]);

    const {card} = useSelector(state => state.products)

    return (
        <>
            <div>
                <Header/>
                <div>
                    <div className={classes.wrap}>
                        <div className={classes.container}>
                            <CardInfo card={card}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
