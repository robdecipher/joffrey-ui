import { MongoClient } from 'mongodb';

export async function dbConnection() {

    const client = await MongoClient.connect(
        'mongodb+srv://robAdmin:53wMkNkkpVfxgSq8@cluster0.4vrkx.mongodb.net/joffrey?retryWrites=true&w=majority'
    );

    return client;

}