import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

import classes from './main-navigation.module.css';
import FireIcon from '../icons/fire';
import WorkIcon from '../icons/work';

function MainNavigation() {

    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }

    if(session) {

        return(
            <header className={classes.header}>
                <div className={classes.brand}>
                    <h2>Joffrey</h2>
                </div>
                <nav className={classes.globalnav}>
                    <ul>
                        <li>
                            <Link href='/tasks/hotlist/'>
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
                                    <span>My Tasks</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
                <div className={classes.navfooter}>
                    <span>Support</span>
                </div>
            </header>
        );

    }

    return null;

}

export default MainNavigation;