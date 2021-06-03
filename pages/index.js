import { getHotListTasks } from '../dummy-data';
import TaskList from '../components/tasks/task-list';

function HotList() {

    const hotListTasks = getHotListTasks();

    return(
        <section>
            <div className='page-header'>
                <h1>Hot Tasks</h1>
                <p>These tasks should be handled with top priority.</p>
            </div>
            <TaskList items={hotListTasks} />
        </section>
    );

}

export default HotList;