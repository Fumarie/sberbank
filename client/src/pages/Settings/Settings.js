import React from 'react';
import Header from "../../components/Main/Header/Header";

const Settings = (props) => {
    return (
        <>
            <div>
                <Header path={props.match.path}/>
                Wanna change your settings?
            </div>
        </>
    );
};

export default Settings;