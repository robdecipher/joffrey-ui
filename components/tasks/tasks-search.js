import { useRef } from 'react';

import Button from '../ui/button';
import classes from './tasks-search.module.css';

function TasksSearch(props) {

    const statusInputRef = useRef();

    function SubmitHandler(event) {

        event.preventDefault();
        const selectedStatus = statusInputRef.current.value;
        props.onSearch(selectedStatus);

    }

    return(
        <div className={classes.taskFilter}>
            <form className='filter-form' onSubmit={SubmitHandler}>
                <div>
                    <select id='status' ref={statusInputRef}>
                        <option value='new-request'>New Requests</option>
                        <option value='review-contents'>Review Contents</option>
                    </select>
                </div>
                <Button>Filter Tasks</Button>
            </form>
        </div>
    );

}

export default TasksSearch;