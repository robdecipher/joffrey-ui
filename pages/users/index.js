import { useRouter } from 'next/router';

function Users() {

    const router = useRouter();

    function loadUserHandler() {
        // Load user edit page
        router.push('/users/anna.sokolovska');
    }

    return(
        <div>
            <h1>User List</h1>
            <p>Current users in the system.</p>
            <button onClick={loadUserHandler}>Edit User</button>
        </div>
    );

}

export default Users;