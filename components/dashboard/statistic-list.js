import StatisticItem from './statistic-item';
import classes from './statistic-list.module.css';

function StatisticList(props) {

    const { stats } = props;

    return(
        <div>
            <ul className={classes.statwrapper}>
                {stats.map((stat => <StatisticItem name={stat.name} value={stat.value} link={stat.link} />))}
            </ul>
        </div>
    )

}

export default StatisticList;