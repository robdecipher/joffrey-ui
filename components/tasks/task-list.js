import TaskItem from './task-item';

function TaskList(props) {

    const { tasks } = props;

    return(
        <div>
            <ul>
                {tasks.map((task => <TaskItem key={task.key} id={task.key} site={task.fields.customfield_13611.value} status={task.fields.status.name} summary={task.fields.summary} duedate={task.fields.duedate} />))}
            </ul>
        </div>
    );

}

export default TaskList;