import StatisticItem from './statistic-item';

function StatisticList(props) {

    const { stats } = props;

    return(
        <div>
            <ul>
                {stats.map((stat => <StatisticItem value={stat.value} />))}
            </ul>
        </div>
    )

}

export default StatisticList;