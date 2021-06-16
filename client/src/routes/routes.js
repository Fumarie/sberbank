import React from 'react'
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Mail from "../pages/Mail/Mail";
import Catalog from "../pages/Catalog/Catalog";
import Payments from "../pages/Payments/Payments";
import Operations from "../pages/Operations/Operations";
import Card from "../pages/Card/Card";
import Deposit from "../pages/Deposit/Deposit";
import Login from "../pages/Login/Login";
import Aside from "../components/Aside/Aside";
import classes from "../components/Main/main.module.css";
import NewCard from "../pages/NewCard/NewCard";
import NewCardSelect from "../pages/NewCard/NewCardSelect";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <>
                <Aside/>
                <main className={classes.MainSection}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/settings" exact component={Settings}/>
                    <Route path="/mail" exact component={Mail}/>
                    <Route path="/catalog" exact component={Catalog}/>
                    <Route path="/payments" exact component={Payments}/>
                    <Route path="/operations" exact component={Operations}/>
                    <Route path="/card/:id" exact component={Card}/>
                    <Route path="/deposit/:id" exact component={Deposit}/>
                    <Route path="/new/card" exact component={NewCard}/>
                    <Route path="/new/card/selected" exact component={NewCardSelect}/>
                    <Redirect to="/"/>
                </main>
            </>
        )
    }

    return (
        <>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Login}/>
            <Redirect to="/login"/>>
        </>
    )
}