import { MongoClient, Db } from 'mongodb';
import { env } from '../shared/env';

let client: MongoClient;
let mongo: Db;

export const connectMongo = async (): Promise<Db> => {
  if (!mongo) {
    client = new MongoClient(env.MONGO_URL);
    await client.connect();
    mongo = client.db(env.DB_NAME);
  }
  return mongo;
};

export async function disconnectMongo(): Promise<void> {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
}