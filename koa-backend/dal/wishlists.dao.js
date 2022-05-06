
const wishlists = require('./index').db('store').collection('wishlists');

const ObjectID = require('mongodb').ObjectID;

const save = async ({name}) => {
const result = await wishlists.insertOne ( {name});

return await wishlists.findOne({_id:ObjectID(result.insertedId)}); }

const getAll = async () =>{
const cursor = await wishlists.find();

return cursor.toArray();
}

const getById = async (id) =>{
return await wishlists.findOne({_id:ObjectID(id)}); }

const update = async (id, {name }) =>{
const result = await wishlists.replaceOne({_id:ObjectID(id)}, {name });
return result.ops[0];
}
   
const removeById = async id =>{
await wishlists.deleteOne({_id:ObjectID(id)});

}
 
module.exports = {getAll, getById, removeById, save, update};
    