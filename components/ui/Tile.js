import classes from './Tile.module.css';

function Tile(props) {
    return(
        <div className={classes.tile}>{props.children}</div>
    );
}

export default Tile;