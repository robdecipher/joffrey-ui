import classes from './statistic-item.module.css';
import StatBox from '../ui/statBox';

function StatisticItem(props) {

    const { value } = props
    return(
        <li>
            <StatBox>
                <span className={classes.statistic}>{value}</span>
            </StatBox>
        </li>
    );

}

export default StatisticItem;