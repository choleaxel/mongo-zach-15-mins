import { ObjectId } from 'mongodb';
import { getDatabase } from './db';

interface Character {
  name: string;
  tvShowId: string;
} //we know these fields from createCharacter function below

const getCollection = async () => {
  const db = await getDatabase();
  return db.collection<Character>('characters');
};

export const createCharacters = async (character: Character) => {
  const col = await getCollection();
  const ret = await col.insertOne(character);

  return ret.insertedId;
};

export const getCharacters = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};

export const getCharactersByTvShow = async (tvShowId: string) => {
  const col = await getCollection();
  const ret = col.find({
    tvShowId,
  });
  return ret.toArray();
};




// import { getDb } from './db.js';

// const getCollection = async () => {
//   const db = await getDb();
//   return db.collection('characters');
// };

// export const createCharacters = async (name, tvShowId) => {
//   const col = await getCollection();
//   const ret = await col.insertOne({
//     name,
//     tvShowId,
//   });

//   return ret.insertedId;
// };

// export const getCharacters = async () => {
//   const col = await getCollection();
//   const ret = col.find({});
//   return ret.toArray();
// };

// export const getCharactersByTvShow = async (tvShowId) => {
//   const col = await getCollection();
//   const ret = col.find({
//     tvShowId,
//   });
//   return ret.toArray();
// };
