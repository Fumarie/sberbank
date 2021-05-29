import React from 'react';
import classes from './main.module.css'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Settings from "../../pages/Settings/Settings";
import Mail from "../../pages/Mail/Mail";
import Payments from "../../pages/Payments/Payments";
import Operations from "../../pages/Operations/Operations";
import Card from "../../pages/Card/Card";
import Catalog from "../../pages/Catalog/Catalog";
import Deposit from "../../pages/Deposit/Deposit";

const Main = () => {
    return (
        <main className={classes.MainSection}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/mail" exact component={Mail}/>
                <Route path="/catalog" exact component={Catalog}/>
                <Route path="/payments" exact component={Payments}/>
                <Route path="/operations" exact component={Operations}/>
                <Route path="/card/:id" component={Card}/>
                <Route path="/deposit/:id" component={Deposit}/>
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default Main;
