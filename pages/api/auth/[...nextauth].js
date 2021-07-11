import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../helpers/auth';
import { dbConnection } from '../../../helpers/db';



export default NextAuth({
    session: {
        jwt: true
    }, 
    providers: [
        Providers.Credentials({
            async authorize(credentials) {

                const client = await dbConnection();
                const usersCollection = client.db().collection('users');
                const user = await usersCollection.findOne({ email: credentials.email });

                if(!user) {
                    client.close();
                    throw new Error('No User Found');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if(!isValid) {
                    client.close();
                    throw new Error('Could not log you in.');
                }
                client.close();
                return {
                    email: user.email
                }
            }
        })
    ]
});