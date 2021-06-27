import { getOverdueTasks } from '../helpers/api-util';
import { getStatistics } from '../helpers/api-util';
import StatisticList from '../components/dashboard/statistic-list';

function HomePage(props) {

    console.log(props);
    return(
        <div>
            <div>
                <h1>Performance Dashboard</h1>
            </div>
            <div>
                <StatisticList stats={props.stats} />
            </div>
        </div>
    );

}

export async function getStaticProps() {

    const overdueTasks = await getOverdueTasks()
    const allStatistics = await getStatistics();
    console.log(allStatistics);
    
    return {
        props: {
            stats: allStatistics 
        }
    }

}

export default HomePage;