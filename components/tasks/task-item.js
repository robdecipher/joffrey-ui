import Button from '../ui/button';
import ExternalIcon from '../icons/external';
import classes from './task-item.module.css';

function TaskItem(props) {

    const { id, site, status, summary, duedate } = props;
    const viewTaskLink = `https://op-jra.samsung.com/browse/${id}`;

    return(
        <li>
            <div className={classes.card}>
                <span className={classes.task + " " + classes.taskid}>{id}</span>
                <span className={classes.task + " " + classes.tasksite}>{site}</span>
                <span className={classes.task + " " + classes.taskstatus}>{status}</span>
                <span className={classes.task + " " + classes.tasksummary}>{summary}</span>
                <span className={classes.task + " " + classes.taskduedate}>{duedate}</span>
                <Button link={viewTaskLink}>
                    <span>View Task</span>
                    <span><ExternalIcon /></span>
                </Button>
            </div>
        </li>
    );

}

export default TaskItem;