import React from 'react';
import Header from "../../components/Main/Header/Header";

const Catalog = (props) => {
    return (
        <>
            <div>
                <Header path={props.match.path}/>
                CATALOG GG
            </div>
        </>
    );
};

export default Catalog;
