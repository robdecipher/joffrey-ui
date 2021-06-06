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
                            <div>
                                <FireIcon />
                                <span>Hot List</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tasks'>
                            <div>
                                <WorkIcon />
                                <span>All Tasks</span>
                            </div>
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