import React from 'react';
import classes from './main.module.css'
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Settings from "../../pages/Settings/Settings";
import Mail from "../../pages/Mail/Mail";

const Main = () => {
    return (
        <main className={classes.MainSection}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/mail" exact component={Mail}/>
            </Switch>
        </main>
    );
};

export default Main;
