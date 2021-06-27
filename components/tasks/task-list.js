import TaskItem from './task-item';

function TaskList(props) {

    const { items } = props;

    return(
        <div>
            <ul>
                {items.map((task => <TaskItem key={task.key} id={task.key} site={task.site} status={task.status} summary={task.summary} duedate={task.duedate} />))}
            </ul>
        </div>
    );

}

export default TaskList;