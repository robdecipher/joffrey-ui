import classes from './ActionBox.module.css';

function ActionBox(props) {
    return(
        <div className={classes.tile}>{props.children}</div>
    );
}

export default ActionBox;