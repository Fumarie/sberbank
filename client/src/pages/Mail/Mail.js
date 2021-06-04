import React from 'react';
import Header from "../../components/Main/Header/Header";

const Mail = (props) => {
    return (
        <>
            <div>
                <Header path={props.match.path}/>
                Here are your mails
            </div>
        </>
    );
};

export default Mail;