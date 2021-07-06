import { getStatistics } from '../helpers/api-stats';
import StatisticList from '../components/dashboard/statistic-list';

function HomePage(props) {

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

    const allStatistics = await getStatistics();
    
    return {
        props: {
            stats: allStatistics 
        }
    }

}

export default HomePage;