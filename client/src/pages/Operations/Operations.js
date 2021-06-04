import React from 'react';
import Header from "../../components/Main/Header/Header";

const Operations = (props) => {
    return (
        <>
            <div>
                <Header path={props.match.path}/>
                THere are your operations
            </div>
        </>
    );
};

export default Operations;
