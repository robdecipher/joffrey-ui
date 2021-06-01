import Link from 'next/link';

function TaskItem(props) {

    const { id, site, status, summary, duedate } = props;
    const viewTaskLink = `/tasks/${id}`;

    return(
        <li>
            <div>
                <span>{id}</span>
                <span>{site}</span>
                <span>{status}</span>
                <p>{summary}</p>
                <span>{duedate}</span>
                <Link href={viewTaskLink}>View Task</Link>
            </div>
        </li>
    );

}

export default TaskItem;