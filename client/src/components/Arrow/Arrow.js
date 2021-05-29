import React from 'react';
import classes from "./Arrow.module.css";

const Arrow = ({isOpen}) => {
    let styles = {}
    if(isOpen) styles = {transform: 'rotate(180deg)'}
    return (
        <span className={classes.ThemedIcon} style={styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                fillRule="evenodd"
                                d="M15.293 9.883c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L12 16.004l-4.707-4.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L12 13.176l3.293-3.293z"></path>
                            </svg>
                        </span>
    );
};

export default Arrow;