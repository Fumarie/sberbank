import React from 'react';
import Header from "../../components/Main/Header/Header";

const Deposit = (props) => {
    return (
        <div>
            <Header />
            Deposit with id {props.match.params.id}
        </div>
    );
};

export default Deposit;
