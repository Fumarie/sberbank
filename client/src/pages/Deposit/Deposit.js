import React from 'react';
import Header from "../../components/Main/Header/Header";
import Aside from "../../components/Aside/Aside";
import classes from "../../components/Main/main.module.css";

const Deposit = (props) => {
    return (
        <>
            <div>
                <Header/>
                Deposit with id {props.match.params.id}
            </div>
        </>
    );
};

export default Deposit;
