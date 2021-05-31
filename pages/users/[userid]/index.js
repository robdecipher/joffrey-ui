import { useRouter } from 'next/router';

function UserProfile() {

    const router = useRouter();
    console.log(router.query);

    return(
        <div>
            <h1>User Profile Page</h1>
            <p>Please always keep your details up to date.</p>
        </div>
    );

}

export default UserProfile;