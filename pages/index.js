import { getHotListTasks } from '../dummy-data';
import TaskList from '../components/tasks/task-list';

function HotList() {

    const hotListTasks = getHotListTasks();

    return(
        <div>
            <h1>Hot Tasks</h1>
            <p>These tasks should be handled with top priority.</p>
            <TaskList items={hotListTasks} />
        </div>
    );

}

export default HotList;