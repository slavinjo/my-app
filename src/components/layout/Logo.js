import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from '../../css/Logo.module.css';

const clickHandler = () => {
    alert('mater');
}


const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"  onClick={clickHandler}  />
    </div>
);

export default Logo;