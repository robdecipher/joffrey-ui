import classes from './statBox.module.css';

function StatBox(props) {

    return(
        <div className={classes.statbox}>{ props.children }</div>
    );

}

export default StatBox;