import { getAllOpenTasks } from './api-util';
import { getCompletedTasks } from './api-util';

export async function getStatistics() {

    const allStatistics = [];

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
    const allCompletedTasks = await getCompletedTasks();
    console.log(allCompletedTasks);

    let overdueTasks  = allOpenTasks.filter((task) => {
        const duedate = task.fields.duedate;
        return duedate <= today;
    });

    let newTasks = allOpenTasks.filter((task) => {
        let createddate = task.fields.created.slice(0,10);
        return createddate === today;
    })

    allStatistics.push({
        name: 'Total Open Tasks',
        value: allOpenTasks.length,
        link: '#'
    }, {
        name: 'Overdue Tasks',
        value: overdueTasks.length,
        link: '#'
    }, {
        name: 'New Tasks Today',
        value: newTasks.length,
        link: '#'
    }, {
        name: 'Completed Today',
        value: allCompletedTasks.total,
        link: '#'
    });

    return allStatistics;

}