import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

import classes from './main-navigation.module.css';
import DashboardIcon from '../icons/report';
import WorkIcon from '../icons/work';

function MainNavigation() {

    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }

    if(session) {

        return(
            <nav className={classes.nav}>
                <div className={classes.brand}>
                    <h2>Joffrey</h2>
                </div>
                <div className={classes.globalnav}>
                    <ul>
                        <li>
                            <Link href='/'>
                                <div>
                                    <DashboardIcon />
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href='/tasks/my-tasks/'>
                                <div>
                                    <WorkIcon />
                                    <span>My Tasks</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className={classes.navfooter}>
                    <span>Support</span>
                </div>*/}
            </nav>
        );

    }

    return null;

}

export default MainNavigation;