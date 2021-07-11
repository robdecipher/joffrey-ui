import UpdateProfileForm from './update-profile';

function UserProfile() {

    async function changePasswordHandler(passwordData) {

        console.log('executing');

        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

    }

    return(

        <section>
            <h2>Update Your Profile</h2>
            <UpdateProfileForm onChangePassword={changePasswordHandler} />
        </section>

    );

}

export default UserProfile;