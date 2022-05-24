import { getDb } from './db';

interface Platform {
  name: string;
}

const getCollection = async () => {
  const db = await getDb();
  return db.collection<Platform>('platforms');
}; //generic type <define the shape as Platform>

export const createPlatform = async (platform: Platform) => {
  const col = await getCollection();
  const insertedResults = await col.insertOne(platform);

  return insertedResults.insertedId;
};

export const getPlatforms = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};




//old JavaScript
// import { getDb } from './db.js';

// const getCollection = async () => {
//   const db = await getDb();
//   return db.collection('platforms');
// };

// export const createPlatform = async (name) => {
//   const col = await getCollection();
//   const insertedResults = await col.insertOne({
//     name,
//   });

//   return insertedResults.insertedId;
// };

// export const getPlatforms = async () => {
//   const col = await getCollection();
//   const ret = col.find({});
//   return ret.toArray();
// };
