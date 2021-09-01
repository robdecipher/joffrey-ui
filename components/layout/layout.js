import { Fragment } from 'react';
import Header from './header';
import MainNavigation from './main-navigation';

import classes from './layout.module.css';

function Layout(props) {

    return(
        <Fragment>
            <Header />
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    );

}

export default Layout;