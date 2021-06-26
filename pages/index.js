import { getOverdueTasks } from '../helpers/api-util';
import TaskList from '../components/tasks/task-list';

function HomePage(props) {

    return(
        <div>
            <div>
                <h1>Performance Dashboard</h1>
            </div>
            <div>
                <TaskList items={props.tasks} />
            </div>
        </div>
    );

}

export async function getStaticProps() {

    const overdueTasks = await getOverdueTasks();
    
    return {
        props: {
            tasks: overdueTasks 
        }
    }

}

export default HomePage;