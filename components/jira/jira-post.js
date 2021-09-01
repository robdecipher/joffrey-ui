import { useRef } from 'react';

import classes from './jira-post.module.css';

function JiraPost() {

    const emailInputRef = useRef();
    const pwInputRef = useRef();

    return(

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
                    <button type='submit' class='standardbtn'>Assign</button>
                </div>
            </form>
        </div>

    )
}

export default JiraPost;