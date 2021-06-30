const base64 = require('base-64');

const user = 'r.cheatham@cheil.com';
const pw = 'Un1C0rN$';

const auth = 'Basic ' + base64.encode(user + ":" + pw);

// Open Tasks API Builder
const baseUrl = 'https://op-jra.samsung.com/rest/api/2/search?jql=';
const category = 'category = "[WSC] Local" AND "Request Type" in ("Local Request: Local to WSC Production Center Request", "Global Request: HQ Lead Production")';
const status = 'status not in (Resolved, Closed, Cancelled, LIVE, Complete)';
const strip = 'summary !~ "global request*" AND issuetype not in ("PDP Task(automatic)")';
const wpc = 'WPC = PL';
const fields = 'fields=id,key,status,customfield_13611,assignee,duedate,created';
const maxResults = 'maxResults=5000';

const query = baseUrl + category + ' AND ' + status + ' AND ' + strip + ' AND ' + wpc + '&' + maxResults + '&' + fields;

// Completed Today API Builder
const completeStatus = 'status = Closed';
const completeDate = 'resolutiondate >= startOfDay()';
const completeFields = 'fields=id,key,status,resolutiondate';

const completeQuery = baseUrl + category + ' AND ' + completeStatus + ' AND ' + strip + ' AND ' + wpc + ' AND ' + completeDate + '&' + maxResults + '&' + completeFields;

export async function getAllOpenTasks() {

    const response = await fetch(query, {
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    const unpacked = data.issues;
    
    const openTasks = [];

    for (const key in unpacked) {
        openTasks.push({
            id: key,
            ...unpacked[key]
        });
    }
    console.log(openTasks);

    return openTasks;

}

export async function getCompletedTasks() {

    const response = await fetch(completeQuery, {
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data;

}