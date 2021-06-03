import Link from 'next/link';

import classes from './main-navigation.module.css';

function MainNavigation() {

    return(
        <header className={classes.header}>
            <div className={classes.brand}>
                <h2>Joffrey</h2>
            </div>
            <nav className={classes.globalnav}>
                <ul>
                    <li>
                        <Link href='/'>Hot List</Link>
                    </li>
                    <li>
                        <Link href='/tasks'>All Tasks</Link>
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