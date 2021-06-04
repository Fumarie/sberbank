import React from 'react';
import Header from "../../components/Main/Header/Header";
import bg from '../../images/bg.jpg'

const Home = (props) => {
    return (
        <>
                <div style={{backgroundImage: bg}}>
                    <Header path={props.match.path}/>
                    <img src={bg} style={{width: '100%', marginTop: -65}} alt=""/>
                </div>
        </>
    );
};

export default Home;