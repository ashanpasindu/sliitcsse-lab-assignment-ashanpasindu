 
const {getAll, getById, removeById, save, update} = require('../dal/wishlists.dao');
 
 
const createWishlist = async ({name  }) => {
 
const wishlist = {
    name
     
}
 
return await save(wishlist);
}
 
const getWishlists = async ()=>{
 
return await getAll();
}
 
const getWishlist = async id =>{
return await getById(id);
}

 
const deleteWishlist = async id =>{
    return await removeById(id);
}

const updateWishlist = async (id, {name }) => {
    return await update(id,  {name });}
 
    
    module.exports = {
    createWishlist, 
    getWishlists,
    getWishlist, 
    deleteWishlist,
    updateWishlist 
}