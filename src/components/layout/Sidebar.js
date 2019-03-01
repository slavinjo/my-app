import React from 'react';


import NavigationItems from '../layout/NavigationItems';
import classes from '../../css/SideDrawer.module.css';
import Backdrop from '../../components/layout/Backdrop';
import ComponentWrapper from '../hoc/ComponentWrapper';
import Logo from '../../components/layout/Logo';

const Sidebar = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <ComponentWrapper>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/> 
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </ComponentWrapper>
    );
};

export default Sidebar;