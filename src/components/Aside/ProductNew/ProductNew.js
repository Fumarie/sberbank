import React from 'react';
import classes from "./ProductNew.module.css";

const ProductNew = () => {
    return (
        <a href="/" className={classes.ProductsListNew}>
                    <span className={classes.ProductsListNewWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="#34B76F" fillRule="evenodd" d="M10 0c.552 0 1 .448 1 1v8h8c.552 0 1 .448 1 1s-.448 1-1 1h-8v8c0 .552-.448 1-1 1s-1-.448-1-1v-8H1c-.552 0-1-.448-1-1s.448-1 1-1h8V1c0-.552.448-1 1-1z"></path></svg>
                    </span>
        </a>
    );
};

export default ProductNew;
