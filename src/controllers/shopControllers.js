const shopControllers ={
    shop:(req, res)=> res.send('Route for shop view'),
    shop/item/:id : (req, res)=> res.send('Route for find and retrieve a product from an id'),
    about:(req, res)=> res.send('Route for about view'),
    faqs:(req, res)=> res.send('Route for faqs view'),
    }
    

    router.get('/shop',);
    router.get('/shop/item/:id',);
    router.post('/shop/item/:id/add',(req, res)=> res.send('Route for  add the current item to the shop cart'));
    router.get('/shop/cart',(req, res)=> res.send('Route for cart view'));
    router.post('/shop/cart',(req, res)=> res.send('Route for the shop cart view'));
    





    module.exports = shopControllers;