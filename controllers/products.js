const products = [{ title: 'First Book' }];

exports.getAddProducts = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', {
        pageTitle: 'Add Products',
        path: '/admin/add-product'
    });
}

exports.postAddProducts = (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    console.log("shop.js", products);
    //res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", {
        pageTitle: "Shop",
        prods: products,
        path: "/",
        activeShop: true,
        productCSS: true,
    });
}