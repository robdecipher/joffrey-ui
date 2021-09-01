import classes from './jira-item.module.css';

function JiraItem(props) {

    const { id, site, duedate } = props;

    return(
        <li className={classes.taskitem}>
            <span className={classes.task + " " + classes.taskid}>{id}</span>
            <span className={classes.task + " " + classes.tasksite}>{site}</span>
            <span className={classes.task + " " + classes.taskduedate}>{duedate}</span>
        </li>
    );

}

export default JiraItem;