const {getAll,getById,save,update,removeById}=require('../dao/user.dao');

const createUser=async({name,email,role,password})=>{
    const User={
        name,
        email,
        role,
        password
    }
    return await save(User);

}

const getUsers=async()=>{
    return await getAll();
}

const getUser=async id=>{
    return await getById(id);
}

const deleteUser=async id=>{
    return await removeById(id);
}

const updateUser=async(id,{name,email,role,password})=>{
    return await update(id,{name,email,role,password});
}
module.exports={
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
}