import React from 'react';
import Header from "../../components/Main/Header/Header";

const Profile = (props) => {
    return (
        <div>
            <Header  path={props.match.path}/>
            Profile page :)
        </div>
    );
};

export default Profile;