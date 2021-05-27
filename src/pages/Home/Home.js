import React from 'react';
import Header from "../../components/Main/Header/Header";

const Home = (props) => {
    return (
        <div>
            <Header path={props.match.path}/>
            Home page
        </div>
    );
};

export default Home;