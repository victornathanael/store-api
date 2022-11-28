import mongodb from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

function getClient() {
    const uri = process.env.MONGO_DB_CONN_STRING;
    return new mongodb.MongoClient(uri);
}

export { getClient };
