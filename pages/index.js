import Link from 'next/link';

function Dashboard() {



    return(
        <div>
            <h1>Performance Dashboard</h1>
            <p>Check out what's going on in Production today.</p>
            <ul>
                <li>
                    <Link href='/tasks'>All Tasks</Link>
                </li>
                <li>
                    <Link href='/tasks/my-tasks'>My Tasks</Link>
                </li>
            </ul>
        </div>
    );

}

export default Dashboard;