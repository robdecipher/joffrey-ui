import { useRef } from 'react';
import Button from '../ui/button'; 

import JiraItem from './jira-item';
import classes from './jira-list.module.css';


function JiraList(props) {

    const { newTasks } = props;

    const emailInputRef = useRef();
    const pwInputRef = useRef();

    async function submitHandler(event) {

        event.preventDefault();

        const user = emailInputRef.current.value;
        const pw = pwInputRef.current.value;

    }
    const dashboard = '/';

    return(
        <div className={classes.lightbox}>
            <div className={classes.lightboxheader}>
                <p>You are about to assign the following tasks.</p>
            </div>
            <ul>
                {newTasks.map((task => <JiraItem key={task.key} id={task.key} site={task.fields.customfield_13611.value} duedate={task.fields.duedate} />))}
            </ul>
            <div className={classes.formwrapper}>
                <h2>Enter your JIRA Credentials</h2>
                <form>
                    <div className={classes.fieldwrapper}>
                        <label htmlFor='email' className={classes.formlabel}>Email</label>
                        <input type='email' id='email' required className={classes.forminput} ref={emailInputRef} />
                    </div>
                    <div className={classes.fieldwrapper}>
                        <label htmlFor='password' className={classes.formlabel}>Password</label>
                        <input type='password' id='password' required className={classes.forminput} ref={pwInputRef} />
                    </div>
                    <div className={classes.fieldwrapper}>
                        <Button link={dashboard}>Assign</Button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default JiraList;