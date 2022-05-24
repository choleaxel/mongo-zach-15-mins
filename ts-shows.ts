import { ObjectId } from 'mongodb';
import { getDb } from './db';

interface TvShow {
  name: string;
  platformIds: ObjectId[]; //mongos ids are objectIds and not strings
}

const getCollection = async () => {
  const db = await getDb();
  return db.collection<TvShow>('tv-shows');
};

export const createTvShows = async (tvShow: TvShow) => {
  const col = await getCollection();
  const ret = await col.insertOne(tvShow);

  return ret.insertedId;
};

export const getTvShows = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getShowsByPlatform = async (platformId: ObjectId) => {
  const col = await getCollection();
  const ret = col.find({
    platformId,
  });
  return ret.toArray();
};

export const getShowsByName = async (name: string) => {
  const col = await getCollection();
  const ret = col.find({
    name: {
      $regex: `.*${name}.*`,
    },
  });
  return ret.toArray();
};

export const getShowsByNameExactMatch = async (name: string) => {
  const col = await getCollection();
  const ret = col.find({
    name,
  });
  return ret.toArray();
};



// old JavaScript
// import { getDb } from './db.js';

// const getCollection = async () => {
//   const db = await getDb();
//   return db.collection('tv-shows');
// };

// export const createTvShows = async (name, platformIds) => {
//   const col = await getCollection();
//   const ret = await col.insertOne({
//     name,
//     platformIds,
//   });

//   return ret.insertedId;
// };

// export const getTvShows = async () => {
//   const col = await getCollection();
//   const ret = col.find({});
//   return ret.toArray();
// };

// export const getShowsByPlatform = async (platformId) => {
//   const col = await getCollection();
//   const ret = col.find({
//     platformId,
//   });
//   return ret.toArray();
// };

// export const getShowsByName = async (name) => {
//   const col = await getCollection();
//   const ret = col.find({
//     name: {
//       $regex: `.*${name}.*`,
//     },
//   });
//   return ret.toArray();
// };

// export const getShowsByNameExactMatch = async (name) => {
//   const col = await getCollection();
//   const ret = col.find({
//     name,
//   });
//   return ret.toArray();
// };
