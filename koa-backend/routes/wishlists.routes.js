
const Router = require("@koa/router");

const {createWishlist, getWishlist, getWishlists, updateWishlist, deleteWishlist} =require('../API/wishlists.api');

const router = new Router({
prefix:'/wishlists'
})

router.get(  '/',  async ctx=>{
ctx.body= await getWishlists();
})

router.post('/', async ctx=>{

let wishlist = ctx.request.body;
wishlist = await createWishlist(wishlist);

ctx.response.status = 200;
ctx.body = wishlist;
})


router.get( '/:id',  async ctx=>{
    const id = ctx.params.id;
     ctx.body = await getWishlist(id);

})


router.delete('/:id', async ctx=>{

const id = ctx.params.id;
await deleteWishlist(id); }) 


router.put('/:id', async ctx=>{
   
    const id = ctx.params.id; 
    
    let wishlist = ctx.request.body;
    wishlist = await updateWishlist(wishlist);
    ctx.response.status = 200; 
    ctx.body = wishlist;
    })
  
    module.exports = router;
