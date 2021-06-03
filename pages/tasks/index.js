import { useRouter } from 'next/router';

import { getAllTasks } from '../../dummy-data';
import TaskSearch from '../../components/tasks/tasks-search';
import TaskList from '../../components/tasks/task-list';

function AllTasks() {

    const router = useRouter();
    const tasks = getAllTasks();

    function findTasksHandler(status) {

        const fullPath = `/tasks/filtered/${status}`
        router.push(fullPath);

    }

    return(
        <section>
            <div className='page-header'>
                <h1>All Tasks</h1>
                <p>Please use the filter to search by Task Status.</p>
            </div>
            <TaskSearch onSearch={findTasksHandler} />
            <TaskList items={tasks} />
        </section>

    );

}

export default AllTasks;