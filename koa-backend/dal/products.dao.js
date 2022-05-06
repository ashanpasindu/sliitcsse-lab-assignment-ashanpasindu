

const products = require('./index').db('store').collection('products');

const ObjectID = require('mongodb').ObjectID;

const save = async ({name, description, qty, price}) => {
const result = await products.insertOne ( {name, description, qty, price});

return await products.findOne({_id:ObjectID(result.insertedId)}); }

const getAll = async () =>{
const cursor = await products.find();

return cursor.toArray();
}


const getById = async (id) =>{
return await products.findOne({_id:ObjectID(id)}); }
 
const update = async (id, {name, description, qty,price}) =>{
const result = await products.replaceOne({_id:ObjectID(id)}, {name, description, qty,price});
return result.ops[0];
}

const removeById = async id =>{
await products.deleteOne({_id:ObjectID(id)});

}
    //Export the functions
module.exports = {getAll, getById, removeById, save, update};
    