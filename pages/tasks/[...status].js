import { useRouter } from 'next/router';

import { getFilteredTasks } from '../../dummy-data';
import TaskList from '../../components/tasks/task-list';

function FilteredTasks() {

    function pageHeader() {
        return(
            <div className='page-header'>
                <h1>Filtered Tasks - <span>{status}</span></h1>
                <p>Please take the action on these tasks.</p>
            </div>
        );
    }

    const router = useRouter();
    const filterData = router.query.status;
    console.log(filterData);

    if (!filterData) {
        return <p>Loading</p>
    }

    const filteredStatus = filterData[1];
    const splitStatus = filteredStatus.split("-");
    const status = splitStatus.join(" ");
    console.log(status);

    const filteredTasks = getFilteredTasks(status);
    console.log(filteredTasks);

    if (!filteredTasks || filteredTasks.length === 0) {
        return(
            <section>
                <div className='page-header'>
                    <h1>Filtered Tasks - <span>{status}</span></h1>
                    <p>No Tasks Found.</p>
                </div>
            </section>
        );
    }
    
    return(
        <section>
            <div className='page-header'>
                <h1>Filtered Tasks - <span>{status}</span></h1>
                <p>Please take action on these tasks.</p>
            </div>
            <TaskList items={filteredTasks} />
        </section>
    );

}

export default FilteredTasks;