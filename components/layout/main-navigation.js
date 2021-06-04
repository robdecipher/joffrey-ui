import Link from 'next/link';
import { Fragment } from 'react'; 

import classes from './main-navigation.module.css';
import FireIcon from '../icons/fire';
import WorkIcon from '../icons/work';

function MainNavigation() {

    return(
        <header className={classes.header}>
            <div className={classes.brand}>
                <h2>Joffrey</h2>
            </div>
            <nav className={classes.globalnav}>
                <ul>
                    <li>
                        <Link href='/'>
                            <Fragment>
                                <FireIcon />
                                <span>Hot List</span>
                            </Fragment>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tasks'>
                            <Fragment>
                                <WorkIcon />
                                <span>All Tasks</span>
                            </Fragment>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.navfooter}>
                <span>Support</span>
            </div>
        </header>
    );

}

export default MainNavigation;