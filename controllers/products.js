const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', {
        pageTitle: 'Add Products',
        path: '/admin/add-product'
    });
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    //res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", {
        pageTitle: "Shop",
        prods: products,
        path: "/",
        activeShop: true,
        productCSS: true,
    });
}

