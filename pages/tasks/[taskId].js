import { useRouter } from 'next/router';
import TaskItem from '../../components/tasks/task-item';
import { getTaskById } from '../../dummy-data';

function TaskDetailPage() {

    const router = useRouter();

    const taskId = router.query.taskId;
    console.log(taskId);
    const task = getTaskById(taskId);
    console.log(task);

    if (!task) {
        return <p>No Task Found</p>;
    }

    return(
        <div>
            <h1>Task Detail Page</h1>
            <p>Below is the details of the task, please review and action.</p>
            <TaskItem id={task.id} site={task.site} status={task.status} summary={task.summary} duedate={task.duedate} />
        </div>
    );

}

export default TaskDetailPage;