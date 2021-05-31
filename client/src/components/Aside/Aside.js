import React, { useEffect } from 'react';
import classes from './Aside.module.css'
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import Product from "./Product/Product";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/profile";
import { getUserCards } from "../../redux/actions/products";

const Aside = () => {
    const products = ['Карты', 'Вклады и счета', 'Кредиты', 'Оплатить счёт']

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(6))
    }, []);

    const { profile } = useSelector(state => state.profile)
    return (
        <aside className={classes.aside}>
            <div className={classes.personalMenuSlideWrapper}>
                <div className={classes.personalMenu}>
                    <div>
                        <div>
                            <div className={classes.profileHeader}>
                                <ProfileIcon type="settings"/>
                                    <Link className={classes.profileLink} to="/profile">
                                        <div className={classes.profileLinkCircle}>
                                            <div className={classes.profileInitials}>{profile.initials}</div>
                                        </div>
                                    </Link>
                                <ProfileIcon type="mail" />
                            </div>
                            <div className={classes.profileInfo}>
                                <Link title="Леонид" className={classes.profileName}
                                   to="/profile">{profile.name}</Link>
                                <Link className={classes.profileDescription}
                                   to="/profile">Профиль</Link>
                            </div>
                        </div>
                    </div>
                    <ul className={classes.products}>
                        {products.map((elem, index) => <Product name={elem} key={index} />)}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
