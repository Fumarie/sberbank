import React from 'react';
import classes from "./CardInfo.module.css";
import cardPNG from "../../../images/card.png";
import { useSelector } from "react-redux";

const CardInfo = ({ card }) => {
    const loading = useSelector(state => state.products.cardPageLoading)

    let {name, balance, number, validthru, type} = card

    let normalNumber = '0'
    let typeName = '0'
    let monthThru = '0'
    let yearThru = '0'
    if(card.name) {
        balance = Number(balance).toFixed(2)
        number.split('')
        normalNumber = `${number[12] + number[13] + number[14] + number[15]}`

        validthru.split('')
        monthThru = `${validthru[5]}${validthru[6]}`
        yearThru = `${validthru[2]}${validthru[3]}`

        typeName = 'Основная дебетовая'
        if (type === 1) typeName = 'Кредитная'
    }

    return (
        <>
        {loading ?
            <h5>Loading...</h5>
            :
            <>
                <h1>
                    <span className={classes.CardName}>{name}</span>
                    <img src={cardPNG} alt="card" className={classes.cardPNG}/>
                </h1>
                <div className={classes.cardInfoRow}>
                    <p className={classes.cardInfo}>•• {normalNumber} • {typeName} • срок до {monthThru}/{yearThru}</p>
                </div>
                <div className={classes.balanceWrap}>
                    <h2>
                        <p className={classes.balance}>{balance} ₽</p>
                    </h2>
                </div>
            </>
        }
        </>
    );
};

export default CardInfo;
