import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const getDatabase = async () => {
  const client = new mongodb.MongoClient(process.env.MONGO_URL!);
  await client.connect();

  return client.db('zachs-db');
};
//renamed getDb to getDatabase by right clicking and 'rename symbol'
//will rename all instances in this project, we just need to save
//all the files that we changed it in. JS does not do this!  



//old javascript
// import mongodb from 'mongodb';
// import dotenv from 'dotenv';

// dotenv.config();

// export const getDb = async () => {
//   const client = new mongodb.MongoClient(process.env.MONGO_URL);
//   await client.connect();

//   return client.db('zachs-db');
// };
