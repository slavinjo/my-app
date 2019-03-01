import React from 'react';
import classes from "../../css/Header.module.css";
import Logo from '../../components/layout/Logo';

const Header = ( props ) => (
    <header className={classes.Header}>
       <Logo/> 
       <p>{props.title}</p>
    </header>
);

export default Header;