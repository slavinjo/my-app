import React from 'react';

import ComponentWrapper from '../hoc/ComponentWrapper';
import classes from './Layout.module.css';

const Layout = ( props ) => (
    <ComponentWrapper>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </ComponentWrapper>
);

export default Layout;