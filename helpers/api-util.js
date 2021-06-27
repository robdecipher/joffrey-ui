const base64 = require('base-64');

const user = 'r.cheatham@cheil.com';
const pw = 'Un1C0rN$';

const auth = 'Basic ' + base64.encode(user + ":" + pw);

const baseUrl = 'https://op-jra.samsung.com/rest/api/2/search?jql=';
const category = 'category = "[WSC] Local" AND "Request Type" in ("Local Request: Local to WSC Production Center Request", "Global Request: HQ Lead Production")';
const status = 'status not in (Resolved, Closed, Cancelled, LIVE, Complete)';
const strip = 'summary !~ "global request*" AND issuetype not in ("PDP Task(automatic)")';
const wpc = 'WPC = PL';
const fields = 'fields=id,key,status,customfield_13611,assignee,duedate';
const maxResults = 'maxResults=5000';

const query = baseUrl + category + ' AND ' + status + ' AND ' + strip + ' AND ' + wpc + '&' + maxResults + '&' + fields;

export async function getAllOpenTasks() {

    const response = await fetch(query, {
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data.total);

    const unpacked = data.issues;
    //console.log(unpacked[0]);
    
    const openTasks = [];

    for (const key in unpacked) {
        openTasks.push({
            id: key,
            ...unpacked[key]
        });
    }

    return openTasks;

}

export async function getOverdueTasks() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    const allOpenTasks = await getAllOpenTasks();
    let filteredByDueDate  = allOpenTasks.filter((task) => {
        const duedate = task.fields.duedate;
        console.log(task.key)
        console.log(duedate);
        console.log(today, '\n');
        return duedate <= today;
    });
    console.log(query);
    console.log(allOpenTasks.length);
    console.log(filteredByDueDate.length);
    return filteredByDueDate;

}

export async function getStatistics() {
    const allStatistics = [];
    const allTasks = await getAllOpenTasks();
    const overdueTasks = await getOverdueTasks();
    allStatistics.push({
        value: allTasks.length
    }, {
        value: overdueTasks.length
    }
    );
    return allStatistics;
}