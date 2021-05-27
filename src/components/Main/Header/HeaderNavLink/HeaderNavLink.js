import React from 'react';
import { Link } from "react-router-dom";

const HeaderNavLink = ({children, link, classes}) => {
    return (
        <Link to={link} className={classes}>
            {children}
        </Link>
    );
};

export default HeaderNavLink;
