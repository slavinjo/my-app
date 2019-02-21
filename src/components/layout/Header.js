import React from 'react';
import classes from "../../css/Header.module.css";

const Header = ( props ) => (
    <header className={classes.Header}>
       <p>{props.title}</p>
    </header>
);

export default Header;