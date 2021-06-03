import React from 'react';
import Header from "../../components/Main/Header/Header";
import Aside from "../../components/Aside/Aside";
import classes from "../../components/Main/main.module.css";

const Profile = (props) => {
    return (
        <>
                <div>
                    <Header path={props.match.path}/>
                    Profile page :)
                </div>
        </>
    );
};

export default Profile;