//import { getOverdueTasks } from '../helpers/api-util';
import { getStatistics } from '../helpers/api-util';
import StatisticList from '../components/dashboard/statistic-list';

function HomePage(props) {

    console.log(props);
    return(
        <section>
            <div className='page-header'>
                <h1>Performance Dashboard</h1>
                <p>Lorem ipsum blah blah make something up.</p>
            </div>
            <StatisticList stats={props.stats} />
        </section>
    );

}

export async function getStaticProps() {

    //const overdueTasks = await getOverdueTasks()
    const allStatistics = await getStatistics();
    console.log(allStatistics);
    
    return {
        props: {
            stats: allStatistics 
        }
    }

}

export default HomePage;