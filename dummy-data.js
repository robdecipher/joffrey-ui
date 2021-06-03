const DUMMY_TASKS = [
    {
        id: 'WSC20200060-423',
        summary: '[EG] S20 FE New Registration',
        site: 'EG',
        duedate: '2021-06-01',
        status: 'New Request',
        isHotList: true,
    },
    {
        id: 'WSC20200055-1141',
        summary: 'Cellcom TV app page update',
        site: 'IL',
        duedate: '2021-06-02',
        status: 'New Request',
        isHotList: true,
    },
    {
        id: 'WSC20200008-1128',
        summary: 'PCD DA - CHANGE Cyber Day',
        site: 'CL',
        duedate: '2021-06-01',
        status: 'Review Contents',
        isHotList: false,
    },
    {
        id: 'WSC20200062-1616',
        summary: '[ZA] Samsung Care+ Page Updates | A Series Updates',
        site: 'ZA',
        duedate: '2021-06-01',
        status: 'AEM WORKFLOW IN PROGRESS',
        isHotList: true,
    },
    {
        id: 'WSC20200026-2239',
        summary: 'SEAS [CH & CH_FR] Eco Homepage Curation: S.com Explore : Reimagine a better planet [Jun 4th (07:00) - Jun 6th (06:59)]',
        site: 'CH',
        duedate: '2021-06-04',
        status: 'Review Contents',
        isHotList: false,
    },
  ];
  
  export function getHotListTasks() {
    return DUMMY_TASKS.filter((task) => task.isHotList);
  }
  
  export function getAllTasks() {
    return DUMMY_TASKS;
  }
  
  export function getFilteredTasks(statusFilter) {
    const status = statusFilter;
  
    let filteredTasks = DUMMY_TASKS.filter((task) => {
      const taskStatus = task.status.toLowerCase();
      return taskStatus === status;
    });
  
    return filteredTasks;
  }
  
  export function getTaskById(id) {
    return DUMMY_TASKS.find((task) => task.id === id);
  }