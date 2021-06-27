import { getHotListTasks } from '../../../dummy-data';
import TaskList from '../../../components/tasks/task-list';

const base64 = require('base-64');

const user = 'r.cheatham@cheil.com';
const pw = 'Un1C0rN$';

const auth = 'Basic ' + base64.encode(user + ":" + pw);

const query = 'category="[WSC] Local" AND "Request Type" in ("Local Request: Local to WSC Production Center Request", "Global Request: HQ Lead Production") AND status = "New Request" AND summary !~ "global request*" AND issuetype not in ("PDP Task(automatic)") AND project in projectPropertyKey(MENA) AND Site in (AE, AE_AR, EG, IRAN)'

function HotList() {

    const hotListTasks = getHotListTasks();
    console.log(hotListTasks);

    return(
        <section>
            <div className='page-header'>
                <h1>Hot Tasks</h1>
                <p>These tasks should be handled with top priority.</p>
            </div>
            <TaskList items={hotListTasks} />
        </section>
    );

}

/*export async function getStaticProps() {
    const res = await fetch('https://op-jra.samsung.com/rest/api/2/search?jql=' + query, {
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    console.log(data);
    console.log(data.total);

    return {
        props: { data },
    }
}*/

export default HotList;