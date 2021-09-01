import { getAllOpenTasks, getNewTasks } from '../../../helpers/api-util';
import { useSession, getSession } from 'next-auth/client';
import { useState } from 'react';

import ActionBox from '../../../components/ui/ActionBox';
import Backdrop from '../../../components/layout/Backdrop';
import JiraList from '../../../components/tasks/jira-list';
import TaskList from '../../../components/tasks/task-list';

function MyTasks(props) {

    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);

    function jiraPostHandler() {
        setLightBoxIsOpen(true);
    }

    function closeLightBoxHandler() {
        setLightBoxIsOpen(false);
    }

    return(
        <section>
            <div className='page-header'>
                <h1>My Tasks</h1>
                <p>Lorem ipsum blah blah make something up.</p>
            </div>
            <ActionBox>
                <h3 className='header-small'>New Requests</h3>
                <div className='actionwrap'>
                    <p className='action-text'>You have <span className='highlight'>{props.newTasks.length}</span> New Tasks</p>
                    <button className='standardbtn jira-post' onClick={jiraPostHandler}>Assign To Me</button>
                </div>
            </ActionBox>

            {lightBoxIsOpen && <JiraList newTasks={props.newTasks} /> }
            {lightBoxIsOpen && <Backdrop onClick={closeLightBoxHandler} /> }

            <div className='page-section-header'>
                <h2>My Open Tasks</h2>
            </div>
            <TaskList tasks={props.tasks} />
        </section>
    )

}

export async function getServerSideProps(context) {

    const session = await getSession({req: context.req});

    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    const allOpenTasks = await getAllOpenTasks();
    const newTasks = await getNewTasks();
    
    return {
        props: {
            newTasks: newTasks,
            tasks: allOpenTasks
        }
    }

}

export default MyTasks;