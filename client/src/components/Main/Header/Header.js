import React from 'react';
import classes from './Header.module.css'
import { ReactSVG } from 'react-svg'
import logoSVG from '../../../images/logo.svg'
import exitSVG from '../../../images/exit.svg'
import { Link } from "react-router-dom";
import classNames from "classnames";
import HeaderNavLink from "./HeaderNavLink/HeaderNavLink";
import { useAuth } from "../../../hooks/auth.hook";

const navLinks = [{name: 'Главная', link: '/'}, {name: 'Платежи', link: '/payments'}, {name: 'История', link: '/operations'}, {name: 'Каталог', link: '/catalog'}]

const Header = ({path} ) => {
    const {logout} = useAuth()

    const logoutHandler = event => {
        event.preventDefault()
        logout()
        window.location.href = "/login"
    }

     return (
        <header className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.headerWrap}>
                    <Link to={'/'} className={classes.headerLogo}>
                        <ReactSVG src={logoSVG} />
                    </Link>
                    <nav style={{marginLeft: -54}}>
                        {
                            navLinks.map((element, index) => <HeaderNavLink key={index} link={element.link} classes={classNames(classes.headerNavLink, {[classes.active]: path === element.link })}>{element.name}</HeaderNavLink>)
                        }
                    </nav>
                    <button href="/login" onClick={logoutHandler}>
                        <ReactSVG src={exitSVG} />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
