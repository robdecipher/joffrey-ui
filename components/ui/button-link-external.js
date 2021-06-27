import Link from 'next/link';

import classes from './button-link-external.module.css';

function ButtonLinkExternal(props) {

    if (props.link) {
        return(
            <Link href={props.link}>
                <a className={classes.linkbutton} target='_blank'>{props.children}</a>
            </Link>
        );
    }

}

export default ButtonLinkExternal;