import React from 'react';
import classes from './Aside.module.css'
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import Product from "./Product/Product";

const profile = {
    name: 'Леонид',
    initials: 'ЛВ'
}
const productsNames = ['Карты', 'Вклады и счета', 'Кредиты', 'Оплатить счёпт']

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <div className={classes.personalMenuSlideWrapper}>
                <div className={classes.personalMenu}>
                    <div>
                        <div>
                            <div className={classes.profileHeader}>
                                <ProfileIcon type="settings"/>
                                <a className={classes.profileLink} href="/">
                                    <div className={classes.profileLinkCircle}>
                                        <div className={classes.profileInitials}>{profile.initials}</div>
                                    </div>
                                </a>
                                <ProfileIcon />
                            </div>
                            <div className={classes.profileInfo}>
                                <a title="Леонид" className={classes.profileName}
                                   href="/">{profile.name}</a>
                                <a className={classes.profileDescription}
                                   href="/">Профиль</a>
                            </div>
                        </div>
                    </div>
                    <ul className={classes.products}>
                        {productsNames.map((name, i) => <Product name={name} key={i} index={i} />)}
                    </ul>
                </div>

            </div>
        </aside>
    );
};

export default Aside;
