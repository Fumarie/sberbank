import React from 'react';
import Header from "../../components/Main/Header/Header";

const Card = (props) => {
    return (
        <div>
            <Header />
            Card with id {props.match.params.id}
        </div>
    );
};

export default Card;
