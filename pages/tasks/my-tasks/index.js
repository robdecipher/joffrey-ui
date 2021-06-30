import { getAllOpenTasks } from '../../../helpers/api-util';

import TaskList from '../../../components/tasks/task-list';

function MyTasks(props) {

    return(
        <section>
            <div className='page-header'>
                <h1>My Tasks</h1>
                <p>Lorem ipsum blah blah make something up.</p>
            </div>
            <TaskList tasks={props.tasks} />
        </section>
    )

}

export async function getStaticProps() {

    const allOpenTasks = await getAllOpenTasks();
    
    return {
        props: {
            tasks: allOpenTasks 
        }
    }

}

export default MyTasks;