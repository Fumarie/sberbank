import React from 'react';
import Header from "../../components/Main/Header/Header";

const Payments = (props) => {
    return (
        <div>
            <Header path={props.match.path} />
            Payments page ;\
        </div>
    );
};

export default Payments;
