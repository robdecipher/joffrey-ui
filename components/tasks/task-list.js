import TaskItem from './task-item';

function TaskList(props) {

    const { items } = props;

    return(
        <div>
            <ul>
                {items.map((task => <TaskItem key={task.id} id={task.id} site={task.site} status={task.status} summary={task.summary} duedate={task.duedate} />))}
            </ul>
        </div>
    );

}

export default TaskList;