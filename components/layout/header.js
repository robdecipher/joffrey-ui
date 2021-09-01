import { signOut } from 'next-auth/client';

import classes from './header.module.css';

function Header() {

    function logoutHandler() {
        signOut();
    }

    return(
        <header className={classes.header}>

            <div className={classes.logoutwrap}>
                <button onClick={logoutHandler} className='standardbtn'>Logout</button>
            </div>

        </header>
    )

}

export default Header;