import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {

    if (props.link) {
        return(
            <Link href={props.link}>
                <a className={classes.btn + " " + classes.btnTasks}>{props.children}</a>
            </Link>
        );
    }

    return(
        <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    )

}

export default Button;