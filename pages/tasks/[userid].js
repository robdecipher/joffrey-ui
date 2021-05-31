import { useRouter } from 'next/router';

function MyTasks() {

    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return(
        <div>
            <h1>My Tasks</h1>
            <p>These are your tasks.</p>
        </div>
    );

}

export default MyTasks;