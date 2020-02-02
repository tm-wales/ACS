/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const Product = pygmy.models.model.Product.schema
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("products", (data) => {
            find = {};
            order = {order: 1}
            Product.find(find).sort(order).exec(function(err, products) {
                console.log(products)
                data.products = products
                res.render(path + "products", {data: data});
            });
        })
    });

    router.get("/:group/", function(req, res) {
        let group = req.params.group;

        defaultData("productGroup", (data) => {
            find = {name: group};
            Product.findOne(find).exec(function(err, found) {
                data.group = found
                console.log(found.content)
                res.render(path + "productGroup", {data: data});
            });
        })
    });


    router.get("/:group/:sub", function(req, res) {
        let group = req.params.group;
        let sub = req.params.sub;

        defaultData("productsSub", (data) => {
            find = {name: group},
                    {subDocument: {
                        $elemMatch : {
                            name: sub
                        }
                    }
            };
            Product.findOne(find).exec(function(err, found) {
                data.product = found
                res.render(path + "productSub", {data: data});
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
