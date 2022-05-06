
const Koa = require('Koa'); 

const bodyParser = require('koa-bodyparser');

  const productRoutes = require('./routes/products.routes');
  const wishlistRoutes = require('./routes/wishlists.routes');

const app = new Koa();

app.use(bodyParser());

app.use(productRoutes.routes()) .use (productRoutes.allowedMethods());
app.use(wishlistRoutes.routes()) .use (wishlistRoutes.allowedMethods());

 app.listen( 3000); 
 console.log("Application is running on port 3000");
 


