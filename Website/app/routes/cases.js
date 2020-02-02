/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const Case = pygmy.models.model.Case.schema
    let data = {};
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("cases", (data) => {
            find = {};
            order = {date: 'desc'}
            Case.find(find).sort(order).exec(function(err, cases) {
                data.cases = cases
                data.cases.services = ['Clean','Restore','Preserve']
                res.render(path + "cases", {data: data});
            });
        })
    });

    router.get("/:case/", function(req, res) {
        let caseStudy = "";
        caseStudy = req.params.case;

        defaultData("case", (data) => {
            find = {name: caseStudy};
            Case.findOne(find).exec(function(err, selected) {
                selected.imagePaths.other.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
                data.case = selected
                res.render(path + "case", {data: data});
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
